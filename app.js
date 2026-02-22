// ===== RIYALDIRECT APP.JS â€” PayungMadinah-Inspired Edition =====

let currentWAMessageContext = "general";

// ===== WA MODAL =====
function openWAModal(context = "general") {
  currentWAMessageContext = context;
  const modal = document.getElementById("wa-modal");
  if (!modal) return;
  modal.classList.add("active");
  const lang = document.documentElement.lang || "id";
  updateWALinks(lang);
}
function toggleWAModal() {
  const modal = document.getElementById("wa-modal");
  if (!modal) return;
  modal.classList.toggle("active");
  if (modal.classList.contains("active")) {
    currentWAMessageContext = "general";
    updateWALinks(document.documentElement.lang || "id");
  }
}
function closeWAModalOnBackdrop(event) {
  if (event.target === event.currentTarget) toggleWAModal();
}

// ===== MOBILE MENU =====
function closeMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  if (menu) menu.classList.remove("active");
}

// ===== FAQ =====
function toggleFaq(button) {
  const answer = button.nextElementSibling;
  const icon = button.querySelector(".faq-icon-el");
  const item = button.closest(".faq-item");
  document.querySelectorAll(".faq-answer").forEach((el) => {
    if (el !== answer) {
      el.style.maxHeight = "0px";
      el.closest(".faq-item")?.classList.remove("is-open");
      const ic = el.previousElementSibling?.querySelector(".faq-icon-el");
      if (ic) ic.style.transform = "rotate(0)";
    }
  });
  if (answer.style.maxHeight && answer.style.maxHeight !== "0px") {
    answer.style.maxHeight = "0px";
    item?.classList.remove("is-open");
    if (icon) icon.style.transform = "rotate(0)";
  } else {
    answer.style.maxHeight = answer.scrollHeight + "px";
    item?.classList.add("is-open");
    if (icon) icon.style.transform = "rotate(180deg)";
  }
}

