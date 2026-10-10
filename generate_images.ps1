Add-Type -AssemblyName System.Drawing

function Save-Product-Image {
    param(
        [string]$Path,
        [scriptblock]$DrawAction
    )
    $bmp = New-Object System.Drawing.Bitmap 600, 600
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

    # Studio background
    $rect = New-Object System.Drawing.Rectangle 0, 0, 600, 600
    $gradBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush $rect, ([System.Drawing.ColorTranslator]::FromHtml("#0f172a")), ([System.Drawing.ColorTranslator]::FromHtml("#1e293b")), 45.0
    $g.FillRectangle($gradBrush, $rect)
    $gradBrush.Dispose()

    # Studio Spotlight in center
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $path.AddEllipse(100, 100, 400, 400)
    $pbr = New-Object System.Drawing.Drawing2D.PathGradientBrush $path
    $pbr.CenterColor = [System.Drawing.Color]::FromArgb(40, 255, 255, 255)
    $pbr.SurroundColors = @([System.Drawing.Color]::FromArgb(0, 15, 23, 42))
    $g.FillEllipse($pbr, 100, 100, 400, 400)
    $pbr.Dispose()
    $path.Dispose()

    # Subtle ground shadow
    $shadowBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(120, 0, 0, 0))
    $g.FillEllipse($shadowBrush, 150, 520, 300, 40)
    $shadowBrush.Dispose()

    # Execute custom drawing
    & $DrawAction $g

    $bmp.Save($Path, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $g.Dispose()
    $bmp.Dispose()
    Write-Host "Created $Path"
}

# 1. SG Player Edition English Willow Bat
Save-Product-Image "public/product_images/bat_sg_player.jpg" {
    param($g)
    # Cane Handle
    $handleBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml("#ffffff"))
    $g.FillRectangle($handleBrush, 288, 50, 24, 150)
    $handleBrush.Dispose()
    # Spiral rubber grip texture
    $gripPen = New-Object System.Drawing.Pen ([System.Drawing.ColorTranslator]::FromHtml("#cbd5e1")), 2
    for ($y = 60; $y -lt 190; $y += 10) {
        $g.DrawLine($gripPen, 288, $y, 312, $y + 5)
    }
    $gripPen.Dispose()
    # Handle Cone Top
    $coneBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml("#dc2626"))
    $g.FillRectangle($coneBrush, 284, 45, 32, 12)
    $coneBrush.Dispose()

    # English Willow Blade (Light golden wood)
    $bladePoints = @(
        (New-Object System.Drawing.Point 286, 195),
        (New-Object System.Drawing.Point 250, 240),
        (New-Object System.Drawing.Point 245, 490),
        (New-Object System.Drawing.Point 265, 525),
        (New-Object System.Drawing.Point 335, 525),
        (New-Object System.Drawing.Point 355, 490),
        (New-Object System.Drawing.Point 350, 240),
        (New-Object System.Drawing.Point 314, 195)
    )
    $bladeRect = New-Object System.Drawing.Rectangle 245, 195, 110, 330
    $woodBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush $bladeRect, ([System.Drawing.ColorTranslator]::FromHtml("#fef3c7")), ([System.Drawing.ColorTranslator]::FromHtml("#d97706")), 0.0
    $g.FillPolygon($woodBrush, $bladePoints)
    $woodBrush.Dispose()

    # Natural Wood Grains (Straight English Willow grains)
    $grainPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(90, 180, 83, 9)), 1.5
    foreach ($x in @(260, 270, 280, 290, 300, 310, 320, 330, 340)) {
        $g.DrawLine($grainPen, $x, 230, $x + 2, 510)
    }
    $grainPen.Dispose()

    # SG Player Brand Sticker
    $sgBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml("#1e3a8a"))
    $g.FillRectangle($sgBrush, 265, 270, 70, 110)
    $sgBrush.Dispose()
    $goldPen = New-Object System.Drawing.Pen ([System.Drawing.ColorTranslator]::FromHtml("#fbbf24")), 3
    $g.DrawRectangle($goldPen, 265, 270, 70, 110)
    $goldPen.Dispose()

    $fontBig = New-Object System.Drawing.Font "Arial", 22, [System.Drawing.FontStyle]::Bold
    $fontSub = New-Object System.Drawing.Font "Arial", 9, [System.Drawing.FontStyle]::Bold
    $textBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::White)
    $goldBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml("#fbbf24"))

    $sf = New-Object System.Drawing.StringFormat
    $sf.Alignment = [System.Drawing.StringAlignment]::Center

    $g.DrawString("SG", $fontBig, $textBrush, 300, 285, $sf)
    $g.DrawString("PLAYER", $fontSub, $goldBrush, 300, 325, $sf)
    $g.DrawString("EDITION", $fontSub, $goldBrush, 300, 345, $sf)

    $fontBig.Dispose(); $fontSub.Dispose(); $textBrush.Dispose(); $goldBrush.Dispose(); $sf.Dispose()
}

Write-Host "Batch 1 complete"
