import './assets/main.css'; // Impor file CSS utama (seringkali untuk Tailwind CSS)

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// 1. Buat instance aplikasi Vue dari komponen root (App.vue)
const app = createApp(App);

// 2. Gunakan Pinia untuk manajemen state global
// Ini membuat state store tersedia di seluruh komponen
app.use(createPinia());

// 3. Gunakan Vue Router yang telah kita konfigurasi
// Ini mengaktifkan sistem routing di aplikasi
app.use(router);

// 4. Pasang (mount) aplikasi ke elemen DOM dengan id 'app'
// Elemen ini biasanya ada di file public/index.html
app.mount('#app');
