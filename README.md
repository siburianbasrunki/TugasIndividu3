# Tugas Individu 3
**Nama:** Basrunki Siburian

**NIM:** 120140007

# Catatan Penggunaan Komponen Statefull

Pada file ini, saya membuat komponen stateful untuk mengelola data pengguna yang diinputkan dalam formulir kontak. Komponen "Contact" menggunakan React Hooks, seperti `useState` dan `useEffect`.

## State Stateful

Komponen "Contact" menggunakan React Hook `useState` untuk mengelola dua buah state:

1. `formData`: Ini adalah state yang digunakan untuk menyimpan data yang diisi oleh pengguna dalam formulir kontak, seperti nama, email, dan pesan. Setiap kali ada perubahan dalam inputan, state ini diperbarui dengan bantuan fungsi `setFormData`.

2. `submittedData`: State ini digunakan untuk menyimpan data yang telah dikirim oleh pengguna. Data yang dikirim ditambahkan ke dalam state ini menggunakan `setSubmittedData`. Selain itu, data ini juga disimpan di dalam `localStorage` sehingga dapat dipertahankan bahkan setelah halaman diperbarui.
