<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');
const error = ref(null);
const isLoading = ref(false);

const handleLogin = () => {
  // Reset error
  error.value = null;

  // Validasi sederhana
  if (!email.value || !password.value) {
    error.value = 'Email dan password tidak boleh kosong.';
    return;
  }

  // Simulasi loading
  isLoading.value = true;

  // Simulasi proses login yang berhasil setelah 1 detik
  setTimeout(() => {
    console.log('Mencoba login dengan:', email.value, password.value);
    
    // Buat token palsu dan simpan di localStorage
    const fakeToken = 'user-logged-in-token-12345';
    localStorage.setItem('user-token', fakeToken);

    isLoading.value = false;

    // Arahkan pengguna ke halaman utama setelah login berhasil
    router.push({ name: 'home' });
  }, 1000);
};
</script>

<template>
  <div class="min-h-[85vh] flex items-center justify-center bg-gray-100 p-4">
    <div class="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl shadow-gray-200/80 overflow-hidden grid grid-cols-1 lg:grid-cols-3">
      
      <!-- Kolom Kiri: Form Login (dibuat lebih lebar) -->
      <div class="p-8 md:p-12 flex flex-col justify-center lg:col-span-2">
        <div class="text-left mb-8">
          <h1 class="text-3xl font-bold text-gray-800">Selamat Datang!</h1>
          <p class="text-gray-500 mt-2">Masuk untuk melanjutkan pesanan Anda.</p>
        </div>
        
        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- Input Email -->
          <div>
            <input 
              v-model="email"
              type="email" 
              placeholder="anda@email.com"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            />
          </div>
          
          <!-- Input Password -->
          <div>
            <input 
              v-model="password"
              type="password" 
              placeholder="••••••••"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            />
          </div>

          <!-- Lupa Password -->
          <div class="text-right">
            <a href="#" class="text-sm font-medium text-green-600 hover:underline">Lupa password?</a>
          </div>

          <!-- Pesan Error -->
          <div v-if="error" class="bg-red-100 text-red-700 text-sm p-3 rounded-lg text-center">
            {{ error }}
          </div>
          
          <!-- Tombol Submit -->
          <div>
            <button 
              type="submit"
              :disabled="isLoading"
              class="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isLoading ? 'Memproses...' : 'Login' }}
            </button>
          </div>
        </form>

        <div class="text-center mt-8">
          <p class="text-sm text-gray-600">
            Belum punya akun? 
            <RouterLink to="#" class="font-bold text-green-600 hover:underline">Daftar di sini</RouterLink>
          </p>
        </div>
      </div>

      <!-- Kolom Kanan: Gambar (dibuat lebih kecil) -->
      <div class="hidden lg:block relative lg:col-span-1">
        <div class="absolute inset-0 bg-gradient-to-t from-green-600 to-emerald-500 opacity-80 rounded-r-2xl"></div>
        <div class="absolute inset-0 flex items-center justify-center p-8 text-white text-center">
          <div>
            <h2 class="text-2xl font-bold text-shadow">Kesegaran Menanti Anda</h2>
            <p class="mt-3 text-md opacity-90 text-shadow-sm">Satu langkah lagi untuk menikmati produk segar.</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.text-shadow {
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}
.text-shadow-sm {
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
}
</style>
