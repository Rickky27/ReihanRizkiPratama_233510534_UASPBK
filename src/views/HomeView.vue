<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="space-y-20 md:space-y-28">
    <!-- 1. Hero Section -->
    <section class="bg-emerald-50 rounded-2xl text-center p-12 md:p-24">
      <div class="relative z-10">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-4 text-gray-800 animate-fade-in-down">
          Susu Segar Langsung ke Pintu Anda 🏡
        </h1>
        <p class="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-600 animate-fade-in-up">
          Nikmati kesegaran susu murni dari peternak lokal dengan sistem pre-order yang mudah dan terpercaya.
        </p>
        <RouterLink 
          :to="{ name: 'products' }" 
          class="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/40 animate-bounce-in"
        >
          Lihat Produk Sekarang
        </RouterLink>
      </div>
    </section>

    <!-- 2. Keunggulan Kami -->
    <section>
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800">Kenapa Memilih MooFresh?</h2>
        <p class="text-gray-600 mt-2">Kualitas dan kepercayaan adalah prioritas kami.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Fitur 1: 100% Segar -->
        <div class="feature-card">
          <div class="feature-icon bg-green-100 text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m-1 12V11a2 2 0 00-2-2h-1a2 2 0 00-2 2v6m0 0a2 2 0 002 2h1a2 2 0 002-2v0m-9 0V11a2 2 0 012-2h1a2 2 0 012 2v6m0 0a2 2 0 01-2 2h-1a2 2 0 01-2-2v0" /></svg>
          </div>
          <h3 class="text-xl font-bold mb-2">100% Segar dari Peternakan</h3>
          <p class="text-gray-600">Susu diperah dan diantar pada hari yang sama untuk menjamin kesegaran maksimal.</p>
        </div>
        
        <!-- Fitur 2: Proses Mudah -->
        <div class="feature-card">
          <div class="feature-icon bg-blue-100 text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
          </div>
          <h3 class="text-xl font-bold mb-2">Proses Pre-Order Mudah</h3>
          <p class="text-gray-600">Pesan kapan saja dan dari mana saja melalui platform kami yang ramah pengguna.</p>
        </div>
        
        <!-- Fitur 3: Dukung Lokal -->
        <div class="feature-card">
          <div class="feature-icon bg-red-100 text-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          </div>
          <h3 class="text-xl font-bold mb-2">Dukung Peternak Lokal</h3>
          <p class="text-gray-600">Setiap pembelian Anda membantu meningkatkan kesejahteraan peternak di daerah kami.</p>
        </div>
      </div>
    </section>

    <!-- 3. Call to Action (CTA) Bawah -->
    <section class="bg-green-600 text-white text-center p-12 md:p-20 rounded-2xl">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Siap Merasakan Bedanya?</h2>
        <p class="mb-8 max-w-2xl mx-auto">
            Jangan lewatkan kesempatan untuk menikmati susu segar berkualitas tinggi. Jelajahi pilihan produk kami dan buat pesanan pertama Anda hari ini!
        </p>
        <RouterLink 
            :to="{ name: 'products' }" 
            class="inline-block bg-white hover:bg-gray-200 text-green-700 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-110 shadow-lg"
        >
            Mulai Belanja
        </RouterLink>
    </section>
  </div>
</template>

<style scoped>
.feature-icon {
  width: 3rem; /* W-12 */
  height: 3rem; /* H-12 */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%; /* Bulat */
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem; /* Mb-4 */
}

.feature-card {
  background: rgb(101, 100, 100);
  border: 1px solid #e5e7eb; /* Gray-200 */
  border-radius: 1rem; /* Rounded-2xl */
  padding: 2rem; /* P-8 */
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-0.5rem);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

/* Animasi Keyframes */
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes bounceIn {
  0% { opacity: 0; transform: scale(0.3); }
  50% { opacity: 1; transform: scale(1.05); }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); }
}

/* Menerapkan Animasi */
.animate-fade-in-down {
  animation: fadeInDown 0.8s ease-out forwards;
}
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out 0.4s forwards;
  opacity: 0; /* Mulai dari tidak terlihat */
}
.animate-bounce-in {
  animation: bounceIn 1s ease-out 0.8s forwards;
  opacity: 0; /* Mulai dari tidak terlihat */
}
</style>
