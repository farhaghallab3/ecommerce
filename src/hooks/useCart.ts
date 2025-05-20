import { useState, useEffect } from 'react';
import type { Product } from '../types/product';


export const useCart = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product: Product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const removeFromCart = (productId: string) => {
    const newCart = cart.filter(item => item.id !== productId);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return {
    cart,
    isCartOpen,
    addToCart,
    removeFromCart,
    clearCart,
    toggleCart,
    cartCount: cart.length,
    cartTotal: cart.reduce((sum, item) => sum + item.price, 0),
  };
};