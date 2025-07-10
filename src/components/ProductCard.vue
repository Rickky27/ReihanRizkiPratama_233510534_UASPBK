<script setup>
// Menerima 'product' sebagai properti dari komponen induk
defineProps({
  product: {
    type: Object,
    required: true
  }
});

// Mendefinisikan event 'add-to-cart' yang akan dikirim ke induk
const emit = defineEmits(['add-to-cart']);

const handleAddToCart = (product) => {
  emit('add-to-cart', product);
};
</script>

<template>
  <div class="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
    <!-- Bagian Gambar Produk -->
    <div class="w-full h-48 bg-gray-200 flex items-center justify-center">
      <img 
        :src="product.imageUrl" 
        :alt="product.name" 
        class="w-full h-full object-cover"
        @error="event => event.target.src = 'https://placehold.co/600x400/e2e8f0/94a3b8?text=Gambar+Rusak'"
      />
    </div>
    
    <!-- Bagian Deskripsi Produk -->
    <div class="p-5">
      <h3 class="text-lg font-bold text-gray-800 truncate">{{ product.name }}</h3>
      <p class="text-gray-600 mt-1 text-sm">{{ product.description }}</p>
      <div class="flex justify-between items-center mt-4">
        <span class="text-xl font-bold text-green-600">Rp {{ product.price.toLocaleString('id-ID') }}</span>
        <button 
          @click="handleAddToCart(product)"
          class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors">
          + Keranjang
        </button>
      </div>
    </div>
  </div>
</template>
