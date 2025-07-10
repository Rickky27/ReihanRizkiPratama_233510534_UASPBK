<script setup>
import { ref, onMounted, watch } from 'vue';
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { useCartStore } from './stores/cart';

// Menggunakan Pinia store untuk keranjang
const cartStore = useCartStore();

// Menggunakan router untuk navigasi
const router = useRouter();

// State reaktif untuk status login
const isLoggedIn = ref(false);

// Fungsi untuk memeriksa status login dari localStorage
const checkLoginStatus = () => {
  const token = localStorage.getItem('user-token');
  isLoggedIn.value = !!token; // Mengubah token menjadi boolean (true jika ada, false jika tidak)
};

// Fungsi untuk logout
const logout = () => {
  localStorage.removeItem('user-token'); // Hapus token
  checkLoginStatus(); // Perbarui status UI
  router.push({ name: 'login' }); // Arahkan ke halaman login
};

// Periksa status login saat komponen pertama kali dimuat
onMounted(() => {
  checkLoginStatus();
});

// Perhatikan perubahan route untuk memperbarui status login
// Ini berguna jika pengguna login dan diarahkan kembali, UI header harus update.
watch(() => router.currentRoute.value, () => {
  checkLoginStatus();
});
</script>

<template>
  <div id="app-wrapper" class="flex flex-col min-h-screen bg-gray-100 font-sans">
    <header class="bg-white/80 backdrop-blur-lg shadow-lg sticky top-0 z-50">
      <nav class="container mx-auto px-6 py-3 flex justify-between items-center">
        <!-- Logo -->
        <RouterLink :to="{ name: 'home' }" class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
          MooFresh
        </RouterLink>

        <!-- Menu Navigasi -->
        <ul class="flex items-center space-x-4 md:space-x-6 text-gray-600">
          <li><RouterLink :to="{ name: 'home' }" class="nav-link">Beranda</RouterLink></li>
          <li><RouterLink :to="{ name: 'products' }" class="nav-link">Produk</RouterLink></li>
          
          <!-- Menu untuk Pengguna yang Sudah Login -->
          <template v-if="isLoggedIn">
            <li>
              <RouterLink :to="{ name: 'cart' }" class="nav-link relative">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span v-if="cartStore.totalItems > 0" class="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white">
                  {{ cartStore.totalItems }}
                </span>
              </RouterLink>
            </li>
            <li><RouterLink to="/pesanan" class="nav-link">Pesanan</RouterLink></li>
            <li><button @click="logout" class="bg-red-100 text-red-600 px-4 py-2 rounded-full hover:bg-red-200 hover:text-red-700 transition-all duration-300 text-sm font-semibold">Logout</button></li>
          </template>

          <!-- Menu untuk Pengguna Publik (Belum Login) -->
          <template v-else>
            <li>
                <RouterLink :to="{ name: 'login' }" class="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all duration-300 font-semibold">
                    Login
                </RouterLink>
            </li>
          </template>
        </ul>
      </nav>
    </header>

    <!-- Konten Utama -->
    <main class="flex-grow container mx-auto p-6">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white mt-12">
        <div class="container mx-auto py-8 px-6 text-center border-t-4 border-emerald-500">
            <p class="font-semibold text-lg">&copy; 2025 MooFresh Pre-Order</p>
            <p class="text-sm text-gray-400 mt-1">Susu Segar Langsung dari Peternak Lokal untuk Anda.</p>
        </div>
    </footer>
  </div>
</template>

<style>
/* Mengimpor font dari Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Styling untuk link navigasi kustom */
.nav-link {
  position: relative;
  padding: 8px 4px;
  font-weight: 500;
  color: #4b5563; /* gray-600 */
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #10b981; /* emerald-500 */
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #10b981; /* emerald-500 */
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.router-link-exact-active::after {
  width: 100%;
}

.router-link-exact-active {
  color: #10b981; /* Warna emerald-500 */
  font-weight: 600;
}


/* Transisi halaman yang lebih halus */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
