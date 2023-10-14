import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  // Menyimpan pesan ke localStorage saat mengirim formulir
  const saveToLocalStorage = (data) => {
    const storedData = JSON.parse(
      localStorage.getItem("submittedData") || "[]"
    );
    storedData.push(data);
    localStorage.setItem("submittedData", JSON.stringify(storedData));
  };

  useEffect(() => {
    // Mengambil data pesan yang sudah disimpan di localStorage
    const storedData = JSON.parse(
      localStorage.getItem("submittedData") || "[]"
    );
    setSubmittedData(storedData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    saveToLocalStorage(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <Header />
      <div className="bg-light min-h-screen py-16 flex justify-center ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Formulir Input Pesan (Kiri) */}
            <div>
              <h1 className="text-5xl font-bold text-primary mb-4">
                Hubungi Kami
              </h1>
              <form onSubmit={handleSubmit} className="max-w-prose">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-lg font-semibold">
                    Nama:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-lg font-semibold"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-lg font-semibold"
                  >
                    Pesan:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full p-2 border rounded h-32"
                    required
                  />
                </div>

                <button className="btn btn-primary" type="submit">
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Daftar Pesan (Kanan) */}
            <div>
              {submittedData.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    Pesan yang Telah Dikirim
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr>
                          <th>Nama</th>
                          <th>Email</th>
                          <th>Pesan</th>
                        </tr>
                      </thead>
                      <tbody>
                        {submittedData.map((data, index) => (
                          <tr key={index}>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.message}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
