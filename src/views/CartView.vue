<script setup>
import { useCartStore } from '../stores/cart';
import { RouterLink } from 'vue-router';

// Menggunakan Pinia store untuk keranjang
const cartStore = useCartStore();

// Fungsi untuk memformat harga menjadi Rupiah
const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
};
</script>

<template>
  <div class="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
    <h1 class="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">Keranjang Belanja Anda</h1>

    <!-- Tampilan jika keranjang tidak kosong -->
    <div v-if="cartStore.items.length > 0">
      <div class="space-y-4">
        <!-- Loop untuk setiap item di keranjang -->
        <div v-for="item in cartStore.items" :key="item.productId" class="flex items-center justify-between border-b pb-4">
          <div class="flex items-center space-x-4">
            <!-- Di sini Anda bisa menambahkan gambar produk jika ada di store -->
            <!-- <img :src="item.imageUrl" class="w-16 h-16 rounded-lg object-cover" /> -->
            <div>
              <h2 class="font-bold text-lg text-gray-800">{{ item.name }}</h2>
              <p class="text-sm text-gray-500">{{ formatPrice(item.price) }} x {{ item.quantity }}</p>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <p class="font-bold text-lg text-gray-800">{{ formatPrice(item.price * item.quantity) }}</p>
            <button @click="cartStore.removeFromCart(item.productId)" class="text-red-500 hover:text-red-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Total dan Checkout -->
      <div class="mt-8">
        <div class="flex justify-between items-center text-xl font-bold text-gray-800">
          <span>Total</span>
          <span>{{ formatPrice(cartStore.totalPrice) }}</span>
        </div>
        <button class="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all duration-300">
          Lanjutkan ke Pembayaran
        </button>
      </div>
    </div>

    <!-- Tampilan jika keranjang kosong -->
    <div v-else class="text-center py-16">
      <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-24 w-24 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      <h2 class="mt-4 text-2xl font-bold text-gray-700">Keranjang Anda Kosong</h2>
      <p class="text-gray-500 mt-2">Sepertinya Anda belum menambahkan produk apapun.</p>
      <RouterLink 
        :to="{ name: 'products' }" 
        class="inline-block mt-6 bg-green-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transition-colors"
      >
        Mulai Belanja
      </RouterLink>
    </div>
  </div>
</template>
