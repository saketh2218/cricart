import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const localData = localStorage.getItem('criccart_cart');
      return localData ? JSON.parse(localData) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('criccart_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // item can include customServices: { knocking: true, scuffSheet: true, etc. }
  const addToCart = (product, customServices = null) => {
    setCartItems((prevItems) => {
      // Create a unique key if custom services are attached
      const servicesKey = customServices ? JSON.stringify(customServices) : 'standard';
      const itemKey = `${product.id}_${servicesKey}`;

      const existingIndex = prevItems.findIndex((item) => item.cartKey === itemKey);

      let serviceCost = 0;
      if (customServices) {
        if (customServices.knocking) serviceCost += 24.99;
        if (customServices.scuffSheet) serviceCost += 9.99;
        if (customServices.toeGuard) serviceCost += 7.99;
        if (customServices.oiling) serviceCost += 4.99;
      }

      if (existingIndex > -1) {
        return prevItems.map((item, idx) =>
          idx === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [
        ...prevItems,
        {
          ...product,
          cartKey: itemKey,
          customServices,
          serviceCost,
          unitPrice: Number(product.price) + serviceCost,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (cartKeyOrId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.cartKey !== cartKeyOrId && item.id !== cartKeyOrId)
    );
  };

  const updateQuantity = (cartKeyOrId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        (item.cartKey === cartKeyOrId || item.id === cartKeyOrId)
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cartItems.reduce(
    (total, item) => total + (item.unitPrice || item.price) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};