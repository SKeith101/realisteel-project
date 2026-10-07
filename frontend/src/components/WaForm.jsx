import React, { useState } from 'react';
import WhatsappIcon from './WhatsAppIcon';

export default function WaForm() {
    const [formData, setFormData] = useState({
        nama: '',
        whatsapp: '',
        lokasi: '',
        kebutuhan: [],
        ukuran: '',
        target: '',
        budget: '',
        catatan: ''
    });

    // State untuk Kode Negara dan Error validasi WhatsApp
    const [countryCode, setCountryCode] = useState('+62');
    const [waError, setWaError] = useState(false);

    const daftarKebutuhan = [
        'Kanopi',
        'Pagar',
        'Tralis',
        'Railing',
        'Tangga Besi',
        'Konstruksi Baja/Besi',
        'Furniture Custom',
        'Reklame / Advertising'
    ];

    const daftarTarget = [
        'Secepatnya',
        '1 - 2 minggu lagi',
        'Dalam 1 bulan',
        'Masih tahap konsultasi/perencanaan'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle input WhatsApp & validasi angka
    const handleWaChange = (e) => {
        const value = e.target.value;

        // Hanya memperbolehkan angka
        if (value !== '' && !/^\d+$/.test(value)) {
            setWaError(true);
        } else {
            setWaError(false);
        }

        setFormData((prev) => ({
            ...prev,
            whatsapp: value
        }));
    };

    // Handle checkbox kebutuhan proyek
    const handleCheckbox = (e) => {
        const value = e.target.value;

        setFormData((prev) => {
            const isChecked = prev.kebutuhan.includes(value);

            if (isChecked) {
                return {
                    ...prev,
                    kebutuhan: prev.kebutuhan.filter(
                        (item) => item !== value
                    )
                };
            }

            return {
                ...prev,
                kebutuhan: [...prev.kebutuhan, value]
            };
        });
    };

    // Auto resize textarea catatan
    const handleCatatanChange = (e) => {
        handleChange(e);

        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Cegah submit jika nomor WhatsApp tidak valid
        if (waError) return;

        // Trigger Meta Pixel Event "Lead"
        if (window.fbq) {
            window.fbq('track', 'Lead');
        }

        const adminWA = '6281933724791';

        // Mengambil waktu saat form disubmit
        const now = new Date();

        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');

        // Contoh: RS-20260930-1642
        const tanggapanId = `RS-${year}${month}${day}-${hours}${minutes}`;

        // Gabungkan kode negara dengan nomor user
        const fullWhatsappNumber = `${countryCode}${formData.whatsapp}`;

        const message = `*Untitled*
*Tanggapan* #${tanggapanId}

*FORM KONSULTASI GRATIS REALISTEEL*

*Nama :* ${formData.nama}
*Nomor Whatsapp :* ${fullWhatsappNumber}
*Lokasi Proyek :* ${formData.lokasi}
*KEBUTUHAN PROYEK :* ${formData.kebutuhan.length > 0
                ? formData.kebutuhan.join(', ')
                : '-'
            }
*Ukuran perkiraan :* ${formData.ukuran}
*Target pengerjaan :* ${formData.target}
*Estimasi budget (opsional) :* ${formData.budget || '-'}
*CATATAN TAMBAHAN :* ${formData.catatan || '-'}`;

        const encodedMessage = encodeURIComponent(message);

        const waLink = `https://wa.me/${adminWA}?text=${encodedMessage}`;

        window.open(waLink, '_blank');
    };

    return (
        <div className="max-w-3xl mx-auto p-5 sm:p-8 bg-white shadow-xl rounded-xl border border-gray-100">

            {/* Header */}
            <div className="mb-6 sm:mb-8 border-b pb-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-800 mb-2">
                    FORM KONSULTASI GRATIS REALISTEEL
                </h2>

                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                    Terima kasih telah menghubungi REALISTEEL. Silakan lengkapi
                    data berikut agar tim kami dapat memberikan rekomendasi yang tepat.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

                {/* Nama & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

                    {/* Nama */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Nama Lengkap
                        </label>

                        <input
                            required
                            type="text"
                            name="nama"
                            value={formData.nama}
                            onChange={handleChange}
                            placeholder="Contoh: Dani Wijaya"
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-sm"
                        />
                    </div>

                    {/* WhatsApp */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Nomor Whatsapp
                        </label>

                        <div
                            className={`flex items-center w-full border ${waError
                                    ? 'border-red-500 ring-1 ring-red-500'
                                    : 'border-gray-300'
                                } rounded-lg bg-white overflow-hidden focus-within:ring-2 focus-within:ring-red-500 focus-within:border-red-500 transition-all`}
                        >
                            {/* Dropdown Negara */}
                            <select
                                value={countryCode}
                                onChange={(e) =>
                                    setCountryCode(e.target.value)
                                }
                                className="bg-gray-50 border-r border-gray-300 text-sm pl-3 pr-1 py-3 focus:outline-none cursor-pointer text-gray-800 font-medium h-full outline-none"
                            >
                                <option value="+62">🇮🇩 +62</option>
                                <option value="+60">🇲🇾 +60</option>
                                <option value="+65">🇸🇬 +65</option>
                            </select>

                            {/* Input nomor */}
                            <input
                                required
                                type="tel"
                                name="whatsapp"
                                value={formData.whatsapp}
                                onChange={handleWaChange}
                                placeholder="81460158336"
                                className="w-full p-3 pl-3 focus:outline-none text-sm bg-transparent"
                            />
                        </div>

                        {/* Pesan error */}
                        {waError ? (
                            <p className="mt-1.5 text-sm font-medium text-red-500 animate-pulse">
                                Mohon masukan no wa dengan benar
                            </p>
                        ) : (
                            <p className="mt-1.5 text-sm text-gray-500">
                                Misal : 87723xxxxxx (tanpa 0 di depan)
                            </p>
                        )}
                    </div>
                </div>

                {/* Lokasi */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Lokasi Proyek
                    </label>

                    <input
                        required
                        type="text"
                        name="lokasi"
                        value={formData.lokasi}
                        onChange={handleChange}
                        placeholder="Kota/Daerah proyek..."
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-sm"
                    />
                </div>

                {/* Kebutuhan Proyek */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <label className="block text-sm font-bold text-gray-800 mb-3 uppercase tracking-wider">
                        Kebutuhan Proyek
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {daftarKebutuhan.map((item) => (
                            <label
                                key={item}
                                className="flex items-center space-x-3 text-sm text-gray-700 cursor-pointer p-1 hover:bg-gray-100 rounded transition-colors"
                            >
                                <input
                                    type="checkbox"
                                    value={item}
                                    checked={formData.kebutuhan.includes(item)}
                                    onChange={handleCheckbox}
                                    className="w-4 h-4 text-red-600 bg-white border-gray-300 rounded focus:ring-red-500 focus:ring-2"
                                />

                                <span className="font-medium">
                                    {item}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Ukuran */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Ukuran perkiraan
                    </label>

                    <input
                        required
                        type="text"
                        name="ukuran"
                        value={formData.ukuran}
                        onChange={handleChange}
                        placeholder="Misal: Panjang 10m, lebar 8m, tinggi 12m"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-sm"
                    />
                </div>

                {/* Target */}
                <div>
                    <label className="block text-sm font-bold text-gray-800 mb-3 uppercase tracking-wider">
                        Target Pengerjaan
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                        {daftarTarget.map((item) => (
                            <label
                                key={item}
                                className="flex items-center space-x-3 cursor-pointer p-1 hover:bg-gray-100 rounded transition-colors"
                            >
                                <input
                                    required
                                    type="radio"
                                    name="target"
                                    value={item}
                                    checked={formData.target === item}
                                    onChange={handleChange}
                                    className="w-4 h-4 text-red-600 bg-white border-gray-300 focus:ring-red-500 focus:ring-2"
                                />

                                <span className="text-sm font-medium text-gray-700">
                                    {item}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Budget */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Estimasi budget{' '}
                        <span className="text-gray-400 font-normal">
                            (opsional)
                        </span>
                    </label>

                    <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder="Rp."
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-sm"
                    />
                </div>

                {/* Catatan Tambahan */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Catatan Tambahan
                    </label>

                    <textarea
                        name="catatan"
                        value={formData.catatan}
                        onChange={handleCatatanChange}
                        rows="2"
                        placeholder="Ceritakan kebutuhan atau kondisi khusus proyek Anda..."
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-sm resize-none overflow-hidden"
                    />
                </div>

                {/* Pesan + Flyer + Button */}
                <div className="pt-4">

                    {/* Tulisan di atas flyer */}
                    <div className="text-center mb-5 px-2">
                        <p className="text-base sm:text-lg md:text-xl font-extrabold text-gray-800 leading-relaxed">
                            Karena membangun bukan sekadar jadi.
                            <br className="hidden sm:block" />
                            Bangun untuk kuat, rapi, dan tahan lama.
                        </p>
                    </div>

                    {/* Flyer */}
                    <div className="w-full flex justify-center mb-6">
                        <img
                            src="/background/flyer-realisteel.webp"
                            alt="Flyer Realisteel"
                            className="w-full max-w-xl h-auto rounded-xl shadow-md border border-gray-200 object-contain"
                        />
                    </div>

                    {/* Button Submit */}
                    <div className="flex justify-center sm:justify-start">
                        <button
                            type="submit"
                            disabled={waError}
                            className={`w-full sm:w-auto text-white font-bold py-3.5 px-8 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all ${waError
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-[#25D366] hover:bg-[#1ebd5a] hover:shadow-xl hover:-translate-y-0.5'
                                }`}
                        >
                            {/* Logo WhatsApp */}
                            <WhatsappIcon className="w-5 h-5" />

                            {/* Text */}
                            <span>
                                Kirim via WhatsApp
                            </span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}