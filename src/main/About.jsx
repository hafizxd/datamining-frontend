import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow p-8 overflow-hidden">
        <div className="max-w-7xl mx-auto p-6 overflow-y-auto max-h-[80vh]">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Diabetes</h1>
          <p className="text-gray-700 leading-relaxed mb-6">
            Diabetes adalah penyakit kronis yang terjadi ketika tubuh tidak bisa
            mengelola gula darah (glukosa) dengan baik. Ini disebabkan oleh
            masalah dalam produksi atau penggunaan insulin, hormon yang
            dihasilkan oleh pankreas dan berfungsi mengatur kadar glukosa dalam
            darah. Tanpa kontrol yang baik, kadar glukosa dalam darah bisa naik
            terlalu tinggi, yang dapat menyebabkan berbagai komplikasi kesehatan
            serius.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Jenis-jenis Diabetes
          </h2>
          <ul className="list-decimal list-inside text-gray-700 space-y-4">
            <li>
              <strong>Diabetes Tipe 1:</strong>
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>
                  Disebabkan oleh sistem kekebalan tubuh yang keliru menyerang
                  dan menghancurkan sel-sel pankreas yang memproduksi insulin.
                </li>
                <li>
                  Biasanya didiagnosis pada anak-anak atau remaja, meskipun bisa
                  juga muncul di usia dewasa.
                </li>
                <li>
                  Pengidap diabetes tipe 1 membutuhkan suntikan insulin setiap
                  hari untuk mengendalikan gula darah.
                </li>
              </ul>
            </li>
            <li>
              <strong>Diabetes Tipe 2:</strong>
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>
                  Merupakan jenis diabetes yang paling umum dan sering kali
                  terkait dengan gaya hidup, seperti pola makan yang buruk,
                  kurang aktivitas fisik, dan obesitas.
                </li>
                <li>
                  Pada diabetes tipe 2, tubuh masih memproduksi insulin tetapi
                  tidak menggunakannya secara efektif (resistensi insulin).
                </li>
                <li>
                  Bisa dikendalikan dengan perubahan gaya hidup, obat oral, atau
                  insulin jika diperlukan.
                </li>
              </ul>
            </li>
            <li>
              <strong>Diabetes Gestasional:</strong>
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>
                  Terjadi pada sebagian wanita selama kehamilan dan biasanya
                  hilang setelah melahirkan.
                </li>
                <li>
                  Wanita yang pernah mengalami diabetes gestasional memiliki
                  risiko lebih tinggi terkena diabetes tipe 2 di kemudian hari.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
