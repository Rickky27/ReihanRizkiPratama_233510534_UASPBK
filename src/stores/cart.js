import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // STATE
  const items = ref([]); // Contoh: [{ productId: 'prod-001', name: 'Susu Sapi', price: 15000, quantity: 2 }]

  // GETTERS
  const totalItems = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0);
  });

  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => total + (item.price * item.quantity), 0);
  });

  // ACTIONS
  function addToCart(product) {
    const existingItem = items.value.find(item => item.productId === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      items.value.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      });
    }
  }

  function removeFromCart(productId) {
    const index = items.value.findIndex(item => item.productId === productId);
    if (index !== -1) {
      items.value.splice(index, 1);
    }
  }

  function clearCart() {
    items.value = [];
  }

  return { items, totalItems, totalPrice, addToCart, removeFromCart, clearCart }
})