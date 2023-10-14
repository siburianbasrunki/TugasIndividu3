# Penjelasan Komponen Stateful pada Kode React

Kode yang diberikan merupakan contoh komponen React yang menggunakan state dan efek samping dengan bantuan React Hooks. Dalam konteks React, komponen yang menggunakan state disebut sebagai "komponen stateful", yang berbeda dari "komponen stateless".

## Komponen Stateful

Komponen stateful adalah komponen dalam React yang memiliki kemampuan untuk menyimpan dan mengelola data dalam state internalnya. Dalam kode ini, komponen `Contact` adalah contoh dari komponen stateful.

### Penggunaan State

Dalam kode `Contact`, kita menggunakan React Hook `useState` untuk mengelola dua buah state:

1. `formData`: State ini digunakan untuk menyimpan data inputan formulir seperti nama, email, dan pesan yang dimasukkan oleh pengguna. Setiap kali pengguna memasukkan data baru, state ini diperbarui dengan bantuan `setFormData`.

2. `submittedData`: State ini digunakan untuk menyimpan data yang telah dikirim oleh pengguna dan disimpan di dalam `localStorage`. Setiap kali ada data yang dikirim, state ini diperbarui dengan bantuan `setSubmittedData`.

### Penggunaan useEffect

Kode ini juga menggunakan React Hook `useEffect` untuk mengatur efek samping. Efek samping digunakan untuk melakukan operasi di luar siklus hidup komponen, dalam hal ini, efek samping digunakan untuk mengambil dan menyimpan data dari dan ke `localStorage`. Ini memungkinkan kita untuk mempertahankan data pengguna yang telah dikirim sebelumnya bahkan setelah halaman diperbarui.

## Komponen Stateless

Komponen stateless (atau functional component) adalah komponen React yang tidak memiliki state internal sendiri dan tidak menggunakan metode `render` seperti yang digunakan oleh komponen stateful tradisional.

Dalam kode ini, `Header` dan `Footer` adalah contoh komponen stateless. Mereka adalah komponen sederhana yang hanya berfungsi sebagai tampilan statis dan tidak memiliki state atau efek samping.

Dalam Ringkasan, komponen `Contact` adalah contoh komponen stateful dalam kode ini, sementara `Header` dan `Footer` adalah contoh komponen stateless.