// ===== TRANSLATIONS =====
const translations = {
  id: {
    text: {
      "nav-contact-text": "Hubungi Kami",
      "brand-tagline": "Transfer Riyal Terpercaya",
      "nav-link-home": "Beranda",
      "nav-link-features": "Layanan",
      "nav-link-steps": "Alur",
      "nav-link-testimonials": "Testimoni",
      "nav-link-faq": "FAQ",
      "hero-badge-text": "TEROBOSAN PERTAMA DI INDONESIA",
      "hero-title-line-1": "Transfer Riyal untuk Muasasah & Hotel di Saudi,",
      "hero-title-line-2": "Aman, Cepat, dan Praktis",
      "hero-subtitle":
        "Layanan transfer Riyal untuk kebutuhan Muasasah dan hotel di Saudi dengan proses cepat, transparan, dan aman.",
      "hero-trust-safe": "Transaksi Aman",
      "hero-trust-open": "Buka Setiap Hari",
      "hero-cta-text": "Mulai Transaksi",
      "hero-security-badge": "100% Amanah",
      "calc-desktop-title": "Simulasi Kurs",
      "calc-desktop-live": "LIVE",
      "calc-label-sar": "Jumlah Riyal (SAR)",
      "calc-label-idr": "Estimasi Rupiah (IDR)",
      "calc-rate-note": "Rate indikatif. Hubungi CS untuk final rate.",
      "calc-live-data": "Kurs Google +10",
      "quote-text":
        "\u201cPara jamaah haji dan umrah adalah utusan Allah. Allah memanggil mereka lalu mereka memenuhi panggilan-Nya. Mereka meminta kepada-Nya lalu Allah memberi mereka.\u201d",
      "quote-source": "HR. Ibnu Majah no. 2892 \u2014 Shahih (Al-Albani)",
      "trust-exp-label": "Tahun Pengalaman",
      "trust-partner-label": "Mitra Puas",
      "trust-disbursed-label": "Tersalurkan",
      "trust-disbursed-unit": "Juta",
      "feature-badge-label": "Nilai Lebih Kami",
      "feature-subtitle":
        "Kami menghadirkan standar pelayanan premium untuk kelancaran transaksi di Tanah Suci.",
      "feature-title-1": "Tanpa Uang Tunai",
      "feature-title-2": "Efisiensi Waktu",
      "feature-title-3": "Amanah & Terjamin",
      "feature-desc-1":
        "Minimalisir risiko kehilangan uang tunai dengan transfer langsung ke rekening Muasasah atau hotel.",
      "feature-desc-2":
        "Fokus pada ibadah dan bisnis Anda. Tanpa antre, tanpa birokrasi rumit.",
      "feature-desc-3":
        "Reputasi 3+ tahun menjaga amanah klien. Bukti transfer resmi real-time via WhatsApp.",
      "feature-tag-1": "Lebih Aman",
      "feature-tag-2": "Lebih Cepat",
      "feature-tag-3": "Terpercaya",
      "steps-badge": "Alur Transaksi",
      "step-title-1": "Konsultasi",
      "step-title-2": "Pembayaran",
      "step-title-3": "Tuntas",
      "step-desc-1":
        "Hubungi tim kami via WhatsApp. Sampaikan kebutuhan nominal riyal dan tujuan transfer.",
      "step-desc-2":
        "Lakukan transfer Rupiah ke rekening resmi kami dengan kurs kompetitif dan transparan.",
      "step-desc-3":
        "Riyal dikirim ke penerima. Bukti transfer valid langsung kami kirimkan sebagai konfirmasi.",
      "testimonial-badge": "Ulasan Mitra",
      "proof-badge": "Bukti Transaksi Terverifikasi",
      "proof-heading": "Dokumentasi Transfer Klien",
      "proof-subtitle":
        "Testimoni klien dengan bukti transfer terverifikasi. Data sensitif disamarkan untuk menjaga privasi.",
      "proof-note": "Geser untuk melihat bukti transfer lainnya.",
      "proof-prev-aria": "Geser ke kiri",
      "proof-next-aria": "Geser ke kanan",
      "proof-img-alt-1": "Bukti transfer klien 1",
      "proof-img-alt-2": "Bukti transfer klien 2",
      "proof-img-alt-3": "Bukti transfer klien 3",
      "proof-img-alt-4": "Bukti transfer klien 4",
      "proof-img-alt-5": "Bukti transfer klien 5",
      "proof-img-alt-6": "Bukti transfer klien 6",
      "proof-chip-1": "Hotel",
      "proof-chip-2": "Muasasah",
      "proof-chip-3": "Riyal Cash",
      "proof-chip-4": "Hotel",
      "proof-chip-5": "Muasasah",
      "proof-chip-6": "Hotel",
      "proof-copy-1":
        '"Transfer hotel Makkah masuk cepat. Dari kirim bukti rupiah sampai konfirmasi hanya sekitar 10 menit."',
      "proof-copy-2":
        '"Aman dan transparan. Bukti transfer resmi langsung dikirim ke WhatsApp tanpa diminta."',
      "proof-copy-3":
        '"Pecahan kecil sesuai request. Proses cepat dan admin responsif, cocok buat kebutuhan jamaah."',
      "proof-copy-4":
        '"Cocok untuk travel. Multi transaksi rombongan bisa diproses rapi dalam satu hari."',
      "proof-copy-5":
        '"Proses konfirmasi jelas dan bukti transfer dikirim lengkap. Sangat membantu untuk kebutuhan rombongan."',
      "proof-copy-6":
        '"Respons admin cepat dan update status transaksi jelas. Cocok untuk pembayaran hotel."',
      "proof-author-1": "Bpk A***, Surabaya",
      "proof-author-2": "Ustadz H***, Jakarta",
      "proof-author-3": "Ibu N***, Bandung",
      "proof-author-4": "Travel M***, Makassar",
      "proof-author-5": "Travel A***, Bekasi",
      "proof-author-6": "Bpk R***, Semarang",
      "testimonial-text-1":
        "\u201cAlhamdulillah, transfer ke Muasasah di Madinah lancar. Saya kirim bukti transfer Rupiah jam 10 pagi, jam 10.15 pihak Muasasah sudah konfirmasi dana masuk.\u201d",
      "testimonial-text-2":
        "\u201cUntuk rekan-rekan travel, ini solusi handling yang praktis. Pembayaran hotel di Makkah dan Madinah langsung beres. Kursnya juga bersaing.\u201d",
      "testimonial-text-3":
        "\u201cKami pakai RiyalDirect untuk bayar visa dan Muasasah 3 rombongan sekaligus. Prosesnya rapi, ada bukti transfer resmi.\u201d",
      "testimonial-role-1": "Pengusaha, Jakarta",
      "testimonial-role-2": "Owner Travel Umrah, Surabaya",
      "testimonial-role-3": "Pengelola Travel, Bandung",
      "faq-badge": "Pusat Bantuan",
      "faq-q-1": "Apakah transaksi ini aman?",
      "faq-a-1":
        "Sangat aman. Kami didukung infrastruktur perbankan resmi dan kemitraan strategis dengan warga lokal Saudi dengan kapasitas limit hingga 5 Juta SAR per hari. Dengan rekam jejak 3+ tahun, setiap transaksi dijamin transparan melalui pengiriman resi bank resmi secara real-time ke WhatsApp Anda.",
      "faq-q-2": "Berapa lama uang sampai ke tujuan?",
      "faq-a-2":
        "Setiap transaksi diproses secara sistematis sesuai urutan antrean yang masuk. Dana Anda akan segera diteruskan ke rekening Muasasah atau Hotel tujuan setelah proses verifikasi selesai, guna memastikan keamanan dan ketepatan data di setiap pengiriman.",
      "faq-q-3": "Apa langkah awal untuk transaksi?",
      "faq-a-3":
        'Cukup klik tombol WhatsApp di pojok kanan bawah atau tombol "Mulai Transaksi". Tim support kami akan langsung memandu Anda untuk pengecekan kurs dan nomor rekening tujuan.',
      "faq-q-4": "Pecahan riyal cash apa saja yang tersedia?",
      "faq-a-4":
        "Kami menyediakan pecahan 1, 5, 10, 50, 100, dan 500 SAR yang bisa diambil di Saudi Arabia (Makkah, Madinah, Jeddah).",
      "faq-q-5": "Bagaimana cara memulai transaksi?",
      "faq-a-5":
        "Hubungi salah satu admin kami via WhatsApp. Sampaikan kebutuhan Anda \u2014 nominal, tujuan transfer, dan jadwal keberangkatan.",
      "cash-desc-a":
        "Tersedia berbagai pecahan untuk kebutuhan uang saku jamaah selama di Tanah Suci.",
      "cash-desc-b":
        "Riyal tunai bisa diambil langsung oleh tim kami di Saudi Arabia. Tersedia di kota-kota utama.",
      "cash-button-text": "Pesan Riyal Cash",
      "cta-subtitle":
        "Hubungi tim kami untuk konsultasi kurs dan kebutuhan pembayaran di Tanah Suci.",
      "cta-button-text": "Konsultasi via WhatsApp",
      "footer-description":
        "Mitra tepercaya untuk pembayaran Muasasah, hotel, dan kebutuhan operasional Haji & Umrah.",
      "footer-service-title": "Layanan Utama",
      "footer-service-1": "Transfer Muasasah",
      "footer-service-2": "Pembayaran Hotel",
      "footer-service-3": "Handling Kargo",
      "footer-service-4": "Kurs Riyal Terkini",
      "footer-contact-title": "Kontak Kami",
      "footer-location-text": "Jakarta, Indonesia",
      "footer-copyright": "\u00a9 2026 RiyalDirect. Dilindungi Undang-Undang.",
      "footer-terms": "Syarat & Ketentuan",
      "footer-privacy": "Kebijakan Privasi",
      "wa-modal-badge": "WhatsApp Support",
      "wa-modal-title": "Pilih Admin Layanan",
      "wa-modal-subtitle-1": "Pilih salah satu admin kami di bawah.",
      "wa-modal-subtitle-2": "Respons cepat, pilih admin yang tersedia.",
      "mobile-link-features": "Layanan",
      "mobile-link-steps": "Alur Transaksi",
      "mobile-link-testimonials": "Testimoni",
      "mobile-link-cash": "Riyal Cash",
      "mobile-link-faq": "FAQ",
      "mobile-contact-btn": "Hubungi Kami",
      "testimonial-subtitle":
        "Berikut pengalaman nyata dari mitra dan jamaah yang sudah menggunakan layanan kami.",
      "faq-subtitle": "Klik pertanyaan untuk melihat jawaban.",
      "cash-subtitle":
        "Kami menyediakan uang tunai Riyal (SAR) fisik yang bisa diambil langsung di Saudi Arabia.",
      "cash-denom-title": "Pecahan Tersedia",
      "cash-pickup-title": "Pengambilan di Saudi",
      "cash-denom-note":
        "Pecahan kecil cocok untuk belanja di sekitar Masjidil Haram & Masjid Nabawi.",
      "cash-footnote":
        "* Layanan riyal tunai hanya tersedia di Saudi Arabia. Untuk transfer ke rekening Muasasah/Hotel, silakan hubungi CS.",
      "cash-badge": "Riyal Tunai",
      "cash-city-1": "Makkah al-Mukarramah",
      "cash-city-2": "Madinah al-Munawwarah",
      "cash-city-3": "Jeddah (Bandara & Kota)",
      "cta-response-text": "Respons cepat \u2022 24/7 Support",
      "cta-security-note": "Transaksi aman & terlindungi",
      "footer-info-title": "Informasi",
      "footer-email-text": "admin@riyaldirect.com",
    },
    html: {
      "feature-heading":
        'Mengapa Memilih <span class="text-primary">RiyalDirect</span>?',
      "steps-heading":
        'Alur Transfer Riyal & <span class="text-primary">Pembayaran Hotel</span>',
      "testimonial-heading":
        'Dipercaya Travel & Jamaah <span class="text-primary">Seluruh Indonesia</span>',
      "faq-heading": 'Sering <span class="text-primary">Ditanyakan</span>',
      "cta-heading": "Siap Membantu Transaksi Anda",
      "cash-heading":
        'Uang Tunai Riyal <span class="text-primary">di Saudi Arabia</span>',
    },
  },
  en: {
    text: {
      "nav-contact-text": "Contact Us",
      "brand-tagline": "Trusted Riyal Transfer",
      "nav-link-home": "Home",
      "nav-link-features": "Services",
      "nav-link-steps": "Flow",
      "nav-link-testimonials": "Reviews",
      "nav-link-faq": "FAQ",
      "hero-badge-text": "VERIFIED RIYAL TRANSFER SERVICE",
      "hero-title-line-1": "Pay Muasasah & Hotel in Saudi,",
      "hero-title-line-2": "Safe, Fast, and Practical",
      "hero-subtitle":
        "Riyal transfer service for Muasasah and hotel payments in Saudi with a fast, transparent, and secure process.",
      "hero-trust-safe": "Secure Transactions",
      "hero-trust-open": "Open Daily",
      "hero-cta-text": "Start Transaction",
      "hero-security-badge": "100% Trusted",
      "calc-desktop-title": "Rate Simulation",
      "calc-desktop-live": "LIVE",
      "calc-label-sar": "Riyal Amount (SAR)",
      "calc-label-idr": "Estimated Rupiah (IDR)",
      "calc-rate-note": "Indicative rate. Contact CS for final rate.",
      "calc-live-data": "Google Rate +10",
      "quote-text":
        "\u201cThe pilgrims performing Hajj and Umrah are delegates of Allah. He invited them and they responded. They ask of Him and He gives them.\u201d",
      "quote-source": "HR. Ibn Majah no. 2892 \u2014 Sahih (Al-Albani)",
      "trust-exp-label": "Years of Experience",
      "trust-partner-label": "Satisfied Partners",
      "trust-disbursed-label": "Disbursed",
      "trust-disbursed-unit": "Million",
      "feature-badge-label": "Our Value",
      "feature-subtitle":
        "We deliver premium service standards for smooth transactions in the Holy Land.",
      "feature-title-1": "Cashless Transfer",
      "feature-title-2": "Time Efficiency",
      "feature-title-3": "Trustworthy & Secure",
      "feature-desc-1":
        "Minimize cash loss risk with direct transfer to Muasasah or hotel accounts safely.",
      "feature-desc-2":
        "Focus on your worship and business. No queues, no complicated bureaucracy.",
      "feature-desc-3":
        "3+ years of proven trust. Official transfer receipts sent in real time via WhatsApp.",
      "feature-tag-1": "Safer",
      "feature-tag-2": "Faster",
      "feature-tag-3": "Reliable",
      "steps-badge": "Transaction Flow",
      "step-title-1": "Consultation",
      "step-title-2": "Payment",
      "step-title-3": "Completed",
      "step-desc-1":
        "Contact our team via WhatsApp. Share your riyal amount and transfer destination.",
      "step-desc-2":
        "Transfer IDR to our official account with competitive and transparent rates.",
      "step-desc-3":
        "Riyal is sent to the recipient with valid proof of transfer as confirmation.",
      "testimonial-badge": "Partner Reviews",
      "proof-badge": "Verified Testimonials",
      "proof-heading": "Real Transfer Proof, Swipe to View",
      "proof-subtitle":
        "Swipe left-right to see transfer proof and client experiences. Sensitive data is masked for privacy.",
      "proof-note": "Swipe to see more verified transfer proofs.",
      "proof-prev-aria": "Scroll left",
      "proof-next-aria": "Scroll right",
      "proof-img-alt-1": "Client transfer proof 1",
      "proof-img-alt-2": "Client transfer proof 2",
      "proof-img-alt-3": "Client transfer proof 3",
      "proof-img-alt-4": "Client transfer proof 4",
      "proof-img-alt-5": "Client transfer proof 5",
      "proof-img-alt-6": "Client transfer proof 6",
      "proof-chip-1": "Hotel",
      "proof-chip-2": "Muasasah",
      "proof-chip-3": "Cash Riyal",
      "proof-chip-4": "Hotel",
      "proof-chip-5": "Muasasah",
      "proof-chip-6": "Hotel",
      "proof-copy-1":
        '"Hotel transfer to Makkah was fast. From sending IDR proof to confirmation took only around 10 minutes."',
      "proof-copy-2":
        '"Safe and transparent. Official transfer proof was sent to WhatsApp immediately without asking."',
      "proof-copy-3":
        '"Small denominations matched our request. Fast process and responsive admin for pilgrims needs."',
      "proof-copy-4":
        '"Great for travel agents. Multiple group transactions can be handled neatly in one day."',
      "proof-copy-5":
        '"Clear confirmation process and complete transfer proof. Very helpful for group payment needs."',
      "proof-copy-6":
        '"Admin responded quickly and transaction status updates were clear. Suitable for hotel payments."',
      "proof-author-1": "Mr A***, Surabaya",
      "proof-author-2": "Ustadz H***, Jakarta",
      "proof-author-3": "Mrs N***, Bandung",
      "proof-author-4": "Travel M***, Makassar",
      "proof-author-5": "Travel A***, Bekasi",
      "proof-author-6": "Mr R***, Semarang",
      "testimonial-text-1":
        "\u201cAlhamdulillah, transfer to Muasasah in Madinah went smoothly. I sent proof at 10am, by 10:15 Muasasah confirmed receipt.\u201d",
      "testimonial-text-2":
        "\u201cFor fellow travel agents, this is a practical handling solution. Hotel payments in Makkah and Madinah sorted instantly.\u201d",
      "testimonial-text-3":
        "\u201cWe used RiyalDirect to pay visa and Muasasah for 3 groups at once. Process was clean with official proof.\u201d",
      "testimonial-role-1": "Entrepreneur, Jakarta",
      "testimonial-role-2": "Umrah Travel Owner, Surabaya",
      "testimonial-role-3": "Travel Manager, Bandung",
      "faq-badge": "Help Center",
      "faq-q-1": "Is this transaction safe?",
      "faq-a-1":
        "Very safe. We are supported by official banking infrastructure and strategic partnerships with local Saudi partners, with capacity up to 5 million SAR per day. With a 3+ year track record, every transaction is kept transparent through real-time official bank receipts sent to your WhatsApp.",
      "faq-q-2": "How long until funds reach the destination?",
      "faq-a-2":
        "Each transaction is processed systematically based on the incoming queue order. Your funds will be forwarded to the destination Muasasah or Hotel account after verification is completed, to ensure security and data accuracy for every transfer.",
      "faq-q-3": "What is the first step to start a transaction?",
      "faq-a-3":
        'Simply click the WhatsApp button in the bottom-right corner or the "Start Transaction" button. Our support team will guide you through rate checking and the destination account details.',
      "faq-q-4": "What Riyal cash denominations are available?",
      "faq-a-4":
        "We provide 1, 5, 10, 50, 100, and 500 SAR denominations for pickup in Saudi Arabia (Makkah, Madinah, Jeddah).",
      "faq-q-5": "How do I start a transaction?",
      "faq-a-5":
        "Contact any of our admins via WhatsApp. Share your needs \u2014 amount, destination, and departure schedule.",
      "cash-desc-a":
        "Various denominations available for pilgrims\u2019 pocket money in the Holy Land.",
      "cash-desc-b":
        "Cash Riyal can be picked up directly from our team in Saudi Arabia. Available in major cities.",
      "cash-button-text": "Order Cash Riyal",
      "cta-subtitle":
        "Contact our team for rate consultation and payment needs in the Holy Land.",
      "cta-button-text": "Consult via WhatsApp",
      "footer-description":
        "Trusted partner for Muasasah, Hotel, and Hajj & Umrah operations payments.",
      "footer-service-title": "Main Services",
      "footer-service-1": "Muasasah Transfer",
      "footer-service-2": "Hotel Payment",
      "footer-service-3": "Cargo Handling",
      "footer-service-4": "Latest Riyal Rates",
      "footer-contact-title": "Contact Us",
      "footer-location-text": "Jakarta, Indonesia",
      "footer-copyright": "\u00a9 2026 RiyalDirect. All rights reserved.",
      "footer-terms": "Terms & Conditions",
      "footer-privacy": "Privacy Policy",
      "wa-modal-badge": "WhatsApp Support",
      "wa-modal-title": "Choose Service Admin",
      "wa-modal-subtitle-1": "Choose one of our admins below.",
      "wa-modal-subtitle-2": "Fast response, pick any available admin.",
      "mobile-link-features": "Services",
      "mobile-link-steps": "Transaction Flow",
      "mobile-link-testimonials": "Reviews",
      "mobile-link-cash": "Cash Riyal",
      "mobile-link-faq": "FAQ",
      "mobile-contact-btn": "Contact Us",
      "testimonial-subtitle":
        "Real experiences from partners and pilgrims who have used our services.",
      "faq-subtitle": "Tap a question to view the answer.",
      "cash-subtitle":
        "We provide physical Riyal (SAR) cash that can be picked up directly in Saudi Arabia.",
      "cash-denom-title": "Available Denominations",
      "cash-pickup-title": "Pickup in Saudi",
      "cash-denom-note":
        "Small denominations are ideal for shopping around Masjidil Haram & Masjid Nabawi.",
      "cash-footnote":
        "* Cash Riyal service is only available in Saudi Arabia. For Muasasah/Hotel bank transfers, please contact CS.",
      "cash-badge": "Cash Riyal",
      "cash-city-1": "Makkah al-Mukarramah",
      "cash-city-2": "Madinah al-Munawwarah",
      "cash-city-3": "Jeddah (Airport & City)",
      "cta-response-text": "Fast response \u2022 24/7 Support",
      "cta-security-note": "Secure & protected transaction",
      "footer-info-title": "Information",
      "footer-email-text": "admin@riyaldirect.com",
    },
    html: {
      "feature-heading":
        'Why Choose <span class="text-primary">RiyalDirect</span>?',
      "steps-heading":
        'Riyal Transfer & <span class="text-primary">Hotel Payment Flow</span>',
      "testimonial-heading":
        'Trusted by Travel Agents & Pilgrims <span class="text-primary">Nationwide</span>',
      "faq-heading": 'Frequently <span class="text-primary">Asked</span>',
      "cta-heading": "Ready to Help Your Transaction",
      "cash-heading":
        'Cash Riyal <span class="text-primary">in Saudi Arabia</span>',
    },
  },
  ar: {
    text: {
      "nav-contact-text":
        "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627",
      "brand-tagline":
        "\u062a\u062d\u0648\u064a\u0644 \u0631\u064a\u0627\u0644 \u0645\u0648\u062b\u0648\u0642",
      "nav-link-home": "\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",
      "nav-link-features": "\u0627\u0644\u062e\u062f\u0645\u0627\u062a",
      "nav-link-steps": "\u0627\u0644\u062e\u0637\u0648\u0627\u062a",
      "nav-link-testimonials":
        "\u0622\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621",
      "nav-link-faq": "\u0627\u0644\u0623\u0633\u0626\u0644\u0629",
      "hero-badge-text":
        "\u0623\u0648\u0644 \u0627\u0628\u062a\u0643\u0627\u0631 \u0641\u064a \u0625\u0646\u062f\u0648\u0646\u064a\u0633\u064a\u0627",
      "hero-title-line-1":
        "\u0627\u062f\u0641\u0639 \u0631\u0633\u0648\u0645 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0648\u0627\u0644\u0641\u0646\u062f\u0642 \u0641\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629\u060c",
      "hero-title-line-2":
        "\u0628\u0623\u0645\u0627\u0646 \u0648\u0633\u0631\u0639\u0629 \u0648\u0633\u0647\u0648\u0644\u0629",
      "hero-subtitle":
        "\u062d\u0644 \u062d\u062f\u064a\u062b \u0644\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0631\u064a\u0627\u0644 \u062f\u0648\u0646 \u0645\u062e\u0627\u0637\u0631 \u062d\u0645\u0644 \u0627\u0644\u0646\u0642\u062f. \u0645\u0648\u062b\u0648\u0642 \u0645\u0646 500+ \u0634\u0631\u064a\u0643.",
      "hero-trust-safe":
        "\u0645\u0639\u0627\u0645\u0644\u0627\u062a \u0622\u0645\u0646\u0629",
      "hero-trust-open":
        "\u0645\u062a\u0627\u062d \u064a\u0648\u0645\u064a\u0627\u064b",
      "hero-cta-text":
        "\u0627\u0628\u062f\u0623 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629",
      "hero-security-badge": "\u0623\u0645\u0627\u0646 100%",
      "calc-desktop-title":
        "\u0645\u062d\u0627\u0643\u0627\u0629 \u0627\u0644\u0633\u0639\u0631",
      "calc-desktop-live": "\u0645\u0628\u0627\u0634\u0631",
      "calc-label-sar":
        "\u0645\u0628\u0644\u063a \u0627\u0644\u0631\u064a\u0627\u0644 (SAR)",
      "calc-label-idr":
        "\u062a\u0642\u062f\u064a\u0631 \u0627\u0644\u0631\u0648\u0628\u064a\u0629 (IDR)",
      "calc-rate-note":
        "\u0633\u0639\u0631 \u0625\u0631\u0634\u0627\u062f\u064a. \u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u062e\u062f\u0645\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0644\u0644\u0633\u0639\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064a.",
      "calc-live-data": "\u0633\u0639\u0631 Google +10",
      "quote-text":
        "\u201c\u0627\u0644\u062d\u064f\u062c\u0651\u064e\u0627\u062c\u064f \u0648\u064e\u0627\u0644\u0639\u064f\u0645\u0651\u064e\u0627\u0631\u064f \u0648\u064e\u0641\u0652\u062f\u064f \u0627\u0644\u0644\u0647\u0650\u060c \u062f\u064e\u0639\u064e\u0627\u0647\u064f\u0645\u0652 \u0641\u064e\u0623\u064e\u062c\u064e\u0627\u0628\u064f\u0648\u0647\u064f\u060c \u0648\u064e\u0633\u064e\u0623\u064e\u0644\u064f\u0648\u0647\u064f \u0641\u064e\u0623\u064e\u0639\u0652\u0637\u064e\u0627\u0647\u064f\u0645\u0652\u201d",
      "quote-source":
        "\u0631\u0648\u0627\u0647 \u0627\u0628\u0646 \u0645\u0627\u062c\u0647 \u0631\u0642\u0645 2892 \u2014 \u0635\u062d\u064a\u062d (\u0627\u0644\u0623\u0644\u0628\u0627\u0646\u064a)",
      "trust-exp-label":
        "\u0633\u0646\u0648\u0627\u062a \u0627\u0644\u062e\u0628\u0631\u0629",
      "trust-partner-label":
        "\u0634\u0631\u0643\u0627\u0621 \u0631\u0627\u0636\u0648\u0646",
      "trust-disbursed-label":
        "\u062a\u0645 \u062a\u062d\u0648\u064a\u0644\u0647",
      "trust-disbursed-unit": "\u0645\u0644\u064a\u0648\u0646",
      "feature-badge-label": "\u0642\u064a\u0645\u062a\u0646\u0627",
      "feature-subtitle":
        "\u0646\u0642\u062f\u0645 \u0645\u0639\u0627\u064a\u064a\u0631 \u062e\u062f\u0645\u0629 \u0645\u062a\u0645\u064a\u0632\u0629 \u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062a \u0633\u0644\u0633\u0629 \u0641\u064a \u0627\u0644\u0623\u0631\u0636 \u0627\u0644\u0645\u0642\u062f\u0633\u0629.",
      "feature-title-1": "\u0628\u062f\u0648\u0646 \u0646\u0642\u062f",
      "feature-title-2":
        "\u0643\u0641\u0627\u0621\u0629 \u0627\u0644\u0648\u0642\u062a",
      "feature-title-3":
        "\u0623\u0645\u0627\u0646\u0629 \u0648\u0636\u0645\u0627\u0646",
      "feature-desc-1":
        "\u062a\u0642\u0644\u064a\u0644 \u0645\u062e\u0627\u0637\u0631 \u0641\u0642\u062f\u0627\u0646 \u0627\u0644\u0646\u0642\u062f \u0628\u0627\u0644\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0645\u0628\u0627\u0634\u0631 \u0625\u0644\u0649 \u062d\u0633\u0627\u0628 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0623\u0648 \u0627\u0644\u0641\u0646\u062f\u0642.",
      "feature-desc-2":
        "\u0631\u0643\u0632 \u0639\u0644\u0649 \u0639\u0628\u0627\u062f\u062a\u0643 \u0648\u0639\u0645\u0644\u0643. \u0628\u062f\u0648\u0646 \u0637\u0648\u0627\u0628\u064a\u0631 \u0648\u0628\u062f\u0648\u0646 \u0628\u064a\u0631\u0648\u0642\u0631\u0627\u0637\u064a\u0629.",
      "feature-desc-3":
        "\u0633\u0645\u0639\u0629 3+ \u0633\u0646\u0648\u0627\u062a \u0645\u0646 \u0627\u0644\u0623\u0645\u0627\u0646\u0629. \u0625\u064a\u0635\u0627\u0644\u0627\u062a \u0631\u0633\u0645\u064a\u0629 \u0641\u0648\u0631\u064a\u0629 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628.",
      "feature-tag-1":
        "\u0623\u0643\u062b\u0631 \u0623\u0645\u0627\u0646\u0627\u064b",
      "feature-tag-2": "\u0623\u0633\u0631\u0639",
      "feature-tag-3": "\u0645\u0648\u062b\u0648\u0642",
      "steps-badge":
        "\u062e\u0637\u0648\u0627\u062a \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629",
      "step-title-1": "\u0627\u0633\u062a\u0634\u0627\u0631\u0629",
      "step-title-2": "\u0627\u0644\u062f\u0641\u0639",
      "step-title-3": "\u0645\u0643\u062a\u0645\u0644",
      "step-desc-1":
        "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0641\u0631\u064a\u0642\u0646\u0627 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628. \u0623\u062e\u0628\u0631\u0646\u0627 \u0628\u0627\u0644\u0645\u0628\u0644\u063a \u0648\u0648\u062c\u0647\u0629 \u0627\u0644\u062a\u062d\u0648\u064a\u0644.",
      "step-desc-2":
        "\u062d\u0648\u0651\u0644 \u0627\u0644\u0631\u0648\u0628\u064a\u0629 \u0625\u0644\u0649 \u062d\u0633\u0627\u0628\u0646\u0627 \u0627\u0644\u0631\u0633\u0645\u064a \u0628\u0623\u0633\u0639\u0627\u0631 \u0645\u0646\u0627\u0641\u0633\u0629 \u0648\u0634\u0641\u0627\u0641\u0629.",
      "step-desc-3":
        "\u064a\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u064a\u0627\u0644 \u0644\u0644\u0645\u0633\u062a\u0641\u064a\u062f \u0645\u0639 \u0625\u062b\u0628\u0627\u062a \u062a\u062d\u0648\u064a\u0644 \u0631\u0633\u0645\u064a.",
      "testimonial-badge":
        "\u0622\u0631\u0627\u0621 \u0627\u0644\u0634\u0631\u0643\u0627\u0621",
      "proof-badge":
        "\u062a\u0648\u062b\u064a\u0642 \u0627\u0644\u0639\u0645\u0644\u0627\u0621",
      "proof-heading":
        "\u0625\u062b\u0628\u0627\u062a \u062d\u0648\u0627\u0644\u0629 \u062d\u0642\u064a\u0642\u064a\u060c \u0627\u0633\u062d\u0628 \u0644\u0644\u0645\u0634\u0627\u0647\u062f\u0629",
      "proof-subtitle":
        "\u0627\u0633\u062d\u0628 \u064a\u0645\u064a\u0646\u0627\u064b \u0648\u064a\u0633\u0627\u0631\u0627\u064b \u0644\u0645\u0634\u0627\u0647\u062f\u0629 \u0625\u062b\u0628\u0627\u062a\u0627\u062a \u0627\u0644\u062d\u0648\u0627\u0644\u0629 \u0648\u062a\u062c\u0627\u0631\u0628 \u0627\u0644\u0639\u0645\u0644\u0627\u0621. \u062a\u0645 \u0625\u062e\u0641\u0627\u0621 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062d\u0633\u0627\u0633\u0629 \u0644\u062e\u0635\u0648\u0635\u064a\u0629.",
      "proof-note":
        "\u062a\u0644\u0645\u064a\u062d: \u0627\u0633\u062d\u0628 \u0639\u0644\u0649 \u0627\u0644\u062c\u0648\u0627\u0644 \u0623\u0648 \u0627\u0633\u062a\u062e\u062f\u0645 \u0623\u0632\u0631\u0627\u0631 \u0627\u0644\u0623\u0633\u0647\u0645 \u0639\u0644\u0649 \u0633\u0637\u062d \u0627\u0644\u0645\u0643\u062a\u0628.",
      "proof-prev-aria":
        "\u062a\u0645\u0631\u064a\u0631 \u0644\u0644\u064a\u0633\u0627\u0631",
      "proof-next-aria":
        "\u062a\u0645\u0631\u064a\u0631 \u0644\u0644\u064a\u0645\u064a\u0646",
      "proof-img-alt-1":
        "\u0625\u062b\u0628\u0627\u062a \u062a\u062d\u0648\u064a\u0644 \u0639\u0645\u064a\u0644 1",
      "proof-img-alt-2":
        "\u0625\u062b\u0628\u0627\u062a \u062a\u062d\u0648\u064a\u0644 \u0639\u0645\u064a\u0644 2",
      "proof-img-alt-3":
        "\u0625\u062b\u0628\u0627\u062a \u062a\u062d\u0648\u064a\u0644 \u0639\u0645\u064a\u0644 3",
      "proof-img-alt-4":
        "\u0625\u062b\u0628\u0627\u062a \u062a\u062d\u0648\u064a\u0644 \u0639\u0645\u064a\u0644 4",
      "proof-img-alt-5":
        "\u0625\u062b\u0628\u0627\u062a \u062a\u062d\u0648\u064a\u0644 \u0639\u0645\u064a\u0644 5",
      "proof-img-alt-6":
        "\u0625\u062b\u0628\u0627\u062a \u062a\u062d\u0648\u064a\u0644 \u0639\u0645\u064a\u0644 6",
      "proof-chip-1": "\u0641\u0646\u062f\u0642",
      "proof-chip-2": "\u0645\u0624\u0633\u0633\u0629",
      "proof-chip-3": "\u0631\u064a\u0627\u0644 \u0646\u0642\u062f\u064a",
      "proof-chip-4": "\u0641\u0646\u062f\u0642",
      "proof-chip-5": "\u0645\u0624\u0633\u0633\u0629",
      "proof-chip-6": "\u0641\u0646\u062f\u0642",
      "proof-copy-1":
        "\u201c\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0641\u0646\u062f\u0642 \u0625\u0644\u0649 \u0645\u0643\u0629 \u0643\u0627\u0646 \u0633\u0631\u064a\u0639\u0627\u064b. \u0645\u0646 \u0625\u0631\u0633\u0627\u0644 \u0625\u062b\u0628\u0627\u062a \u0627\u0644\u062f\u0641\u0639 \u062d\u062a\u0649 \u0627\u0644\u062a\u0623\u0643\u064a\u062f \u062d\u0648\u0627\u0644\u064a 10 \u062f\u0642\u0627\u0626\u0642.\u201d",
      "proof-copy-2":
        "\u201c\u0622\u0645\u0646 \u0648\u0634\u0641\u0627\u0641. \u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0625\u062b\u0628\u0627\u062a \u0627\u0644\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0631\u0633\u0645\u064a \u0645\u0628\u0627\u0634\u0631\u0629 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628.\u201d",
      "proof-copy-3":
        "\u201c\u0627\u0644\u0641\u0626\u0627\u062a \u0627\u0644\u0635\u063a\u064a\u0631\u0629 \u0645\u0637\u0627\u0628\u0642\u0629 \u0644\u0644\u0637\u0644\u0628. \u0625\u062c\u0631\u0627\u0621\u0627\u062a \u0633\u0631\u064a\u0639\u0629 \u0648\u0625\u062f\u0627\u0631\u0629 \u0645\u062a\u062c\u0627\u0648\u0628\u0629.\u201d",
      "proof-copy-4":
        "\u201c\u0645\u0646\u0627\u0633\u0628 \u0644\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0633\u0641\u0631. \u062a\u0645 \u062a\u0646\u0641\u064a\u0630 \u0645\u0639\u0627\u0645\u0644\u0627\u062a \u0639\u062f\u0629 \u0645\u062c\u0645\u0648\u0639\u0627\u062a \u0628\u062a\u0631\u062a\u064a\u0628 \u062e\u0644\u0627\u0644 \u064a\u0648\u0645 \u0648\u0627\u062d\u062f.\u201d",
      "proof-copy-5":
        "\u201c\u062e\u0637\u0648\u0627\u062a \u0627\u0644\u062a\u0623\u0643\u064a\u062f \u0648\u0627\u0636\u062d\u0629 \u0648\u0625\u062b\u0628\u0627\u062a \u0627\u0644\u062a\u062d\u0648\u064a\u0644 \u0643\u0627\u0645\u0644. \u0645\u0641\u064a\u062f \u062c\u062f\u0627\u064b \u0644\u062d\u0627\u062c\u0627\u062a \u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0627\u062a.\u201d",
      "proof-copy-6":
        "\u201c\u0627\u0644\u0625\u062f\u0627\u0631\u0629 \u0633\u0631\u064a\u0639\u0629 \u0627\u0644\u0631\u062f \u0648\u0627\u0644\u062a\u062d\u062f\u064a\u062b\u0627\u062a \u0648\u0627\u0636\u062d\u0629. \u0645\u0646\u0627\u0633\u0628 \u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a \u0627\u0644\u0641\u0646\u0627\u062f\u0642.\u201d",
      "proof-author-1":
        "A*** \u060c \u0633\u0648\u0631\u0627\u0628\u0627\u064a\u0627",
      "proof-author-2": "H*** \u060c \u062c\u0627\u0643\u0631\u062a\u0627",
      "proof-author-3":
        "N*** \u060c \u0628\u0627\u0646\u062f\u0648\u0646\u063a",
      "proof-author-4": "Travel M***, Makassar",
      "proof-author-5": "Travel A***, Bekasi",
      "proof-author-6":
        "R*** \u060c \u0633\u0645\u0627\u0631\u0627\u0646\u063a",
      "testimonial-text-1":
        "\u201c\u0627\u0644\u062d\u0645\u062f \u0644\u0644\u0647\u060c \u0627\u0644\u062a\u062d\u0648\u064a\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0641\u064a \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0643\u0627\u0646 \u0633\u0644\u0633\u0627\u064b. \u0623\u0631\u0633\u0644\u062a \u0625\u062b\u0628\u0627\u062a \u0627\u0644\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0633\u0627\u0639\u0629 10 \u0635\u0628\u0627\u062d\u0627\u064b\u060c \u0648\u0641\u064a 10:15 \u0623\u0643\u062f\u062a \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645.\u201d",
      "testimonial-text-2":
        "\u201c\u0644\u0632\u0645\u0644\u0627\u0621 \u0627\u0644\u0633\u064a\u0627\u062d\u0629\u060c \u0647\u0630\u0627 \u062d\u0644 \u0639\u0645\u0644\u064a. \u0645\u062f\u0641\u0648\u0639\u0627\u062a \u0627\u0644\u0641\u0646\u0627\u062f\u0642 \u0641\u064a \u0645\u0643\u0629 \u0648\u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u062a\u062a\u0645 \u0641\u0648\u0631\u0627\u064b.\u201d",
      "testimonial-text-3":
        "\u201c\u0627\u0633\u062a\u062e\u062f\u0645\u0646\u0627 RiyalDirect \u0644\u062f\u0641\u0639 \u0627\u0644\u062a\u0623\u0634\u064a\u0631\u0627\u062a \u0648\u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0644\u0640 3 \u0645\u062c\u0645\u0648\u0639\u0627\u062a. \u0627\u0644\u0639\u0645\u0644\u064a\u0629 \u0645\u0646\u0638\u0645\u0629 \u0645\u0639 \u0625\u062b\u0628\u0627\u062a \u0631\u0633\u0645\u064a.\u201d",
      "testimonial-role-1":
        "\u0631\u062c\u0644 \u0623\u0639\u0645\u0627\u0644\u060c \u062c\u0627\u0643\u0631\u062a\u0627",
      "testimonial-role-2":
        "\u0635\u0627\u062d\u0628 \u0634\u0631\u0643\u0629 \u0639\u0645\u0631\u0629\u060c \u0633\u0648\u0631\u0627\u0628\u0627\u064a\u0627",
      "testimonial-role-3":
        "\u0645\u062f\u064a\u0631 \u0633\u064a\u0627\u062d\u0629\u060c \u0628\u0627\u0646\u062f\u0648\u0646\u063a",
      "faq-badge":
        "\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629",
      "faq-q-1":
        "\u0647\u0644 \u0647\u0630\u0647 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629 \u0622\u0645\u0646\u0629\u061f",
      "faq-a-1":
        "\u0646\u0639\u0645\u060c \u0647\u064a \u0622\u0645\u0646\u0629 \u062c\u062f\u0627\u064b. \u0646\u0639\u062a\u0645\u062f \u0639\u0644\u0649 \u0628\u0646\u064a\u0629 \u062a\u062d\u062a\u064a\u0629 \u0645\u0635\u0631\u0641\u064a\u0629 \u0631\u0633\u0645\u064a\u0629 \u0648\u0634\u0631\u0627\u0643\u0627\u062a \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 \u0645\u0639 \u0634\u0631\u0643\u0627\u0621 \u0645\u062d\u0644\u064a\u064a\u0646 \u0641\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629\u060c \u0628\u0633\u0639\u0629 \u062a\u0635\u0644 \u0625\u0644\u0649 5 \u0645\u0644\u0627\u064a\u064a\u0646 \u0631\u064a\u0627\u0644 \u064a\u0648\u0645\u064a\u0627\u064b. \u0648\u0645\u0639 \u0633\u062c\u0644 \u062e\u0628\u0631\u0629 3+\u0020\u0633\u0646\u0648\u0627\u062a\u060c \u0646\u0636\u0645\u0646 \u0627\u0644\u0634\u0641\u0627\u0641\u064a\u0629 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0625\u0631\u0633\u0627\u0644 \u0625\u064a\u0635\u0627\u0644\u0627\u062a \u0627\u0644\u0628\u0646\u0643 \u0627\u0644\u0631\u0633\u0645\u064a\u0629 \u0641\u0648\u0631\u064a\u0627\u064b \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628.",
      "faq-q-2":
        "\u0643\u0645 \u0645\u0646 \u0627\u0644\u0648\u0642\u062a \u062d\u062a\u0649 \u062a\u0635\u0644 \u0627\u0644\u0623\u0645\u0648\u0627\u0644 \u0625\u0644\u0649 \u0627\u0644\u062c\u0647\u0629 \u0627\u0644\u0645\u0642\u0635\u0648\u062f\u0629\u061f",
      "faq-a-2":
        "\u062a\u064f\u0639\u0627\u0644\u062c \u0643\u0644 \u0645\u0639\u0627\u0645\u0644\u0629 \u0628\u0634\u0643\u0644 \u0645\u0646\u0638\u0645 \u0648\u0641\u0642 \u062a\u0633\u0644\u0633\u0644 \u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0648\u0627\u0631\u062f\u0629. \u064a\u062a\u0645 \u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0623\u0645\u0648\u0627\u0644 \u0625\u0644\u0649 \u062d\u0633\u0627\u0628 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0623\u0648 \u0627\u0644\u0641\u0646\u062f\u0642 \u0628\u0639\u062f \u0627\u0643\u062a\u0645\u0627\u0644 \u0627\u0644\u062a\u062d\u0642\u0642\u060c \u0644\u0636\u0645\u0627\u0646 \u0627\u0644\u0623\u0645\u0627\u0646 \u0648\u062f\u0642\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0641\u064a \u0643\u0644 \u062d\u0648\u0627\u0644\u0629.",
      "faq-q-3":
        "\u0645\u0627 \u0647\u0648 \u0623\u0648\u0644 \u062e\u0637\u0648\u0629 \u0644\u0628\u062f\u0621 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629\u061f",
      "faq-a-3":
        '\u0645\u0627 \u0639\u0644\u064a\u0643 \u0625\u0644\u0627 \u0627\u0644\u0636\u063a\u0637 \u0639\u0644\u0649 \u0632\u0631 \u0648\u0627\u062a\u0633\u0627\u0628 \u0641\u064a \u0627\u0644\u0632\u0627\u0648\u064a\u0629 \u0627\u0644\u0633\u0641\u0644\u064a\u0629 \u0627\u0644\u064a\u0645\u0646\u0649 \u0623\u0648 \u0632\u0631 \"\u0627\u0628\u062f\u0623 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629\". \u0633\u064a\u0642\u0648\u0645 \u0641\u0631\u064a\u0642 \u0627\u0644\u062f\u0639\u0645 \u0628\u0625\u0631\u0634\u0627\u062f\u0643 \u0644\u0641\u062d\u0635 \u0627\u0644\u0633\u0639\u0631 \u0648\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062d\u0633\u0627\u0628 \u0627\u0644\u0645\u0633\u062a\u0647\u062f\u0641.',
      "faq-q-4":
        "\u0645\u0627 \u0641\u0626\u0627\u062a \u0627\u0644\u0631\u064a\u0627\u0644 \u0627\u0644\u0646\u0642\u062f\u064a \u0627\u0644\u0645\u062a\u0627\u062d\u0629\u061f",
      "faq-a-4":
        "\u0646\u0648\u0641\u0631 \u0641\u0626\u0627\u062a 1\u060c 5\u060c 10\u060c 50\u060c 100\u060c \u0648500 \u0631\u064a\u0627\u0644 \u0644\u0644\u0627\u0633\u062a\u0644\u0627\u0645 \u0641\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629.",
      "faq-q-5":
        "\u0643\u064a\u0641 \u0623\u0628\u062f\u0623 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629\u061f",
      "faq-a-5":
        "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0623\u062d\u062f \u0645\u0634\u0631\u0641\u064a\u0646\u0627 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628. \u0623\u062e\u0628\u0631\u0646\u0627 \u0628\u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a\u0643.",
      "cash-desc-a":
        "\u0641\u0626\u0627\u062a \u0645\u062a\u0646\u0648\u0639\u0629 \u0645\u062a\u0627\u062d\u0629 \u0644\u0645\u0635\u0631\u0648\u0641 \u0627\u0644\u062d\u062c\u0627\u062c \u0641\u064a \u0627\u0644\u0623\u0631\u0636 \u0627\u0644\u0645\u0642\u062f\u0633\u0629.",
      "cash-desc-b":
        "\u064a\u0645\u0643\u0646 \u0627\u0633\u062a\u0644\u0627\u0645 \u0627\u0644\u0631\u064a\u0627\u0644 \u0627\u0644\u0646\u0642\u062f\u064a \u0645\u0628\u0627\u0634\u0631\u0629 \u0645\u0646 \u0641\u0631\u064a\u0642\u0646\u0627 \u0641\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629.",
      "cash-button-text":
        "\u0627\u0637\u0644\u0628 \u0631\u064a\u0627\u0644 \u0646\u0642\u062f\u064a",
      "cta-subtitle":
        "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0644\u0627\u0633\u062a\u0634\u0627\u0631\u0629 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0648\u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a \u0627\u0644\u062f\u0641\u0639. \u0645\u062c\u0627\u0646\u0627\u064b \u0648\u0628\u062f\u0648\u0646 \u0627\u0644\u062a\u0632\u0627\u0645.",
      "cta-button-text":
        "\u0627\u0633\u062a\u0634\u0627\u0631\u0629 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628",
      "footer-description":
        "\u0634\u0631\u064a\u0643 \u0645\u0648\u062b\u0648\u0642 \u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0648\u0627\u0644\u0641\u0646\u062f\u0642 \u0648\u0639\u0645\u0644\u064a\u0627\u062a \u0627\u0644\u062d\u062c \u0648\u0627\u0644\u0639\u0645\u0631\u0629.",
      "footer-service-title":
        "\u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",
      "footer-service-1":
        "\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0645\u0624\u0633\u0633\u0629",
      "footer-service-2":
        "\u062f\u0641\u0639 \u0627\u0644\u0641\u0646\u062f\u0642",
      "footer-service-3":
        "\u062e\u062f\u0645\u0629 \u0627\u0644\u0634\u062d\u0646",
      "footer-service-4":
        "\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0631\u064a\u0627\u0644",
      "footer-contact-title": "\u0627\u062a\u0635\u0644 \u0628\u0646\u0627",
      "footer-location-text":
        "\u062c\u0627\u0643\u0631\u062a\u0627\u060c \u0625\u0646\u062f\u0648\u0646\u064a\u0633\u064a\u0627",
      "footer-copyright":
        "\u00a9 2026 RiyalDirect. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629.",
      "footer-terms":
        "\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062d\u0643\u0627\u0645",
      "footer-privacy":
        "\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629",
      "wa-modal-badge":
        "\u062f\u0639\u0645 \u0648\u0627\u062a\u0633\u0627\u0628",
      "wa-modal-title":
        "\u0627\u062e\u062a\u0631 \u0645\u0634\u0631\u0641 \u0627\u0644\u062e\u062f\u0645\u0629",
      "wa-modal-subtitle-1":
        "\u0627\u062e\u062a\u0631 \u0623\u062d\u062f \u0645\u0634\u0631\u0641\u064a\u0646\u0627 \u0623\u062f\u0646\u0627\u0647.",
      "wa-modal-subtitle-2":
        "\u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u0633\u0631\u064a\u0639\u0629.",
      "mobile-link-features": "\u0627\u0644\u062e\u062f\u0645\u0627\u062a",
      "mobile-link-steps":
        "\u062e\u0637\u0648\u0627\u062a \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629",
      "mobile-link-testimonials":
        "\u0622\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621",
      "mobile-link-cash": "\u0631\u064a\u0627\u0644 \u0646\u0642\u062f\u064a",
      "mobile-link-faq": "\u0627\u0644\u0623\u0633\u0626\u0644\u0629",
      "mobile-contact-btn":
        "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627",
      "testimonial-subtitle":
        "\u062a\u062c\u0627\u0631\u0628 \u062d\u0642\u064a\u0642\u064a\u0629 \u0645\u0646 \u0634\u0631\u0643\u0627\u0626\u0646\u0627 \u0648\u0627\u0644\u062d\u062c\u0627\u062c \u0627\u0644\u0630\u064a\u0646 \u0627\u0633\u062a\u062e\u062f\u0645\u0648\u0627 \u062e\u062f\u0645\u0627\u062a\u0646\u0627.",
      "faq-subtitle":
        "\u0627\u0636\u063a\u0637 \u0639\u0644\u0649 \u0627\u0644\u0633\u0624\u0627\u0644 \u0644\u0639\u0631\u0636 \u0627\u0644\u0625\u062c\u0627\u0628\u0629.",
      "cash-subtitle":
        "\u0646\u0648\u0641\u0631 \u0631\u064a\u0627\u0644 \u0646\u0642\u062f\u064a (SAR) \u064a\u0645\u0643\u0646 \u0627\u0633\u062a\u0644\u0627\u0645\u0647 \u0645\u0628\u0627\u0634\u0631\u0629 \u0641\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629.",
      "cash-denom-title":
        "\u0627\u0644\u0641\u0626\u0627\u062a \u0627\u0644\u0645\u062a\u0627\u062d\u0629",
      "cash-pickup-title":
        "\u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645 \u0641\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629",
      "cash-denom-note":
        "\u0627\u0644\u0641\u0626\u0627\u062a \u0627\u0644\u0635\u063a\u064a\u0631\u0629 \u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0644\u062a\u0633\u0648\u0642 \u062d\u0648\u0644 \u0627\u0644\u0645\u0633\u062c\u062f \u0627\u0644\u062d\u0631\u0627\u0645 \u0648\u0627\u0644\u0645\u0633\u062c\u062f \u0627\u0644\u0646\u0628\u0648\u064a.",
      "cash-footnote":
        "* \u062e\u062f\u0645\u0629 \u0627\u0644\u0631\u064a\u0627\u0644 \u0627\u0644\u0646\u0642\u062f\u064a \u0645\u062a\u0627\u062d\u0629 \u0641\u0642\u0637 \u0641\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629. \u0644\u0644\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0628\u0646\u0643\u064a\u060c \u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u062e\u062f\u0645\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621.",
      "cash-badge": "\u0631\u064a\u0627\u0644 \u0646\u0642\u062f\u064a",
      "cash-city-1":
        "\u0645\u0643\u0629 \u0627\u0644\u0645\u0643\u0631\u0645\u0629",
      "cash-city-2":
        "\u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629",
      "cash-city-3":
        "\u062c\u062f\u0629 (\u0627\u0644\u0645\u0637\u0627\u0631 \u0648\u0627\u0644\u0645\u062f\u064a\u0646\u0629)",
      "cta-response-text":
        "\u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u0633\u0631\u064a\u0639\u0629 \u2022 \u062f\u0639\u0645 24/7",
      "cta-security-note":
        "\u0645\u0639\u0627\u0645\u0644\u0629 \u0622\u0645\u0646\u0629 \u0648\u0645\u062d\u0645\u064a\u0629",
      "footer-info-title": "\u0645\u0639\u0644\u0648\u0645\u0627\u062a",
      "footer-email-text": "admin@riyaldirect.com",
    },
    html: {
      "feature-heading":
        '\u0644\u0645\u0627\u0630\u0627 \u062a\u062e\u062a\u0627\u0631 <span class="text-primary">RiyalDirect</span>\u061f',
      "steps-heading":
        '\u062e\u0637\u0648\u0627\u062a \u0627\u0644\u062a\u062d\u0648\u064a\u0644 \u0648 <span class="text-primary">\u062f\u0641\u0639 \u0627\u0644\u0641\u0646\u062f\u0642</span>',
      "testimonial-heading":
        '\u0645\u0648\u062b\u0648\u0642 \u0645\u0646 \u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0633\u064a\u0627\u062d\u0629 \u0648\u0627\u0644\u062d\u062c\u0627\u062c <span class="text-primary">\u0641\u064a \u0643\u0644 \u0645\u0643\u0627\u0646</span>',
      "faq-heading":
        '\u0627\u0644\u0623\u0633\u0626\u0644\u0629 <span class="text-primary">\u0627\u0644\u0634\u0627\u0626\u0639\u0629</span>',
      "cta-heading":
        "\u062c\u0627\u0647\u0632\u0648\u0646 \u0644\u0645\u0633\u0627\u0639\u062f\u0629 \u0645\u0639\u0627\u0645\u0644\u062a\u0643",
      "cash-heading":
        '\u0631\u064a\u0627\u0644 \u0646\u0642\u062f\u064a <span class="text-primary">\u0641\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629</span>',
    },
  },
  ms: {
    text: {
      "nav-contact-text": "Hubungi Kami",
      "brand-tagline": "Pemindahan Riyal Dipercayai",
      "nav-link-home": "Utama",
      "nav-link-features": "Perkhidmatan",
      "nav-link-steps": "Aliran",
      "nav-link-testimonials": "Ulasan",
      "nav-link-faq": "FAQ",
      "hero-badge-text": "PERKHIDMATAN PEMINDAHAN RIYAL DISAHKAN",
      "hero-title-line-1": "Transfer Riyal untuk Muasasah & Hotel di Saudi,",
      "hero-title-line-2": "Selamat, Pantas, dan Praktikal",
      "hero-subtitle":
        "Perkhidmatan pemindahan Riyal untuk keperluan Muasasah dan hotel di Saudi dengan proses pantas, telus, dan selamat.",
      "hero-trust-safe": "Transaksi Selamat",
      "hero-trust-open": "Buka Setiap Hari",
      "hero-cta-text": "Mula Transaksi",
      "hero-security-badge": "100% Amanah",
      "calc-desktop-title": "Simulasi Kadar",
      "calc-desktop-live": "LIVE",
      "calc-label-sar": "Jumlah Riyal (SAR)",
      "calc-label-idr": "Anggaran Rupiah (IDR)",
      "calc-rate-note": "Kadar indikatif. Hubungi CS untuk kadar akhir.",
      "calc-live-data": "Kadar Google +10",
      "quote-text":
        "\u201cOrang yang mengerjakan haji dan umrah adalah utusan Allah. Allah memanggil mereka lalu mereka memenuhi panggilan-Nya. Mereka meminta kepada-Nya lalu Allah memberi mereka.\u201d",
      "quote-source": "HR. Ibn Majah no. 2892 \u2014 Sahih (Al-Albani)",
      "trust-exp-label": "Tahun Pengalaman",
      "trust-partner-label": "Rakan Puas",
      "trust-disbursed-label": "Disalurkan",
      "trust-disbursed-unit": "Juta",
      "feature-badge-label": "Nilai Kami",
      "feature-subtitle":
        "Kami menyediakan standard perkhidmatan premium untuk transaksi lancar di Tanah Suci.",
      "feature-title-1": "Tanpa Tunai",
      "feature-title-2": "Kecekapan Masa",
      "feature-title-3": "Amanah & Terjamin",
      "feature-desc-1":
        "Kurangkan risiko kehilangan wang tunai dengan pemindahan terus ke akaun Muasasah atau hotel.",
      "feature-desc-2":
        "Fokus pada ibadah dan perniagaan anda. Tanpa beratur, tanpa birokrasi rumit.",
      "feature-desc-3":
        "Reputasi 3+ tahun menjaga amanah. Resit pemindahan rasmi dihantar secara langsung ke WhatsApp.",
      "feature-tag-1": "Lebih Selamat",
      "feature-tag-2": "Lebih Pantas",
      "feature-tag-3": "Dipercayai",
      "steps-badge": "Aliran Transaksi",
      "step-title-1": "Konsultasi",
      "step-title-2": "Pembayaran",
      "step-title-3": "Selesai",
      "step-desc-1":
        "Hubungi pasukan kami melalui WhatsApp. Maklumkan jumlah riyal dan destinasi pemindahan.",
      "step-desc-2":
        "Pindahkan Rupiah ke akaun rasmi kami dengan kadar yang kompetitif dan telus.",
      "step-desc-3":
        "Riyal dihantar kepada penerima. Bukti pemindahan sah dihantar sebagai pengesahan.",
      "testimonial-badge": "Ulasan Rakan",
      "proof-badge": "Testimoni Disahkan",
      "proof-heading": "Bukti Pemindahan Asli, Boleh Swipe",
      "proof-subtitle":
        "Geser kiri-kanan untuk lihat bukti pemindahan dan pengalaman pelanggan. Data sensitif disamarkan demi privasi.",
      "proof-note": "Geser untuk melihat lebih banyak bukti pemindahan.",
      "proof-prev-aria": "Geser ke kiri",
      "proof-next-aria": "Geser ke kanan",
      "proof-img-alt-1": "Bukti pemindahan pelanggan 1",
      "proof-img-alt-2": "Bukti pemindahan pelanggan 2",
      "proof-img-alt-3": "Bukti pemindahan pelanggan 3",
      "proof-img-alt-4": "Bukti pemindahan pelanggan 4",
      "proof-img-alt-5": "Bukti pemindahan pelanggan 5",
      "proof-img-alt-6": "Bukti pemindahan pelanggan 6",
      "proof-chip-1": "Hotel",
      "proof-chip-2": "Muasasah",
      "proof-chip-3": "Riyal Tunai",
      "proof-chip-4": "Hotel",
      "proof-chip-5": "Muasasah",
      "proof-chip-6": "Hotel",
      "proof-copy-1":
        '"Pemindahan hotel ke Makkah masuk cepat. Dari hantar bukti Rupiah ke pengesahan hanya sekitar 10 minit."',
      "proof-copy-2":
        '"Aman dan telus. Bukti pemindahan rasmi terus dihantar ke WhatsApp tanpa diminta."',
      "proof-copy-3":
        '"Pecahan kecil ikut permintaan. Proses cepat dan admin responsif untuk keperluan jemaah."',
      "proof-copy-4":
        '"Sesuai untuk travel. Transaksi berbilang rombongan boleh diurus dengan kemas dalam satu hari."',
      "proof-copy-5":
        '"Proses pengesahan jelas dan bukti pemindahan lengkap. Sangat membantu untuk keperluan rombongan."',
      "proof-copy-6":
        '"Admin cepat respon dan status transaksi dikemas kini dengan jelas. Sesuai untuk pembayaran hotel."',
      "proof-author-1": "En A***, Surabaya",
      "proof-author-2": "Ustaz H***, Jakarta",
      "proof-author-3": "Pn N***, Bandung",
      "proof-author-4": "Travel M***, Makassar",
      "proof-author-5": "Travel A***, Bekasi",
      "proof-author-6": "En R***, Semarang",
      "testimonial-text-1":
        "\u201cAlhamdulillah, pemindahan ke Muasasah di Madinah lancar. Saya hantar bukti pemindahan pukul 10 pagi, pukul 10.15 Muasasah sudah sahkan.\u201d",
      "testimonial-text-2":
        "\u201cUntuk rakan-rakan travel, ini penyelesaian handling yang praktikal. Pembayaran hotel di Makkah dan Madinah terus selesai.\u201d",
      "testimonial-text-3":
        "\u201cKami guna RiyalDirect untuk bayar visa dan Muasasah 3 kumpulan sekali gus. Proses kemas, ada bukti rasmi.\u201d",
      "testimonial-role-1": "Usahawan, Jakarta",
      "testimonial-role-2": "Pemilik Travel Umrah, Surabaya",
      "testimonial-role-3": "Pengurus Travel, Bandung",
      "faq-badge": "Pusat Bantuan",
      "faq-q-1": "Adakah transaksi ini selamat?",
      "faq-a-1":
        "Sangat selamat. Kami disokong oleh infrastruktur perbankan rasmi dan kerjasama strategik dengan warga tempatan Saudi dengan kapasiti had sehingga 5 Juta SAR sehari. Dengan rekod 3+ tahun, setiap transaksi dijamin telus melalui penghantaran resit bank rasmi secara masa nyata ke WhatsApp anda.",
      "faq-q-2": "Berapa lama wang sampai ke destinasi?",
      "faq-a-2":
        "Setiap transaksi diproses secara sistematik mengikut giliran antrean yang masuk. Dana anda akan segera diteruskan ke akaun Muasasah atau Hotel selepas proses pengesahan selesai untuk memastikan keselamatan dan ketepatan data bagi setiap penghantaran.",
      "faq-q-3": "Apakah langkah awal untuk transaksi?",
      "faq-a-3":
        'Cukup klik butang WhatsApp di penjuru kanan bawah atau butang "Mulai Transaksi". Pasukan sokongan kami akan terus membimbing anda untuk semakan kadar dan nombor akaun tujuan.',
      "faq-q-4": "Apakah denominasi riyal tunai yang tersedia?",
      "faq-a-4":
        "Kami sediakan denominasi 1, 5, 10, 50, 100, dan 500 SAR untuk diambil di Saudi.",
      "faq-q-5": "Bagaimana cara memulakan transaksi?",
      "faq-a-5":
        "Hubungi mana-mana admin kami melalui WhatsApp. Maklumkan keperluan anda.",
      "cash-desc-a":
        "Pelbagai denominasi tersedia untuk wang saku jemaah di Tanah Suci.",
      "cash-desc-b":
        "Riyal tunai boleh diambil terus dari pasukan kami di Saudi. Tersedia di bandar utama.",
      "cash-button-text": "Pesan Riyal Tunai",
      "cta-subtitle":
        "Hubungi pasukan kami untuk konsultasi kadar dan keperluan pembayaran di Tanah Suci.",
      "cta-button-text": "Konsultasi via WhatsApp",
      "footer-description":
        "Rakan dipercayai untuk pembayaran Muasasah, Hotel, dan operasi Haji & Umrah.",
      "footer-service-title": "Perkhidmatan Utama",
      "footer-service-1": "Pemindahan Muasasah",
      "footer-service-2": "Pembayaran Hotel",
      "footer-service-3": "Pengendalian Kargo",
      "footer-service-4": "Kadar Riyal Terkini",
      "footer-contact-title": "Hubungi Kami",
      "footer-location-text": "Jakarta, Indonesia",
      "footer-copyright": "\u00a9 2026 RiyalDirect. Hak cipta terpelihara.",
      "footer-terms": "Terma & Syarat",
      "footer-privacy": "Dasar Privasi",
      "wa-modal-badge": "Sokongan WhatsApp",
      "wa-modal-title": "Pilih Admin Perkhidmatan",
      "wa-modal-subtitle-1": "Pilih salah satu admin kami di bawah.",
      "wa-modal-subtitle-2": "Respons pantas, pilih admin yang tersedia.",
      "mobile-link-features": "Perkhidmatan",
      "mobile-link-steps": "Aliran Transaksi",
      "mobile-link-testimonials": "Ulasan",
      "mobile-link-cash": "Riyal Tunai",
      "mobile-link-faq": "FAQ",
      "mobile-contact-btn": "Hubungi Kami",
      "testimonial-subtitle":
        "Pengalaman sebenar dari rakan dan jemaah yang telah menggunakan perkhidmatan kami.",
      "faq-subtitle": "Klik soalan untuk melihat jawapan.",
      "cash-subtitle":
        "Kami menyediakan wang tunai Riyal (SAR) fizikal yang boleh diambil terus di Saudi Arabia.",
      "cash-denom-title": "Denominasi Tersedia",
      "cash-pickup-title": "Pengambilan di Saudi",
      "cash-denom-note":
        "Denominasi kecil sesuai untuk membeli-belah di sekitar Masjidil Haram & Masjid Nabawi.",
      "cash-footnote":
        "* Perkhidmatan riyal tunai hanya tersedia di Saudi Arabia. Untuk pemindahan bank ke Muasasah/Hotel, sila hubungi CS.",
      "cash-badge": "Riyal Tunai",
      "cash-city-1": "Makkah al-Mukarramah",
      "cash-city-2": "Madinah al-Munawwarah",
      "cash-city-3": "Jeddah (Lapangan Terbang & Bandar)",
      "cta-response-text": "Respons pantas \u2022 24/7 Support",
      "cta-security-note": "Transaksi selamat & dilindungi",
      "footer-info-title": "Maklumat",
      "footer-email-text": "admin@riyaldirect.com",
    },
    html: {
      "feature-heading":
        'Mengapa Pilih <span class="text-primary">RiyalDirect</span>?',
      "steps-heading":
        'Aliran Pemindahan Riyal & <span class="text-primary">Pembayaran Hotel</span>',
      "testimonial-heading":
        'Dipercayai Travel & Jemaah <span class="text-primary">Seluruh Indonesia</span>',
      "faq-heading": 'Soalan <span class="text-primary">Lazim</span>',
      "cta-heading": "Sedia Membantu Transaksi Anda",
      "cash-heading":
        'Riyal Tunai <span class="text-primary">di Saudi Arabia</span>',
    },
  },
};
const waAutoMessages = {
  general: {
    id: "Assalamualaikum Admin, saya ingin bertanya tentang transfer riyal.",
    en: "Hello Admin, I want to ask about riyal transfer.",
    ar: "\u0627\u0644\u0633\u0644\u0627\u0645 \u0639\u0644\u064a\u0643\u0645\u060c \u0623\u0631\u064a\u062f \u0627\u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631 \u0639\u0646 \u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0631\u064a\u0627\u0644",
    ms: "Assalamualaikum Admin, saya ingin bertanya tentang transfer riyal.",
  },
  cash: {
    id: "Assalamualaikum Admin, saya ingin beli Riyal Cash dan tanya info pembayaran Hotel/Visa secara Tunai.",
    en: "Hello Admin, I need Riyal cash and information about cash payment for Hotel/Visa.",
    ar: "\u0627\u0644\u0633\u0644\u0627\u0645 \u0639\u0644\u064a\u0643\u0645\u060c \u0623\u0631\u064a\u062f \u0634\u0631\u0627\u0621 \u0627\u0644\u0631\u064a\u0627\u0644 \u0646\u0642\u062f\u0627\u064b",
    ms: "Assalamualaikum Admin, saya ingin beli Riyal Cash.",
  },
};

