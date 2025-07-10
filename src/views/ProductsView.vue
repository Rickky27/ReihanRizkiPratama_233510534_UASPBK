<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import ProductCard from '../components/ProductCard.vue'; // Impor komponen kartu
import { useCartStore } from '../stores/cart'; // Impor Pinia store

const products = ref([]);
const isLoading = ref(true);
const error = ref(null);
const cartStore = useCartStore(); // Inisialisasi store

// Fungsi untuk mengambil data produk dari API
const fetchProducts = async () => {
  try {
    // Pastikan URL ini sesuai dengan tempat json-server Anda berjalan
    const response = await axios.get('http://localhost:3000/products');
    products.value = response.data;
  } catch (err) {
    console.error("Gagal mengambil data produk:", err);
    error.value = 'Tidak dapat memuat data produk. Pastikan server API berjalan.';
  } finally {
    isLoading.value = false;
  }
};

// Panggil fungsi addToCart dari Pinia store
const handleAddToCart = (product) => {
  cartStore.addToCart(product);
  // Opsional: tampilkan notifikasi
  alert(`${product.name} telah ditambahkan ke keranjang!`);
};

// Ambil data saat komponen dimuat
onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-6 text-gray-800">Pilih Susu Segar Favoritmu</h1>

    <!-- Tampilan saat Loading -->
    <div v-if="isLoading" class="text-center py-10">
      <p>Memuat produk...</p>
    </div>

    <!-- Tampilan jika ada Error -->
    <div v-else-if="error" class="text-center py-10 bg-red-100 text-red-700 rounded-lg">
      <p>{{ error }}</p>
    </div>

    <!-- Tampilan jika berhasil dan ada produk -->
    <div v-else-if="products.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard 
        v-for="product in products" 
        :key="product.id" 
        :product="product"
        @add-to-cart="handleAddToCart" 
      />
    </div>
    
    <!-- Tampilan jika tidak ada produk -->
    <div v-else class="text-center py-10">
      <p>Saat ini tidak ada produk yang tersedia.</p>
    </div>
  </div>
</template>
