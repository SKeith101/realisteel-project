export const navItems = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Galeri', href: '#portofolio' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Proses', href: '#proses' },
  { label: 'Kontak', href: '#kontak' },
];

export const trustBadges = [
  { name: 'SNI Certified', sub: 'Material Standar Nasional' },
  { name: 'Pengerjaan Rapi & Presisi', sub: 'Detail sempurna di setiap proses' },
  { name: 'Garansi', sub: 'Garansi pekerjaan dan after sales' },
  { name: 'Respon Cepat', sub: 'Fast respon & Estimasi cepat' },
  { name: 'Free Survey', sub: 'Konsultasi Tanpa Biaya' },
  { name: 'Custom Specialist', sub: 'Spesialis di bidangnya' },
];

// All images optimized: request only ~800px wide WebP, tiny file sizes for smooth scroll
const UP = (id) => `https://images.unsplash.com/${id}?w=800&q=70&fm=webp&auto=format&fit=crop`;
const PX = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop`;
const PX_TALL = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800&h=1100&fit=crop`;

export const services = [
  {
    no: '01',
    title: 'Kanopi Minimalis',
    desc: 'Pelindung area carport dan teras dari hujan serta terik matahari. Dibuat rapi dengan pilihan atap dingin yang bikin suasana rumah tetap adem dan elegan.',
    tags: ['Carport', 'Atap Alderon', 'Polycarbonate'],
    img: 'service/kanopi.avif',
  },
  {
    no: '02',
    title: 'Teralis Keamanan',
    desc: 'Pengaman jendela dan pintu dengan sentuhan estetis. Melindungi rumah dari risiko kejahatan tanpa membuat ruangan terasa terkungkung atau gelap.',
    tags: ['Presisi Laser', 'Minimalis', 'Kustom'],
    img: 'service/tralis.avif',
  },
  {
    no: '03',
    title: 'Pagar & Gerbang',
    desc: 'Wajah utama rumah Anda. Tersedia model dorong, lipat, hingga otomatis dengan sambungan las yang rapi dan cat tahan cuaca jangka panjang.',
    tags: ['Sliding', 'Pagar Minimalis', 'Las Rapi'],
    img: 'service/pagar.avif',
  },
  {
    no: '04',
    title: 'Railing Tangga',
    desc: 'Pegangan tangga yang kokoh untuk keamanan keluarga. Menggunakan material berkualitas tinggi dengan finishing yang halus dan presisi.',
    tags: ['Stainless Steel', 'Kaca Tempered'],
    img: 'service/railing.avif',
  },
  {
    no: '05',
    title: 'Mezanin Custom',
    desc: 'Solusi cerdas menambah luas ruangan tanpa perlu membongkar bangunan. Struktur besi ekstra kuat yang efisien untuk area rumah maupun tempat usaha.',
    tags: ['Hemat Ruang', 'Kuat & Aman', 'Kustom'],
    img: 'service/mejanin.avif',
  },
];

export const portfolio = [
  { title: 'Kanopi Alderon', cat: 'Kanopi', img: PX_TALL('33652618'), span: 'row-span-2' },
  { title: 'Gerbang Minimalis', cat: 'Pagar & Gerbang', img: UP('photo-1753596726704-5c4bd0357742'), span: '' },
  { title: 'Railing Stainless', cat: 'Railing', img: UP('photo-1635348180022-2f7715fdecfa'), span: '' },
  { title: 'Teralis Jendela Modern', cat: 'Teralis', img: UP('photo-1509644851169-2acc08aa25b5'), span: 'col-span-2' },
  { title: 'Pagar Klasik', cat: 'Pagar', img: UP('photo-1700308232117-5cfe8282e8ae'), span: '' },
  { title: 'Mezanin Custom', cat: 'Mezanin', img: 'service/mejanin.avif', span: '' },
  { title: 'Kanopi Baja Ringan', cat: 'Kanopi', img: PX('12192753'), span: '' },
  { title: 'Tangga Industrial', cat: 'Railing', img: PX_TALL('38073198'), span: 'row-span-2' },
];

