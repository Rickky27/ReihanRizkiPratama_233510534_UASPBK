import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  // Menggunakan HTML5 History API untuk URL yang bersih tanpa '#'
  history: createWebHistory(import.meta.env.BASE_URL),
  
  // Definisi semua rute/halaman dalam aplikasi
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/produk',
      name: 'products',
      // Lazy Loading: Komponen ini hanya akan diunduh saat pertama kali diakses.
      // Ini mempercepat waktu muat awal aplikasi.
      component: () => import('../views/ProductsView.vue'),
    },
    {
      path: '/keranjang',
      name: 'cart',
      component: () => import('../views/CartView.vue'),
      // Meta field: Menandai bahwa rute ini memerlukan autentikasi.
      meta: { requiresAuth: true },
    },
    {
      path: '/pesanan',
      name: 'orders',
      component: () => import('../views/OrdersView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      // Catch-all route untuk menangani URL yang tidak cocok (404 Not Found)
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue')
    }
  ],

  // PENINGKATAN: Mengontrol posisi scroll saat berpindah halaman
  scrollBehavior(to, from, savedPosition) {
    // Jika pengguna menekan tombol back/forward di browser, kembali ke posisi scroll yang tersimpan
    if (savedPosition) {
      return savedPosition;
    }
    // Jika tidak, selalu scroll ke paling atas halaman baru
    else {
      return { top: 0 };
    }
  },
});

// Navigation Guard (Penjaga Navigasi)
// Fungsi ini akan berjalan SETIAP KALI pengguna mencoba berpindah halaman.
router.beforeEach((to, from, next) => {
  // Cek apakah rute yang dituju memiliki penanda 'requiresAuth: true'
  const requiresAuth = to.meta.requiresAuth;
  
  // Cek apakah pengguna sudah login (dengan memeriksa token di localStorage)
  const isLoggedIn = !!localStorage.getItem('user-token');

  // JIKA rute butuh login TAPI pengguna BELUM login
  if (requiresAuth && !isLoggedIn) {
    // Alihkan mereka ke halaman login.
    next({ name: 'login' });
  } 
  // JIKA TIDAK (pengguna sudah login ATAU rute tidak butuh login)
  else {
    // Izinkan navigasi untuk melanjutkan.
    next();
  }
});

// Ekspor instance router agar bisa digunakan di main.js
export default router;