function updateWALinks(lang) {
  const ctx = waAutoMessages[currentWAMessageContext] || waAutoMessages.general;
  const msg = ctx[lang] || ctx.id;
  document.querySelectorAll("a[data-wa-number]").forEach((link) => {
    const num = link.getAttribute("data-wa-number");
    if (num) link.href = `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
  });
}

function applyLanguage(lang) {
  const sel = translations[lang] ? lang : "id";
  const dict = translations[sel];
  const isAr = sel === "ar";
  document.documentElement.lang = sel;
  document.documentElement.setAttribute("dir", isAr ? "rtl" : "ltr");
  document.body.setAttribute("dir", isAr ? "rtl" : "ltr");
  document.body.classList.toggle("lang-ar", isAr);
  Object.entries(dict.text || {}).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });
  Object.entries(dict.html || {}).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = val;
  });
  [
    ["proof-prev", "aria-label", "proof-prev-aria"],
    ["proof-next", "aria-label", "proof-next-aria"],
    ["proof-img-1", "alt", "proof-img-alt-1"],
    ["proof-img-2", "alt", "proof-img-alt-2"],
    ["proof-img-3", "alt", "proof-img-alt-3"],
    ["proof-img-4", "alt", "proof-img-alt-4"],
    ["proof-img-5", "alt", "proof-img-alt-5"],
    ["proof-img-6", "alt", "proof-img-alt-6"],
  ].forEach(([id, attr, key]) => {
    const el = document.getElementById(id);
    const value = dict.text?.[key];
    if (el && value) el.setAttribute(attr, value);
  });
  updateWALinks(sel);
  localStorage.setItem("site_lang", sel);
}

function initLanguageSwitcher() {
  const select = document.getElementById("language-switcher");
  if (!select) return;
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  const savedLang = localStorage.getItem("site_lang");
  const initial = translations[urlLang]
    ? urlLang
    : translations[savedLang]
      ? savedLang
      : "id";
  select.value = initial;
  applyLanguage(initial);
  select.addEventListener("change", (e) => {
    const newLang = e.target.value;
    applyLanguage(newLang);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", newLang);
    window.history.replaceState({}, "", url);
  });
}

// ===== CALCULATOR =====
document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitcher();

  // Hamburger menu
  const hamburger = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileClose = document.getElementById("mobile-menu-close");
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () =>
      mobileMenu.classList.add("active"),
    );
  }
  if (mobileClose && mobileMenu) {
    mobileClose.addEventListener("click", () =>
      mobileMenu.classList.remove("active"),
    );
  }

  const inputSar =
    document.getElementById("input-sar") ||
    document.getElementById("input-idr");
  const outputIdr =
    document.getElementById("output-idr") ||
    document.getElementById("output-sar");
  const RATE_ADJUSTMENT = 10;
  let currentRate = 4250 + RATE_ADJUSTMENT; // IDR per 1 SAR

  const formatIDR = (num) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(num);

  const calculate = () => {
    const amount = parseFloat(inputSar?.value);
    if (outputIdr)
      outputIdr.value =
        !isNaN(amount) && amount > 0
          ? formatIDR(amount * currentRate)
          : formatIDR(0);
    const outputMobile =
      document.getElementById("output-idr-mobile") ||
      document.getElementById("output-sar-mobile");
    if (outputMobile && outputIdr) outputMobile.value = outputIdr.value;
  };

  const googleRateUrl =
    "https://api.codetabs.com/v1/proxy?quest=https://www.google.com/finance/quote/SAR-IDR";
  const fallbackRateUrl = "https://api.exchangerate-api.com/v4/latest/SAR";
  const parseGoogleRate = (html) => {
    const match = html?.match(/data-last-price="([0-9.]+)"/i);
    return match ? parseFloat(match[1]) : NaN;
  };

  fetch(googleRateUrl)
    .then((r) => r.text())
    .then((html) => {
      const googleRate = parseGoogleRate(html);
      if (!isNaN(googleRate) && googleRate > 0) {
        currentRate = googleRate + RATE_ADJUSTMENT;
        return;
      }
      throw new Error("Google rate parse failed");
    })
    .catch(() =>
      fetch(fallbackRateUrl)
        .then((r) => r.json())
        .then((data) => {
          if (data?.rates?.IDR) currentRate = data.rates.IDR + RATE_ADJUSTMENT;
        })
        .catch(() => {}),
    )
    .finally(() => calculate());

  if (inputSar) inputSar.addEventListener("input", calculate);

  const inputMobile =
    document.getElementById("input-sar-mobile") ||
    document.getElementById("input-idr-mobile");
  if (inputMobile) {
    inputMobile.addEventListener("input", function () {
      if (inputSar) inputSar.value = this.value;
      calculate();
    });
    if (inputSar)
      inputSar.addEventListener("input", function () {
        inputMobile.value = this.value;
      });
  }
  calculate();

  // Open first FAQ item by default for better discoverability
  const firstFaqBtn = document.querySelector("#faq .faq-item .faq-btn");
  if (firstFaqBtn) toggleFaq(firstFaqBtn);

  const proofCarousel = document.getElementById("proof-carousel");
  const proofPrev = document.getElementById("proof-prev");
  const proofNext = document.getElementById("proof-next");
  if (proofCarousel && proofPrev && proofNext) {
    const getSlideStep = () => {
      const first = proofCarousel.querySelector(".proof-card");
      if (!first) return 320;
      const gap = parseFloat(
        getComputedStyle(proofCarousel).columnGap ||
          getComputedStyle(proofCarousel).gap ||
          "16",
      );
      return first.getBoundingClientRect().width + gap;
    };
    proofPrev.addEventListener("click", () => {
      proofCarousel.scrollBy({ left: -getSlideStep(), behavior: "smooth" });
    });
    proofNext.addEventListener("click", () => {
      proofCarousel.scrollBy({ left: getSlideStep(), behavior: "smooth" });
    });
  }

  // ===== SCROLL ANIMATIONS =====
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );

  document
    .querySelectorAll(".anim-fade-up")
    .forEach((el) => observer.observe(el));

  // ===== SCROLL REVEAL FOR SECTIONS =====
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -30px 0px" },
  );

  // Cards and items
  document
    .querySelectorAll(
      "#features .grid > div, #steps .grid > div, #testimonials .grid > div, #proof-testimonials .proof-card, .faq-item, #riyal-cash .bg-background-card",
    )
    .forEach((el) => {
      el.classList.add("scroll-reveal");
      revealObserver.observe(el);
    });

  // Section headings
  document
    .querySelectorAll(
      "#features .text-center, #steps .text-center, #testimonials .text-center, #proof-testimonials .text-center, #faq .text-center, #riyal-cash .text-center",
    )
    .forEach((el) => {
      el.classList.add("section-reveal");
      revealObserver.observe(el);
    });

  // Stats bar reveal
  document.querySelectorAll(".stats-bar .text-center").forEach((el) => {
    el.classList.add("scroll-reveal");
    revealObserver.observe(el);
  });

  // ===== COUNTER ANIMATION (easeOutExpo) =====
  let counterTriggered = false;
  const statsBar = document.querySelector(".stats-bar");
  if (statsBar) {
    const counterObs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !counterTriggered) {
        counterTriggered = true;
        document.querySelectorAll(".count-up").forEach((counter) => {
          const target = +counter.getAttribute("data-target");
          const suffix = counter.getAttribute("data-suffix") || "";
          const duration = 1500;
          const startTime = performance.now();
          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = Math.ceil(eased * target);
            counter.textContent = current + suffix;
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        });
      }
    });
    counterObs.observe(statsBar);
  }
});

// ===== NAVBAR SCROLL EFFECT =====
const stickyCta = document.getElementById("sticky-cta");
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    if (window.scrollY > 80) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
  if (stickyCta) {
    if (window.scrollY > 500) stickyCta.classList.add("visible");
    else stickyCta.classList.remove("visible");
  }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