export const whyBlocks = [
  {
    label: 'PRESISI.',
    body: 'Desain kustom dengan pengukuran akurat dan pengelasan rapi. Kami memperhatikan detail finishing untuk menjamin kekuatan dan estetika struktur jangka panjang.',
  },
  {
    label: 'TRANSPARAN.',
    body: 'Harga rasional tanpa biaya siluman. Spesifikasi material dijelaskan secara detail sejak awal, sehingga Anda tahu persis apa yang Anda bayar.',
  },
  {
    label: 'TERBUKA.',
    body: 'Ditangani tim profesional dengan proses yang mudah dipantau. Kami memberikan update progres berkala agar Anda tetap tenang dan yakin.',
  },
  {
    label: 'KOMITMEN.',
    body: 'Bagi kami, pekerjaan bukan sekadar selesai. Kami hadir memberikan garansi dan layanan after-sales untuk menjaga kepercayaan Anda hingga akhir.',
  },
];

export const process = [
  { step: '01', title: 'Chat WhatsApp', desc: 'Ceritakan kebutuhan Anda lewat WhatsApp. Tim kami merespons dalam hitungan menit.', icon: 'MessageCircle' },
  { step: '02', title: 'Survey Lokasi', desc: 'Tim survey datang ke lokasi untuk pengukuran & konsultasi di lokasi.', icon: 'MapPin' },
  { step: '03', title: 'Desain', desc: 'Kami buatkan desain kustom anda. Anda tahu persis apa yang Anda bayar.', icon: 'PenTool' },
  { step: '04', title: 'Produksi', desc: 'Fabrikasi di workshop kami. Foto progres dikirim berkala via WhatsApp.', icon: 'Hammer' },
  { step: '05', title: 'Instalasi', desc: 'Pemasangan di lokasi oleh tim berpengalaman. Rapi, cepat, tanpa merusak area sekitar.', icon: 'Wrench' },
  { step: '06', title: 'Finishing & quality check', desc: 'Pengecekan detail untuk hasil yang sempurna', icon: 'ShieldCheck' },
];

export const testimonials = [
  {
    name: 'Besi Hollow',
    role: 'Kuat & Kokoh',
    body: 'Besi hollow dengan struktur yang kuat, ringan, dan stabil untuk rangka kanopi, pagar, pergola, serta kebutuhan industri modern.',
    img: '/material/hollow.png',
  },
  {
    name: 'Besi Plat Tebal',
    role: 'Presisi & Sanggup Beban',
    body: 'Besi plat tebal cocok untuk komponen utama dengan beban besar, tampilan rapi, dan presisi sambungan yang lebih terjamin.',
    img: '/material/besi.jpg',
  },
  {
    name: 'Stainless Steel',
    role: 'Anti Karat',
    body: 'Material stainless steel tahan korosi, tampil elegan, dan ideal untuk railing, tangga, serta area dengan kelembapan tinggi.',
    img: '/material/stainless.webp',
  },
  {
    name: 'Atap Alderon',
    role: 'Tahan Panas & Suara',
    body: 'Atap alderon memberikan perlindungan optimal dari panas matahari serta reduksi suara, sehingga ruang terasa lebih nyaman.',
    img: '/material/alderon.png',
  },
  {
    name: 'Atap Polycarbonate',
    role: 'Ringan & Tahan Benturan',
    body: 'Polycarbonate ringan, kuat, dan tahan benturan, cocok untuk kanopi rumah dan area komersial yang butuh pencahayaan alami.',
    img: '/material/atap.avif',
  },
];

export const partners = [
  'REALISTEEL', 'REALISTEEL', 'REALISTEEL', 'REALISTEEL', 'REALISTEEL', 'REALISTEEL', 'REALISTEEL', 'REALISTEEL',
];

export const WA_NUMBER = "6281933724791";
export const WA_MESSAGE = encodeURIComponent(
  "Halo Realisteel, saya ingin konsultasi mengenai pembuatan [Kanopi / Pagar / Tralis / Railing] untuk lokasi saya. Boleh bantu estimasi biaya dan jadwal survei?"
);

export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;