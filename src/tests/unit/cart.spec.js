import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from '@/stores/cart'
import { describe, it, expect, beforeEach } from 'vitest'

describe('Cart Store', () => {
  // Inisialisasi Pinia sebelum setiap test
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('memiliki state awal yang kosong', () => {
    const cartStore = useCartStore()
    expect(cartStore.items).toEqual([])
    expect(cartStore.totalItems).toBe(0)
    expect(cartStore.totalPrice).toBe(0)
  })

  it('dapat menambahkan produk baru ke keranjang', () => {
    const cartStore = useCartStore()
    const product = { id: 'prod-001', name: 'Susu Sapi', price: 15000 }
    
    cartStore.addToCart(product)
    
    expect(cartStore.items.length).toBe(1)
    expect(cartStore.items[0].productId).toBe('prod-001')
    expect(cartStore.items[0].quantity).toBe(1)
    expect(cartStore.totalPrice).toBe(15000)
  })

  it('menambah kuantitas jika produk yang sama ditambahkan lagi', () => {
    const cartStore = useCartStore()
    const product = { id: 'prod-001', name: 'Susu Sapi', price: 15000 }

    cartStore.addToCart(product) // Tambah pertama kali
    cartStore.addToCart(product) // Tambah lagi
    
    expect(cartStore.items.length).toBe(1)
    expect(cartStore.items[0].quantity).toBe(2)
    expect(cartStore.totalItems).toBe(2)
    expect(cartStore.totalPrice).toBe(30000)
  })

  it('dapat menghapus produk dari keranjang', () => {
    const cartStore = useCartStore()
    const product = { id: 'prod-001', name: 'Susu Sapi', price: 15000 }
    
    cartStore.addToCart(product)
    expect(cartStore.items.length).toBe(1)

    cartStore.removeFromCart('prod-001')
    expect(cartStore.items.length).toBe(0)
    expect(cartStore.totalPrice).toBe(0)
  })

  it('dapat membersihkan semua isi keranjang', () => {
    const cartStore = useCartStore()
    const product1 = { id: 'prod-001', name: 'Susu Sapi', price: 15000 }
    const product2 = { id: 'prod-002', name: 'Yogurt', price: 25000 }

    cartStore.addToCart(product1)
    cartStore.addToCart(product2)
    expect(cartStore.totalItems).toBe(2)

    cartStore.clearCart()
    expect(cartStore.items).toEqual([])
    expect(cartStore.totalItems).toBe(0)
  })
})
