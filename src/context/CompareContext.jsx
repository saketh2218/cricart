import { createContext, useContext, useState, useEffect } from 'react';

const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
  const [compareItems, setCompareItems] = useState(() => {
    try {
      const saved = localStorage.getItem('criccart_compare');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('criccart_compare', JSON.stringify(compareItems));
  }, [compareItems]);

  const addToCompare = (product) => {
    setCompareItems((prev) => {
      if (prev.some((p) => p.id === product.id)) return prev;
      if (prev.length >= 4) {
        alert('You can compare up to 4 cricket products at a time.');
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromCompare = (productId) => {
    setCompareItems((prev) => prev.filter((p) => p.id !== productId));
  };

  const clearCompare = () => {
    setCompareItems([]);
  };

  const isInCompare = (productId) => {
    return compareItems.some((p) => p.id === productId);
  };

  return (
    <CompareContext.Provider
      value={{
        compareItems,
        addToCompare,
        removeFromCompare,
        clearCompare,
        isInCompare,
        compareCount: compareItems.length,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  return useContext(CompareContext);
};
