from PIL import Image, ImageDraw, ImageFilter

# 1. bat_training_ghost.jpg: Crop and adapt sg_player bat to narrow precision blade with green grip
try:
    sg = Image.open("public/product_images/bat_sg_player.jpg").convert("RGB")
    w, h = sg.size
    # Adjust handle to neon green
    draw = ImageDraw.Draw(sg)
    # Give handle neon/lime color tone overlay
    for y in range(int(h * 0.08), int(h * 0.32)):
        for x in range(int(w * 0.46), int(w * 0.54)):
            r, g, b = sg.getpixel((x, y))
            sg.putpixel((x, y), (int(r * 0.3 + 30), int(g * 0.7 + 160), int(b * 0.3 + 30)))
    draw.text((w // 2, int(h * 0.60)), "GHOST TRAINING PRO", fill=(255, 255, 255), anchor="mm")
    sg.save("public/product_images/bat_training_ghost.jpg", "JPEG", quality=95)
    print("bat_training_ghost.jpg created")
except Exception as e:
    print("Error training bat:", e)

# 2. gloves_sg_keeper.jpg: Adapt batting gloves into wicket keeping gloves with yellow octopus suction palm & short cuffs
try:
    gl = Image.open("public/product_images/gloves_puma_pro.jpg").convert("RGB")
    draw = ImageDraw.Draw(gl)
    w, h = gl.size
    # Tint palms to yellow/orange rubber suction grip
    for y in range(int(h * 0.38), int(h * 0.68)):
        for x in range(int(w * 0.53), int(w * 0.83)):
            r, g, b = gl.getpixel((x, y))
            if r > 150 and g > 150: # white leather
                gl.putpixel((x, y), (245, 175, 25))
    draw.text((int(w * 0.28), int(h * 0.76)), "SG KEEPING", fill=(255, 255, 255), anchor="mm")
    draw.text((int(w * 0.70), int(h * 0.76)), "SG KEEPING", fill=(255, 255, 255), anchor="mm")
    gl.save("public/product_images/gloves_sg_keeper.jpg", "JPEG", quality=95)
    print("gloves_sg_keeper.jpg created")
except Exception as e:
    print("Error keeper gloves:", e)

# 3. thigh_guard_aero.jpg: Protective curved ergonomic white thigh guard on slate
try:
    bg = Image.open("public/product_images/bat_grips_matrix.jpg").convert("RGB")
    # Blur background to slate texture
    bg = bg.filter(ImageFilter.GaussianBlur(radius=8))
    draw = ImageDraw.Draw(bg)
    w, h = bg.size
    # Draw curved white protective thigh plate
    draw.rounded_rectangle([int(w * 0.20), int(h * 0.18), int(w * 0.58), int(h * 0.82)], radius=50, fill=(245, 248, 252), outline=(16, 185, 129), width=5)
    draw.rounded_rectangle([int(w * 0.62), int(h * 0.28), int(w * 0.84), int(h * 0.76)], radius=40, fill=(225, 230, 238), outline=(148, 163, 184), width=4)
    draw.rounded_rectangle([int(w * 0.15), int(h * 0.12), int(w * 0.88), int(h * 0.18)], radius=15, fill=(15, 23, 42), outline=(16, 185, 129), width=3)
    draw.text((w // 2, int(h * 0.15)), "AERO ERGONOMIC DUAL THIGH GUARD", fill=(255, 255, 255), anchor="mm")
    draw.text((int(w * 0.39), int(h * 0.50)), "AERO\nCOMBO PRO", fill=(16, 185, 129), anchor="mm", align="center")
    bg.save("public/product_images/thigh_guard_aero.jpg", "JPEG", quality=95)
    print("thigh_guard_aero.jpg created")
except Exception as e:
    print("Error thigh guard:", e)

# 4. bat_padded_cover.jpg: Full padded thermal bat cover bag on slate
try:
    bg = Image.open("public/product_images/bat_grips_matrix.jpg").convert("RGB").filter(ImageFilter.GaussianBlur(radius=8))
    draw = ImageDraw.Draw(bg)
    w, h = bg.size
    cover_poly = [
        (int(w * 0.46), int(h * 0.08)), (int(w * 0.54), int(h * 0.08)),
        (int(w * 0.58), int(h * 0.28)), (int(w * 0.60), int(h * 0.88)),
        (int(w * 0.56), int(h * 0.94)), (int(w * 0.44), int(h * 0.94)),
        (int(w * 0.40), int(h * 0.88)), (int(w * 0.42), int(h * 0.28))
    ]
    draw.polygon(cover_poly, fill=(20, 30, 48), outline=(37, 99, 235), width=6)
    # Heavy zipper
    draw.line([(w // 2, int(h * 0.10)), (w // 2, int(h * 0.92))], fill=(220, 225, 235), width=4)
    # Shoulder sling
    draw.arc([int(w * 0.22), int(h * 0.25), int(w * 0.46), int(h * 0.75)], start=90, end=270, fill=(37, 99, 235), width=16)
    draw.rectangle([int(w * 0.42), int(h * 0.45), int(w * 0.58), int(h * 0.58)], fill=(30, 58, 138), outline=(255, 255, 255), width=2)
    draw.text((w // 2, int(h * 0.49)), "GRAY-NICOLLS", fill=(255, 255, 255), anchor="mm")
    draw.text((w // 2, int(h * 0.54)), "THERMO PADDED", fill=(251, 191, 36), anchor="mm")
    bg.save("public/product_images/bat_padded_cover.jpg", "JPEG", quality=95)
    print("bat_padded_cover.jpg created")
except Exception as e:
    print("Error bat cover:", e)

# 5. ball_heavy_tennis.jpg: 3 neon heavy tennis balls on dark slate
try:
    bg = Image.open("public/product_images/bat_grips_matrix.jpg").convert("RGB").filter(ImageFilter.GaussianBlur(radius=8))
    draw = ImageDraw.Draw(bg)
    w, h = bg.size
    balls = [
        (int(w * 0.35), int(h * 0.42), int(w * 0.16)),
        (int(w * 0.65), int(h * 0.42), int(w * 0.16)),
        (int(w * 0.50), int(h * 0.65), int(w * 0.17))
    ]
    for cx, cy, r in balls:
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(196, 240, 60), outline=(130, 190, 20), width=4)
        draw.arc([cx - r + 15, cy - r + 15, cx + r - 15, cy + r - 15], start=45, end=225, fill=(255, 255, 255), width=6)
        draw.text((cx, cy), "NIVIA\nHEAVY", fill=(50, 100, 10), anchor="mm", align="center")
    bg.save("public/product_images/ball_heavy_tennis.jpg", "JPEG", quality=95)
    print("ball_heavy_tennis.jpg created")
except Exception as e:
    print("Error tennis balls:", e)

# 6. jersey_match_whites.jpg: Cricket whites polo shirt on studio background
try:
    bg = Image.open("public/product_images/bat_grips_matrix.jpg").convert("RGB").filter(ImageFilter.GaussianBlur(radius=8))
    draw = ImageDraw.Draw(bg)
    w, h = bg.size
    shirt_pts = [
        (int(w * 0.32), int(h * 0.18)), (int(w * 0.18), int(h * 0.30)), (int(w * 0.25), int(h * 0.38)),
        (int(w * 0.32), int(h * 0.33)), (int(w * 0.32), int(h * 0.85)), (int(w * 0.68), int(h * 0.85)),
        (int(w * 0.68), int(h * 0.33)), (int(w * 0.75), int(h * 0.38)), (int(w * 0.82), int(h * 0.30)),
        (int(w * 0.68), int(h * 0.18)), (int(w * 0.58), int(h * 0.23)), (int(w * 0.42), int(h * 0.23))
    ]
    draw.polygon(shirt_pts, fill=(250, 250, 252), outline=(210, 215, 225), width=5)
    # Polo collar & placket
    draw.polygon([(int(w * 0.42), int(h * 0.23)), (w // 2, int(h * 0.33)), (int(w * 0.58), int(h * 0.23))], fill=(30, 58, 138))
    draw.line([(w // 2, int(h * 0.33)), (w // 2, int(h * 0.48))], fill=(30, 58, 138), width=4)
    draw.text((int(w * 0.40), int(h * 0.40)), "PRO-FIT\nWHITES", fill=(30, 58, 138), anchor="mm")
    bg.save("public/product_images/jersey_match_whites.jpg", "JPEG", quality=95)
    print("jersey_match_whites.jpg created")
except Exception as e:
    print("Error jersey:", e)

# 7. trousers_cricket.jpg: Cricket pants with reinforced knees
try:
    bg = Image.open("public/product_images/bat_grips_matrix.jpg").convert("RGB").filter(ImageFilter.GaussianBlur(radius=8))
    draw = ImageDraw.Draw(bg)
    w, h = bg.size
    pants_pts = [
        (int(w * 0.34), int(h * 0.15)), (int(w * 0.66), int(h * 0.15)),
        (int(w * 0.70), int(h * 0.88)), (int(w * 0.56), int(h * 0.88)),
        (w // 2, int(h * 0.48)), (int(w * 0.44), int(h * 0.88)), (int(w * 0.30), int(h * 0.88))
    ]
    draw.polygon(pants_pts, fill=(250, 250, 252), outline=(210, 215, 225), width=5)
    draw.rectangle([int(w * 0.34), int(h * 0.15), int(w * 0.66), int(h * 0.20)], fill=(225, 230, 240))
    # Knee slide patches
    draw.rounded_rectangle([int(w * 0.35), int(h * 0.52), int(w * 0.46), int(h * 0.68)], radius=12, fill=(240, 243, 250), outline=(180, 190, 205), width=3)
    draw.rounded_rectangle([int(w * 0.54), int(h * 0.52), int(w * 0.65), int(h * 0.68)], radius=12, fill=(240, 243, 250), outline=(180, 190, 205), width=3)
    bg.save("public/product_images/trousers_cricket.jpg", "JPEG", quality=95)
    print("trousers_cricket.jpg created")
except Exception as e:
    print("Error trousers:", e)
