# Penggunaan Komponen Stateful dalam File "Contact"

Dalam file "Contact.js," kita memiliki sebuah contoh penggunaan komponen stateful. Komponen "Contact" adalah komponen utama yang memanfaatkan React Hooks, seperti `useState` dan `useEffect`, untuk mengelola data pengguna dan efek samping.

## State Stateful

Komponen "Contact" menggunakan React Hook `useState` untuk mengelola dua buah state:

1. `formData`: Ini adalah state yang digunakan untuk menyimpan data yang diisi oleh pengguna dalam formulir kontak. State ini mencakup informasi seperti nama, email, dan pesan yang diisi pengguna. Setiap kali ada perubahan dalam inputan, state ini diperbarui dengan bantuan fungsi `setFormData`.

2. `submittedData`: State ini digunakan untuk menyimpan data yang telah dikirim oleh pengguna. Ketika pengguna mengirim pesan, data tersebut ditambahkan ke dalam state ini menggunakan `setSubmittedData`. Selain itu, data ini juga disimpan di dalam `localStorage` sehingga dapat dipertahankan bahkan setelah halaman diperbarui.

## Efek Samping

Efek samping diatur dengan React Hook `useEffect`. Dalam komponen "Contact," kita menggunakan `useEffect` untuk membaca dan menyimpan data dari dan ke `localStorage`. Ini memastikan bahwa data yang telah dikirim sebelumnya dapat dipulihkan saat halaman dimuat ulang.

Penggunaan komponen stateful ini memungkinkan aplikasi untuk menyimpan dan mengelola data pengguna dengan efisien, sambil memberikan pengalaman yang lebih baik kepada pengguna dengan melestarikan data mereka bahkan setelah mereka menutup atau menyegarkan halaman.

Komponen stateful ini adalah inti dari halaman kontak dalam aplikasi dan memungkinkan pengguna untuk mengirim pesan dan melihat pesan-pesan sebelumnya yang telah dikirimkan.
