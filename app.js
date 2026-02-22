// ===== RIYALDIRECT APP.JS â€” PayungMadinah-Inspired Edition =====

let currentWAMessageContext = 'general';

// ===== WA MODAL =====
function openWAModal(context = 'general') {
  currentWAMessageContext = context;
  const modal = document.getElementById('wa-modal');
  if (!modal) return;
  modal.classList.add('active');
  const lang = document.documentElement.lang || 'id';
  updateWALinks(lang);
}
function toggleWAModal() {
  const modal = document.getElementById('wa-modal');
  if (!modal) return;
  modal.classList.toggle('active');
  if (modal.classList.contains('active')) {
    currentWAMessageContext = 'general';
    updateWALinks(document.documentElement.lang || 'id');
  }
}
function closeWAModalOnBackdrop(event) {
  if (event.target === event.currentTarget) toggleWAModal();
}

// ===== MOBILE MENU =====
function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.remove('active');
}

// ===== FAQ =====
function toggleFaq(button) {
  const answer = button.nextElementSibling;
  const icon = button.querySelector('.faq-icon-el');
  document.querySelectorAll('.faq-answer').forEach(el => {
    if (el !== answer) {
      el.style.maxHeight = '0px';
      const ic = el.previousElementSibling?.querySelector('.faq-icon-el');
      if (ic) ic.style.transform = 'rotate(0)';
    }
  });
  if (answer.style.maxHeight && answer.style.maxHeight !== '0px') {
    answer.style.maxHeight = '0px';
    if (icon) icon.style.transform = 'rotate(0)';
  } else {
    answer.style.maxHeight = answer.scrollHeight + 'px';
    if (icon) icon.style.transform = 'rotate(180deg)';
  }
}

// ===== TRANSLATIONS =====
const translations = {
  id: {
    text: {
      'nav-contact-text': 'Hubungi Kami',
      'nav-link-features': 'Layanan', 'nav-link-steps': 'Alur', 'nav-link-testimonials': 'Testimoni', 'nav-link-faq': 'FAQ',
      'hero-badge-text': 'LAYANAN TRANSFER RIYAL TERVERIFIKASI',
      'hero-title-line-1': 'Transfer Riyal untuk Muasasah & Hotel di Saudi,',
      'hero-title-line-2': 'Aman, Cepat, dan Praktis',
      'hero-subtitle': 'Layanan transfer Riyal untuk kebutuhan Muasasah dan hotel di Saudi dengan proses cepat, transparan, dan aman.',
      'hero-cta-text': 'Mulai Transaksi',
      'hero-security-badge': '100% Amanah',
      'calc-desktop-title': 'Simulasi Kurs', 'calc-desktop-live': 'LIVE',
      'calc-label-sar': 'Jumlah Riyal (SAR)', 'calc-label-idr': 'Estimasi Rupiah (IDR)',
      'calc-rate-note': 'Rate indikatif. Hubungi CS untuk final rate.',
      'calc-live-data': 'Kurs Google +10',
      'quote-text': '\u201cPara jamaah haji dan umrah adalah utusan Allah. Allah memanggil mereka lalu mereka memenuhi panggilan-Nya. Mereka meminta kepada-Nya lalu Allah memberi mereka.\u201d',
      'quote-source': 'HR. Ibnu Majah no. 2892 \u2014 Shahih (Al-Albani)',
      'trust-exp-label': 'Tahun Pengalaman', 'trust-partner-label': 'Mitra Puas', 'trust-disbursed-label': 'Tersalurkan',
      'feature-badge-label': 'Nilai Lebih Kami',
      'feature-subtitle': 'Kami menghadirkan standar pelayanan premium untuk kelancaran transaksi di Tanah Suci.',
      'feature-title-1': 'Tanpa Uang Tunai', 'feature-title-2': 'Efisiensi Waktu', 'feature-title-3': 'Amanah & Terjamin',
      'feature-desc-1': 'Minimalisir risiko kehilangan uang tunai dengan transfer langsung ke rekening Muasasah atau hotel.',
      'feature-desc-2': 'Fokus pada ibadah dan bisnis Anda. Tanpa antre, tanpa birokrasi rumit.',
      'feature-desc-3': 'Reputasi 3+ tahun menjaga amanah klien. Bukti transfer resmi real-time via WhatsApp.',
      'feature-tag-1': 'Lebih Aman', 'feature-tag-2': 'Lebih Cepat', 'feature-tag-3': 'Terpercaya',
      'steps-badge': 'Alur Transaksi',
      'step-title-1': 'Konsultasi', 'step-title-2': 'Pembayaran', 'step-title-3': 'Tuntas',
      'step-desc-1': 'Hubungi tim kami via WhatsApp. Sampaikan kebutuhan nominal riyal dan tujuan transfer.',
      'step-desc-2': 'Lakukan transfer Rupiah ke rekening resmi kami dengan kurs kompetitif dan transparan.',
      'step-desc-3': 'Riyal dikirim ke penerima. Bukti transfer valid langsung kami kirimkan sebagai konfirmasi.',
      'testimonial-badge': 'Ulasan Mitra',
      'proof-badge': 'Bukti Transaksi Terverifikasi',
      'proof-heading': 'Dokumentasi Transfer Klien',
      'proof-subtitle': 'Testimoni klien dengan bukti transfer terverifikasi. Data sensitif disamarkan untuk menjaga privasi.',
      'proof-note': 'Geser untuk melihat bukti transfer lainnya.',
      'testimonial-text-1': '\u201cAlhamdulillah, transfer ke Muasasah di Madinah lancar. Saya kirim bukti transfer Rupiah jam 10 pagi, jam 10.15 pihak Muasasah sudah konfirmasi dana masuk.\u201d',
      'testimonial-text-2': '\u201cUntuk rekan-rekan travel, ini solusi handling yang praktis. Pembayaran hotel di Makkah dan Madinah langsung beres. Kursnya juga bersaing.\u201d',
      'testimonial-text-3': '\u201cKami pakai RiyalDirect untuk bayar visa dan Muasasah 3 rombongan sekaligus. Prosesnya rapi, ada bukti transfer resmi.\u201d',
      'testimonial-role-1': 'Pengusaha, Jakarta', 'testimonial-role-2': 'Owner Travel Umrah, Surabaya', 'testimonial-role-3': 'Pengelola Travel, Bandung',
      'faq-badge': 'Pusat Bantuan',
      'faq-q-1': 'Apakah transaksi ini aman dan legal?',
      'faq-a-1': 'Kami bekerja sama dengan mitra perbankan resmi di Saudi Arabia dan Indonesia. Setiap transaksi memiliki bukti transfer resmi yang bisa diverifikasi.',
      'faq-q-2': 'Berapa lama proses transfer sampai ke Muasasah/Hotel?',
      'faq-a-2': 'Rata-rata 5\u201330 menit setelah konfirmasi pembayaran Rupiah diterima. Waktu bervariasi tergantung jam operasional bank Saudi.',
      'faq-q-3': 'Berapa minimal nominal transaksi?',
      'faq-a-3': 'Tidak ada minimal transaksi. Baik untuk uang saku jamaah (mulai 100 SAR) maupun pembayaran besar.',
      'faq-q-4': 'Pecahan riyal cash apa saja yang tersedia?',
      'faq-a-4': 'Kami menyediakan pecahan 1, 5, 10, 50, 100, dan 500 SAR yang bisa diambil di Saudi Arabia (Makkah, Madinah, Jeddah).',
      'faq-q-5': 'Bagaimana cara memulai transaksi?',
      'faq-a-5': 'Hubungi salah satu admin kami via WhatsApp. Sampaikan kebutuhan Anda \u2014 nominal, tujuan transfer, dan jadwal keberangkatan.',
      'cash-desc-a': 'Tersedia berbagai pecahan untuk kebutuhan uang saku jamaah selama di Tanah Suci.',
      'cash-desc-b': 'Riyal tunai bisa diambil langsung oleh tim kami di Saudi Arabia. Tersedia di kota-kota utama.',
      'cash-button-text': 'Pesan Riyal Cash',
      'cta-subtitle': 'Hubungi tim kami untuk konsultasi kurs dan kebutuhan pembayaran di Tanah Suci.',
      'cta-button-text': 'Konsultasi via WhatsApp',
      'footer-description': 'Mitra tepercaya untuk pembayaran Muasasah, hotel, dan kebutuhan operasional Haji & Umrah.',
      'footer-service-title': 'Layanan Utama', 'footer-service-1': 'Transfer Muasasah', 'footer-service-2': 'Pembayaran Hotel', 'footer-service-3': 'Handling Kargo', 'footer-service-4': 'Kurs Riyal Terkini',
      'footer-contact-title': 'Kontak Kami', 'footer-location-text': 'Jakarta, Indonesia',
      'footer-copyright': '\u00a9 2026 RiyalDirect. Dilindungi Undang-Undang.',
      'footer-terms': 'Syarat & Ketentuan', 'footer-privacy': 'Kebijakan Privasi',
      'wa-modal-badge': 'WhatsApp Support', 'wa-modal-title': 'Pilih Admin Layanan',
      'wa-modal-subtitle-1': 'Pilih salah satu admin kami di bawah.', 'wa-modal-subtitle-2': 'Respons cepat, pilih admin yang tersedia.',
      'mobile-link-features': 'Layanan', 'mobile-link-steps': 'Alur Transaksi', 'mobile-link-testimonials': 'Testimoni', 'mobile-link-cash': 'Riyal Cash', 'mobile-link-faq': 'FAQ', 'mobile-contact-btn': 'Hubungi Kami',
      'testimonial-subtitle': 'Berikut pengalaman nyata dari mitra dan jamaah yang sudah menggunakan layanan kami.',
      'faq-subtitle': 'Jawaban untuk pertanyaan yang sering kami terima dari calon mitra dan jamaah.',
      'cash-subtitle': 'Kami menyediakan uang tunai Riyal (SAR) fisik yang bisa diambil langsung di Saudi Arabia.',
      'cash-denom-title': 'Pecahan Tersedia', 'cash-pickup-title': 'Pengambilan di Saudi',
      'cash-denom-note': 'Pecahan kecil cocok untuk belanja di sekitar Masjidil Haram & Masjid Nabawi.',
      'cash-footnote': '* Layanan riyal tunai hanya tersedia di Saudi Arabia. Untuk transfer ke rekening Muasasah/Hotel, silakan hubungi CS.',
      'cta-response-text': 'Respons cepat \u2022 Tersedia setiap hari',
      'footer-info-title': 'Informasi', 'footer-email-text': 'admin@riyaldirect.com'
    },
    html: {
      'feature-heading': 'Mengapa Memilih <span class="text-primary">RiyalDirect</span>?',
      'steps-heading': 'Alur Transfer Riyal & <span class="text-primary">Pembayaran Hotel</span>',
      'testimonial-heading': 'Dipercaya Travel & Jamaah <span class="text-primary">Seluruh Indonesia</span>',
      'faq-heading': 'Pertanyaan <span class="text-primary">Umum</span>',
      'cta-heading': 'Siap Membantu Transaksi Anda',
      'cash-heading': 'Uang Tunai Riyal <span class="text-primary">di Saudi Arabia</span>'
    }
  },
  en: {
    text: {
      'nav-contact-text': 'Contact Us',
      'nav-link-features': 'Services', 'nav-link-steps': 'Flow', 'nav-link-testimonials': 'Reviews', 'nav-link-faq': 'FAQ',
      'hero-badge-text': 'VERIFIED RIYAL TRANSFER SERVICE',
      'hero-title-line-1': 'Pay Muasasah & Hotel in Saudi,',
      'hero-title-line-2': 'Safe, Fast, and Practical',
      'hero-subtitle': 'Riyal transfer service for Muasasah and hotel payments in Saudi with a fast, transparent, and secure process.',
      'hero-cta-text': 'Start Transaction',
      'hero-security-badge': '100% Trusted',
      'calc-desktop-title': 'Rate Simulation', 'calc-desktop-live': 'LIVE',
      'calc-label-sar': 'Riyal Amount (SAR)', 'calc-label-idr': 'Estimated Rupiah (IDR)',
      'calc-rate-note': 'Indicative rate. Contact CS for final rate.',
      'calc-live-data': 'Google Rate +10',
      'quote-text': '\u201cThe pilgrims performing Hajj and Umrah are delegates of Allah. He invited them and they responded. They ask of Him and He gives them.\u201d',
      'quote-source': 'HR. Ibn Majah no. 2892 \u2014 Sahih (Al-Albani)',
      'trust-exp-label': 'Years of Experience', 'trust-partner-label': 'Satisfied Partners', 'trust-disbursed-label': 'Disbursed',
      'feature-badge-label': 'Our Value',
      'feature-subtitle': 'We deliver premium service standards for smooth transactions in the Holy Land.',
      'feature-title-1': 'Cashless Transfer', 'feature-title-2': 'Time Efficiency', 'feature-title-3': 'Trustworthy & Secure',
      'feature-desc-1': 'Minimize cash loss risk with direct transfer to Muasasah or hotel accounts safely.',
      'feature-desc-2': 'Focus on your worship and business. No queues, no complicated bureaucracy.',
      'feature-desc-3': '3+ years of proven trust. Official transfer receipts sent in real time via WhatsApp.',
      'feature-tag-1': 'Safer', 'feature-tag-2': 'Faster', 'feature-tag-3': 'Reliable',
      'steps-badge': 'Transaction Flow',
      'step-title-1': 'Consultation', 'step-title-2': 'Payment', 'step-title-3': 'Completed',
      'step-desc-1': 'Contact our team via WhatsApp. Share your riyal amount and transfer destination.',
      'step-desc-2': 'Transfer IDR to our official account with competitive and transparent rates.',
      'step-desc-3': 'Riyal is sent to the recipient with valid proof of transfer as confirmation.',
      'testimonial-badge': 'Partner Reviews',
      'proof-badge': 'Verified Testimonials',
      'proof-heading': 'Real Transfer Proof, Swipe to View',
      'proof-subtitle': 'Swipe left-right to see transfer proof and client experiences. Sensitive data is masked for privacy.',
      'proof-note': 'Swipe to see more verified transfer proofs.',
      'testimonial-text-1': '\u201cAlhamdulillah, transfer to Muasasah in Madinah went smoothly. I sent proof at 10am, by 10:15 Muasasah confirmed receipt.\u201d',
      'testimonial-text-2': '\u201cFor fellow travel agents, this is a practical handling solution. Hotel payments in Makkah and Madinah sorted instantly.\u201d',
      'testimonial-text-3': '\u201cWe used RiyalDirect to pay visa and Muasasah for 3 groups at once. Process was clean with official proof.\u201d',
      'testimonial-role-1': 'Entrepreneur, Jakarta', 'testimonial-role-2': 'Umrah Travel Owner, Surabaya', 'testimonial-role-3': 'Travel Manager, Bandung',
      'faq-badge': 'Help Center',
      'faq-q-1': 'Is this transaction safe and legal?',
      'faq-a-1': 'We partner with official banks in Saudi Arabia and Indonesia. Every transaction has verifiable official proof.',
      'faq-q-2': 'How long does the transfer take?',
      'faq-a-2': 'Typically 5\u201330 minutes after IDR payment is confirmed. Timing depends on Saudi bank operating hours.',
      'faq-q-3': 'What is the minimum transaction amount?',
      'faq-a-3': 'No minimum. From pilgrim pocket money (starting 100 SAR) to large Muasasah/Hotel payments.',
      'faq-q-4': 'What Riyal cash denominations are available?',
      'faq-a-4': 'We provide 1, 5, 10, 50, 100, and 500 SAR denominations for pickup in Saudi Arabia (Makkah, Madinah, Jeddah).',
      'faq-q-5': 'How do I start a transaction?',
      'faq-a-5': 'Contact any of our admins via WhatsApp. Share your needs \u2014 amount, destination, and departure schedule.',
      'cash-desc-a': 'Various denominations available for pilgrims\u2019 pocket money in the Holy Land.',
      'cash-desc-b': 'Cash Riyal can be picked up directly from our team in Saudi Arabia. Available in major cities.',
      'cash-button-text': 'Order Cash Riyal',
      'cta-subtitle': 'Contact our team for rate consultation and payment needs in the Holy Land.',
      'cta-button-text': 'Consult via WhatsApp',
      'footer-description': 'Trusted partner for Muasasah, Hotel, and Hajj & Umrah operations payments.',
      'footer-service-title': 'Main Services', 'footer-service-1': 'Muasasah Transfer', 'footer-service-2': 'Hotel Payment', 'footer-service-3': 'Cargo Handling', 'footer-service-4': 'Latest Riyal Rates',
      'footer-contact-title': 'Contact Us', 'footer-location-text': 'Jakarta, Indonesia',
      'footer-copyright': '\u00a9 2026 RiyalDirect. All rights reserved.',
      'footer-terms': 'Terms & Conditions', 'footer-privacy': 'Privacy Policy',
      'wa-modal-badge': 'WhatsApp Support', 'wa-modal-title': 'Choose Service Admin',
      'wa-modal-subtitle-1': 'Choose one of our admins below.', 'wa-modal-subtitle-2': 'Fast response, pick any available admin.',
      'mobile-link-features': 'Services', 'mobile-link-steps': 'Transaction Flow', 'mobile-link-testimonials': 'Reviews', 'mobile-link-cash': 'Cash Riyal', 'mobile-link-faq': 'FAQ', 'mobile-contact-btn': 'Contact Us',
      'testimonial-subtitle': 'Real experiences from partners and pilgrims who have used our services.',
      'faq-subtitle': 'Answers to questions we frequently receive from prospective partners and pilgrims.',
      'cash-subtitle': 'We provide physical Riyal (SAR) cash that can be picked up directly in Saudi Arabia.',
      'cash-denom-title': 'Available Denominations', 'cash-pickup-title': 'Pickup in Saudi',
      'cash-denom-note': 'Small denominations are ideal for shopping around Masjidil Haram & Masjid Nabawi.',
      'cash-footnote': '* Cash Riyal service is only available in Saudi Arabia. For Muasasah/Hotel bank transfers, please contact CS.',
      'cta-response-text': 'Fast response \u2022 Available every day',
      'footer-info-title': 'Information', 'footer-email-text': 'admin@riyaldirect.com'
    },
    html: {
      'feature-heading': 'Why Choose <span class="text-primary">RiyalDirect</span>?',
      'steps-heading': 'Riyal Transfer & <span class="text-primary">Hotel Payment Flow</span>',
      'testimonial-heading': 'Trusted by Travel Agents & Pilgrims <span class="text-primary">Nationwide</span>',
      'faq-heading': 'Frequently <span class="text-primary">Asked</span>',
      'cta-heading': 'Ready to Help Your Transaction',
      'cash-heading': 'Cash Riyal <span class="text-primary">in Saudi Arabia</span>'
    }
  },
  ar: {
    text: {
      'nav-contact-text': '\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627',
      'nav-link-features': '\u0627\u0644\u062e\u062f\u0645\u0627\u062a', 'nav-link-steps': '\u0627\u0644\u062e\u0637\u0648\u0627\u062a', 'nav-link-testimonials': '\u0622\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621', 'nav-link-faq': '\u0627\u0644\u0623\u0633\u0626\u0644\u0629',
      'hero-badge-text': '\u0623\u0648\u0644 \u0627\u0628\u062a\u0643\u0627\u0631 \u0641\u064a \u0625\u0646\u062f\u0648\u0646\u064a\u0633\u064a\u0627',
      'hero-title-line-1': '\u0627\u062f\u0641\u0639 \u0631\u0633\u0648\u0645 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0648\u0627\u0644\u0641\u0646\u062f\u0642 \u0641\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629\u060c',
      'hero-title-line-2': '\u0628\u0623\u0645\u0627\u0646 \u0648\u0633\u0631\u0639\u0629 \u0648\u0633\u0647\u0648\u0644\u0629',
      'hero-subtitle': '\u062d\u0644 \u062d\u062f\u064a\u062b \u0644\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0631\u064a\u0627\u0644 \u062f\u0648\u0646 \u0645\u062e\u0627\u0637\u0631 \u062d\u0645\u0644 \u0627\u0644\u0646\u0642\u062f. \u0645\u0648\u062b\u0648\u0642 \u0645\u0646 500+ \u0634\u0631\u064a\u0643.',
      'hero-cta-text': '\u0627\u0628\u062f\u0623 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629',
      'hero-security-badge': '\u0623\u0645\u0627\u0646 100%',
      'calc-desktop-title': '\u0645\u062d\u0627\u0643\u0627\u0629 \u0627\u0644\u0633\u0639\u0631', 'calc-desktop-live': '\u0645\u0628\u0627\u0634\u0631',
      'calc-label-sar': '\u0645\u0628\u0644\u063a \u0627\u0644\u0631\u064a\u0627\u0644 (SAR)', 'calc-label-idr': '\u062a\u0642\u062f\u064a\u0631 \u0627\u0644\u0631\u0648\u0628\u064a\u0629 (IDR)',
      'calc-rate-note': '\u0633\u0639\u0631 \u0625\u0631\u0634\u0627\u062f\u064a. \u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u062e\u062f\u0645\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0644\u0644\u0633\u0639\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064a.',
      'calc-live-data': '\u0633\u0639\u0631 Google +10',
      'quote-text': '\u201c\u0627\u0644\u062d\u064f\u062c\u0651\u064e\u0627\u062c\u064f \u0648\u064e\u0627\u0644\u0639\u064f\u0645\u0651\u064e\u0627\u0631\u064f \u0648\u064e\u0641\u0652\u062f\u064f \u0627\u0644\u0644\u0647\u0650\u060c \u062f\u064e\u0639\u064e\u0627\u0647\u064f\u0645\u0652 \u0641\u064e\u0623\u064e\u062c\u064e\u0627\u0628\u064f\u0648\u0647\u064f\u060c \u0648\u064e\u0633\u064e\u0623\u064e\u0644\u064f\u0648\u0647\u064f \u0641\u064e\u0623\u064e\u0639\u0652\u0637\u064e\u0627\u0647\u064f\u0645\u0652\u201d',
      'quote-source': '\u0631\u0648\u0627\u0647 \u0627\u0628\u0646 \u0645\u0627\u062c\u0647 \u0631\u0642\u0645 2892 \u2014 \u0635\u062d\u064a\u062d (\u0627\u0644\u0623\u0644\u0628\u0627\u0646\u064a)',
      'trust-exp-label': '\u0633\u0646\u0648\u0627\u062a \u0627\u0644\u062e\u0628\u0631\u0629', 'trust-partner-label': '\u0634\u0631\u0643\u0627\u0621 \u0631\u0627\u0636\u0648\u0646', 'trust-disbursed-label': '\u062a\u0645 \u062a\u062d\u0648\u064a\u0644\u0647',
      'feature-badge-label': '\u0642\u064a\u0645\u062a\u0646\u0627',
      'feature-subtitle': '\u0646\u0642\u062f\u0645 \u0645\u0639\u0627\u064a\u064a\u0631 \u062e\u062f\u0645\u0629 \u0645\u062a\u0645\u064a\u0632\u0629 \u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062a \u0633\u0644\u0633\u0629 \u0641\u064a \u0627\u0644\u0623\u0631\u0636 \u0627\u0644\u0645\u0642\u062f\u0633\u0629.',
      'feature-title-1': '\u0628\u062f\u0648\u0646 \u0646\u0642\u062f', 'feature-title-2': '\u0643\u0641\u0627\u0621\u0629 \u0627\u0644\u0648\u0642\u062a', 'feature-title-3': '\u0623\u0645\u0627\u0646\u0629 \u0648\u0636\u0645\u0627\u0646',
      'feature-desc-1': '\u062a\u0642\u0644\u064a\u0644 \u0645\u062e\u0627\u0637\u0631 \u0641\u0642\u062f\u0627\u0646 \u0627\u0644\u0646\u0642\u062f \u0628\u0627\u0644\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0645\u0628\u0627\u0634\u0631 \u0625\u0644\u0649 \u062d\u0633\u0627\u0628 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0623\u0648 \u0627\u0644\u0641\u0646\u062f\u0642.',
      'feature-desc-2': '\u0631\u0643\u0632 \u0639\u0644\u0649 \u0639\u0628\u0627\u062f\u062a\u0643 \u0648\u0639\u0645\u0644\u0643. \u0628\u062f\u0648\u0646 \u0637\u0648\u0627\u0628\u064a\u0631 \u0648\u0628\u062f\u0648\u0646 \u0628\u064a\u0631\u0648\u0642\u0631\u0627\u0637\u064a\u0629.',
      'feature-desc-3': '\u0633\u0645\u0639\u0629 3+ \u0633\u0646\u0648\u0627\u062a \u0645\u0646 \u0627\u0644\u0623\u0645\u0627\u0646\u0629. \u0625\u064a\u0635\u0627\u0644\u0627\u062a \u0631\u0633\u0645\u064a\u0629 \u0641\u0648\u0631\u064a\u0629 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628.',
      'feature-tag-1': '\u0623\u0643\u062b\u0631 \u0623\u0645\u0627\u0646\u0627\u064b', 'feature-tag-2': '\u0623\u0633\u0631\u0639', 'feature-tag-3': '\u0645\u0648\u062b\u0648\u0642',
      'steps-badge': '\u062e\u0637\u0648\u0627\u062a \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629',
      'step-title-1': '\u0627\u0633\u062a\u0634\u0627\u0631\u0629', 'step-title-2': '\u0627\u0644\u062f\u0641\u0639', 'step-title-3': '\u0645\u0643\u062a\u0645\u0644',
      'step-desc-1': '\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0641\u0631\u064a\u0642\u0646\u0627 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628. \u0623\u062e\u0628\u0631\u0646\u0627 \u0628\u0627\u0644\u0645\u0628\u0644\u063a \u0648\u0648\u062c\u0647\u0629 \u0627\u0644\u062a\u062d\u0648\u064a\u0644.',
      'step-desc-2': '\u062d\u0648\u0651\u0644 \u0627\u0644\u0631\u0648\u0628\u064a\u0629 \u0625\u0644\u0649 \u062d\u0633\u0627\u0628\u0646\u0627 \u0627\u0644\u0631\u0633\u0645\u064a \u0628\u0623\u0633\u0639\u0627\u0631 \u0645\u0646\u0627\u0641\u0633\u0629 \u0648\u0634\u0641\u0627\u0641\u0629.',
      'step-desc-3': '\u064a\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u064a\u0627\u0644 \u0644\u0644\u0645\u0633\u062a\u0641\u064a\u062f \u0645\u0639 \u0625\u062b\u0628\u0627\u062a \u062a\u062d\u0648\u064a\u0644 \u0631\u0633\u0645\u064a.',
      'testimonial-badge': '\u0622\u0631\u0627\u0621 \u0627\u0644\u0634\u0631\u0643\u0627\u0621',
      'proof-badge': '\u062a\u0648\u062b\u064a\u0642 \u0627\u0644\u0639\u0645\u0644\u0627\u0621',
      'proof-heading': '\u0625\u062b\u0628\u0627\u062a \u062d\u0648\u0627\u0644\u0629 \u062d\u0642\u064a\u0642\u064a\u060c \u0627\u0633\u062d\u0628 \u0644\u0644\u0645\u0634\u0627\u0647\u062f\u0629',
      'proof-subtitle': '\u0627\u0633\u062d\u0628 \u064a\u0645\u064a\u0646\u0627\u064b \u0648\u064a\u0633\u0627\u0631\u0627\u064b \u0644\u0645\u0634\u0627\u0647\u062f\u0629 \u0625\u062b\u0628\u0627\u062a\u0627\u062a \u0627\u0644\u062d\u0648\u0627\u0644\u0629 \u0648\u062a\u062c\u0627\u0631\u0628 \u0627\u0644\u0639\u0645\u0644\u0627\u0621. \u062a\u0645 \u0625\u062e\u0641\u0627\u0621 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062d\u0633\u0627\u0633\u0629 \u0644\u062e\u0635\u0648\u0635\u064a\u0629.',
      'proof-note': '\u062a\u0644\u0645\u064a\u062d: \u0627\u0633\u062d\u0628 \u0639\u0644\u0649 \u0627\u0644\u062c\u0648\u0627\u0644 \u0623\u0648 \u0627\u0633\u062a\u062e\u062f\u0645 \u0623\u0632\u0631\u0627\u0631 \u0627\u0644\u0623\u0633\u0647\u0645 \u0639\u0644\u0649 \u0633\u0637\u062d \u0627\u0644\u0645\u0643\u062a\u0628.',
      'testimonial-text-1': '\u201c\u0627\u0644\u062d\u0645\u062f \u0644\u0644\u0647\u060c \u0627\u0644\u062a\u062d\u0648\u064a\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0641\u064a \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0643\u0627\u0646 \u0633\u0644\u0633\u0627\u064b. \u0623\u0631\u0633\u0644\u062a \u0625\u062b\u0628\u0627\u062a \u0627\u0644\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0633\u0627\u0639\u0629 10 \u0635\u0628\u0627\u062d\u0627\u064b\u060c \u0648\u0641\u064a 10:15 \u0623\u0643\u062f\u062a \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645.\u201d',
      'testimonial-text-2': '\u201c\u0644\u0632\u0645\u0644\u0627\u0621 \u0627\u0644\u0633\u064a\u0627\u062d\u0629\u060c \u0647\u0630\u0627 \u062d\u0644 \u0639\u0645\u0644\u064a. \u0645\u062f\u0641\u0648\u0639\u0627\u062a \u0627\u0644\u0641\u0646\u0627\u062f\u0642 \u0641\u064a \u0645\u0643\u0629 \u0648\u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u062a\u062a\u0645 \u0641\u0648\u0631\u0627\u064b.\u201d',
      'testimonial-text-3': '\u201c\u0627\u0633\u062a\u062e\u062f\u0645\u0646\u0627 RiyalDirect \u0644\u062f\u0641\u0639 \u0627\u0644\u062a\u0623\u0634\u064a\u0631\u0627\u062a \u0648\u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0644\u0640 3 \u0645\u062c\u0645\u0648\u0639\u0627\u062a. \u0627\u0644\u0639\u0645\u0644\u064a\u0629 \u0645\u0646\u0638\u0645\u0629 \u0645\u0639 \u0625\u062b\u0628\u0627\u062a \u0631\u0633\u0645\u064a.\u201d',
      'testimonial-role-1': '\u0631\u062c\u0644 \u0623\u0639\u0645\u0627\u0644\u060c \u062c\u0627\u0643\u0631\u062a\u0627', 'testimonial-role-2': '\u0635\u0627\u062d\u0628 \u0634\u0631\u0643\u0629 \u0639\u0645\u0631\u0629\u060c \u0633\u0648\u0631\u0627\u0628\u0627\u064a\u0627', 'testimonial-role-3': '\u0645\u062f\u064a\u0631 \u0633\u064a\u0627\u062d\u0629\u060c \u0628\u0627\u0646\u062f\u0648\u0646\u063a',
      'faq-badge': '\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629',
      'faq-q-1': '\u0647\u0644 \u0647\u0630\u0647 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629 \u0622\u0645\u0646\u0629 \u0648\u0642\u0627\u0646\u0648\u0646\u064a\u0629\u061f',
      'faq-a-1': '\u0646\u0639\u0645\u0644 \u0645\u0639 \u0628\u0646\u0648\u0643 \u0631\u0633\u0645\u064a\u0629 \u0641\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629 \u0648\u0625\u0646\u062f\u0648\u0646\u064a\u0633\u064a\u0627. \u0643\u0644 \u0645\u0639\u0627\u0645\u0644\u0629 \u0644\u0647\u0627 \u0625\u062b\u0628\u0627\u062a \u0631\u0633\u0645\u064a \u0642\u0627\u0628\u0644 \u0644\u0644\u062a\u062d\u0642\u0642.',
      'faq-q-2': '\u0643\u0645 \u064a\u0633\u062a\u063a\u0631\u0642 \u0627\u0644\u062a\u062d\u0648\u064a\u0644\u061f',
      'faq-a-2': '\u0639\u0627\u062f\u0629 5\u201330 \u062f\u0642\u064a\u0642\u0629 \u0628\u0639\u062f \u062a\u0623\u0643\u064a\u062f \u0627\u0644\u062f\u0641\u0639. \u064a\u0639\u062a\u0645\u062f \u0639\u0644\u0649 \u0633\u0627\u0639\u0627\u062a \u0639\u0645\u0644 \u0627\u0644\u0628\u0646\u0648\u0643 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629.',
      'faq-q-3': '\u0645\u0627 \u0647\u0648 \u0627\u0644\u062d\u062f \u0627\u0644\u0623\u062f\u0646\u0649 \u0644\u0644\u0645\u0639\u0627\u0645\u0644\u0629\u061f',
      'faq-a-3': '\u0644\u0627 \u064a\u0648\u062c\u062f \u062d\u062f \u0623\u062f\u0646\u0649. \u0633\u0648\u0627\u0621 \u0644\u0645\u0635\u0631\u0648\u0641 \u0627\u0644\u062d\u0627\u062c (\u0627\u0628\u062a\u062f\u0627\u0621\u064b \u0645\u0646 100 \u0631\u064a\u0627\u0644) \u0623\u0648 \u0645\u062f\u0641\u0648\u0639\u0627\u062a \u0643\u0628\u064a\u0631\u0629.',
      'faq-q-4': '\u0645\u0627 \u0641\u0626\u0627\u062a \u0627\u0644\u0631\u064a\u0627\u0644 \u0627\u0644\u0646\u0642\u062f\u064a \u0627\u0644\u0645\u062a\u0627\u062d\u0629\u061f',
      'faq-a-4': '\u0646\u0648\u0641\u0631 \u0641\u0626\u0627\u062a 1\u060c 5\u060c 10\u060c 50\u060c 100\u060c \u0648500 \u0631\u064a\u0627\u0644 \u0644\u0644\u0627\u0633\u062a\u0644\u0627\u0645 \u0641\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629.',
      'faq-q-5': '\u0643\u064a\u0641 \u0623\u0628\u062f\u0623 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629\u061f',
      'faq-a-5': '\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0623\u062d\u062f \u0645\u0634\u0631\u0641\u064a\u0646\u0627 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628. \u0623\u062e\u0628\u0631\u0646\u0627 \u0628\u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a\u0643.',
      'cash-desc-a': '\u0641\u0626\u0627\u062a \u0645\u062a\u0646\u0648\u0639\u0629 \u0645\u062a\u0627\u062d\u0629 \u0644\u0645\u0635\u0631\u0648\u0641 \u0627\u0644\u062d\u062c\u0627\u062c \u0641\u064a \u0627\u0644\u0623\u0631\u0636 \u0627\u0644\u0645\u0642\u062f\u0633\u0629.',
      'cash-desc-b': '\u064a\u0645\u0643\u0646 \u0627\u0633\u062a\u0644\u0627\u0645 \u0627\u0644\u0631\u064a\u0627\u0644 \u0627\u0644\u0646\u0642\u062f\u064a \u0645\u0628\u0627\u0634\u0631\u0629 \u0645\u0646 \u0641\u0631\u064a\u0642\u0646\u0627 \u0641\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629.',
      'cash-button-text': '\u0627\u0637\u0644\u0628 \u0631\u064a\u0627\u0644 \u0646\u0642\u062f\u064a',
      'cta-subtitle': '\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0644\u0627\u0633\u062a\u0634\u0627\u0631\u0629 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0648\u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a \u0627\u0644\u062f\u0641\u0639. \u0645\u062c\u0627\u0646\u0627\u064b \u0648\u0628\u062f\u0648\u0646 \u0627\u0644\u062a\u0632\u0627\u0645.',
      'cta-button-text': '\u0627\u0633\u062a\u0634\u0627\u0631\u0629 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628',
      'footer-description': '\u0634\u0631\u064a\u0643 \u0645\u0648\u062b\u0648\u0642 \u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0648\u0627\u0644\u0641\u0646\u062f\u0642 \u0648\u0639\u0645\u0644\u064a\u0627\u062a \u0627\u0644\u062d\u062c \u0648\u0627\u0644\u0639\u0645\u0631\u0629.',
      'footer-service-title': '\u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629', 'footer-service-1': '\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0645\u0624\u0633\u0633\u0629', 'footer-service-2': '\u062f\u0641\u0639 \u0627\u0644\u0641\u0646\u062f\u0642', 'footer-service-3': '\u062e\u062f\u0645\u0629 \u0627\u0644\u0634\u062d\u0646', 'footer-service-4': '\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0631\u064a\u0627\u0644',
      'footer-contact-title': '\u0627\u062a\u0635\u0644 \u0628\u0646\u0627', 'footer-location-text': '\u062c\u0627\u0643\u0631\u062a\u0627\u060c \u0625\u0646\u062f\u0648\u0646\u064a\u0633\u064a\u0627',
      'footer-copyright': '\u00a9 2026 RiyalDirect. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629.',
      'footer-terms': '\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062d\u0643\u0627\u0645', 'footer-privacy': '\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629',
      'wa-modal-badge': '\u062f\u0639\u0645 \u0648\u0627\u062a\u0633\u0627\u0628', 'wa-modal-title': '\u0627\u062e\u062a\u0631 \u0645\u0634\u0631\u0641 \u0627\u0644\u062e\u062f\u0645\u0629',
      'wa-modal-subtitle-1': '\u0627\u062e\u062a\u0631 \u0623\u062d\u062f \u0645\u0634\u0631\u0641\u064a\u0646\u0627 \u0623\u062f\u0646\u0627\u0647.', 'wa-modal-subtitle-2': '\u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u0633\u0631\u064a\u0639\u0629.',
      'mobile-link-features': '\u0627\u0644\u062e\u062f\u0645\u0627\u062a', 'mobile-link-steps': '\u062e\u0637\u0648\u0627\u062a \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629', 'mobile-link-testimonials': '\u0622\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621', 'mobile-link-cash': '\u0631\u064a\u0627\u0644 \u0646\u0642\u062f\u064a', 'mobile-link-faq': '\u0627\u0644\u0623\u0633\u0626\u0644\u0629', 'mobile-contact-btn': '\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627',
      'testimonial-subtitle': '\u062a\u062c\u0627\u0631\u0628 \u062d\u0642\u064a\u0642\u064a\u0629 \u0645\u0646 \u0634\u0631\u0643\u0627\u0626\u0646\u0627 \u0648\u0627\u0644\u062d\u062c\u0627\u062c \u0627\u0644\u0630\u064a\u0646 \u0627\u0633\u062a\u062e\u062f\u0645\u0648\u0627 \u062e\u062f\u0645\u0627\u062a\u0646\u0627.',
      'faq-subtitle': '\u0625\u062c\u0627\u0628\u0627\u062a \u0639\u0644\u0649 \u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629 \u0645\u0646 \u0627\u0644\u0634\u0631\u0643\u0627\u0621 \u0648\u0627\u0644\u062d\u062c\u0627\u062c \u0627\u0644\u0645\u062d\u062a\u0645\u0644\u064a\u0646.',
      'cash-subtitle': '\u0646\u0648\u0641\u0631 \u0631\u064a\u0627\u0644 \u0646\u0642\u062f\u064a (SAR) \u064a\u0645\u0643\u0646 \u0627\u0633\u062a\u0644\u0627\u0645\u0647 \u0645\u0628\u0627\u0634\u0631\u0629 \u0641\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629.',
      'cash-denom-title': '\u0627\u0644\u0641\u0626\u0627\u062a \u0627\u0644\u0645\u062a\u0627\u062d\u0629', 'cash-pickup-title': '\u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645 \u0641\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629',
      'cash-denom-note': '\u0627\u0644\u0641\u0626\u0627\u062a \u0627\u0644\u0635\u063a\u064a\u0631\u0629 \u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0644\u062a\u0633\u0648\u0642 \u062d\u0648\u0644 \u0627\u0644\u0645\u0633\u062c\u062f \u0627\u0644\u062d\u0631\u0627\u0645 \u0648\u0627\u0644\u0645\u0633\u062c\u062f \u0627\u0644\u0646\u0628\u0648\u064a.',
      'cash-footnote': '* \u062e\u062f\u0645\u0629 \u0627\u0644\u0631\u064a\u0627\u0644 \u0627\u0644\u0646\u0642\u062f\u064a \u0645\u062a\u0627\u062d\u0629 \u0641\u0642\u0637 \u0641\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629. \u0644\u0644\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0628\u0646\u0643\u064a\u060c \u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u062e\u062f\u0645\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621.',
      'cta-response-text': '\u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u0633\u0631\u064a\u0639\u0629 \u2022 \u0645\u062a\u0627\u062d \u0643\u0644 \u064a\u0648\u0645',
      'footer-info-title': '\u0645\u0639\u0644\u0648\u0645\u0627\u062a', 'footer-email-text': 'admin@riyaldirect.com'
    },
    html: {
      'feature-heading': '\u0644\u0645\u0627\u0630\u0627 \u062a\u062e\u062a\u0627\u0631 <span class="text-primary">RiyalDirect</span>\u061f',
      'steps-heading': '\u062e\u0637\u0648\u0627\u062a \u0627\u0644\u062a\u062d\u0648\u064a\u0644 \u0648 <span class="text-primary">\u062f\u0641\u0639 \u0627\u0644\u0641\u0646\u062f\u0642</span>',
      'testimonial-heading': '\u0645\u0648\u062b\u0648\u0642 \u0645\u0646 \u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0633\u064a\u0627\u062d\u0629 \u0648\u0627\u0644\u062d\u062c\u0627\u062c <span class="text-primary">\u0641\u064a \u0643\u0644 \u0645\u0643\u0627\u0646</span>',
      'faq-heading': '\u0627\u0644\u0623\u0633\u0626\u0644\u0629 <span class="text-primary">\u0627\u0644\u0634\u0627\u0626\u0639\u0629</span>',
      'cta-heading': '\u062c\u0627\u0647\u0632\u0648\u0646 \u0644\u0645\u0633\u0627\u0639\u062f\u0629 \u0645\u0639\u0627\u0645\u0644\u062a\u0643',
      'cash-heading': '\u0631\u064a\u0627\u0644 \u0646\u0642\u062f\u064a <span class="text-primary">\u0641\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629</span>'
    }
  },
  ms: {
    text: {
      'nav-contact-text': 'Hubungi Kami',
      'nav-link-features': 'Perkhidmatan', 'nav-link-steps': 'Aliran', 'nav-link-testimonials': 'Ulasan', 'nav-link-faq': 'FAQ',
      'hero-badge-text': 'PERKHIDMATAN PEMINDAHAN RIYAL DISAHKAN',
      'hero-title-line-1': 'Transfer Riyal untuk Muasasah & Hotel di Saudi,',
      'hero-title-line-2': 'Selamat, Pantas, dan Praktikal',
      'hero-subtitle': 'Perkhidmatan pemindahan Riyal untuk keperluan Muasasah dan hotel di Saudi dengan proses pantas, telus, dan selamat.',
      'hero-cta-text': 'Mula Transaksi',
      'hero-security-badge': '100% Amanah',
      'calc-desktop-title': 'Simulasi Kadar', 'calc-desktop-live': 'LIVE',
      'calc-label-sar': 'Jumlah Riyal (SAR)', 'calc-label-idr': 'Anggaran Rupiah (IDR)',
      'calc-rate-note': 'Kadar indikatif. Hubungi CS untuk kadar akhir.',
      'calc-live-data': 'Kadar Google +10',
      'quote-text': '\u201cOrang yang mengerjakan haji dan umrah adalah utusan Allah. Allah memanggil mereka lalu mereka memenuhi panggilan-Nya. Mereka meminta kepada-Nya lalu Allah memberi mereka.\u201d',
      'quote-source': 'HR. Ibn Majah no. 2892 \u2014 Sahih (Al-Albani)',
      'trust-exp-label': 'Tahun Pengalaman', 'trust-partner-label': 'Rakan Puas', 'trust-disbursed-label': 'Disalurkan',
      'feature-badge-label': 'Nilai Kami',
      'feature-subtitle': 'Kami menyediakan standard perkhidmatan premium untuk transaksi lancar di Tanah Suci.',
      'feature-title-1': 'Tanpa Tunai', 'feature-title-2': 'Kecekapan Masa', 'feature-title-3': 'Amanah & Terjamin',
      'feature-desc-1': 'Kurangkan risiko kehilangan wang tunai dengan pemindahan terus ke akaun Muasasah atau hotel.',
      'feature-desc-2': 'Fokus pada ibadah dan perniagaan anda. Tanpa beratur, tanpa birokrasi rumit.',
      'feature-desc-3': 'Reputasi 3+ tahun menjaga amanah. Resit pemindahan rasmi dihantar secara langsung ke WhatsApp.',
      'feature-tag-1': 'Lebih Selamat', 'feature-tag-2': 'Lebih Pantas', 'feature-tag-3': 'Dipercayai',
      'steps-badge': 'Aliran Transaksi',
      'step-title-1': 'Konsultasi', 'step-title-2': 'Pembayaran', 'step-title-3': 'Selesai',
      'step-desc-1': 'Hubungi pasukan kami melalui WhatsApp. Maklumkan jumlah riyal dan destinasi pemindahan.',
      'step-desc-2': 'Pindahkan Rupiah ke akaun rasmi kami dengan kadar yang kompetitif dan telus.',
      'step-desc-3': 'Riyal dihantar kepada penerima. Bukti pemindahan sah dihantar sebagai pengesahan.',
      'testimonial-badge': 'Ulasan Rakan',
      'proof-badge': 'Testimoni Disahkan',
      'proof-heading': 'Bukti Pemindahan Asli, Boleh Swipe',
      'proof-subtitle': 'Geser kiri-kanan untuk lihat bukti pemindahan dan pengalaman pelanggan. Data sensitif disamarkan demi privasi.',
      'proof-note': 'Geser untuk melihat lebih banyak bukti pemindahan.',
      'testimonial-text-1': '\u201cAlhamdulillah, pemindahan ke Muasasah di Madinah lancar. Saya hantar bukti pemindahan pukul 10 pagi, pukul 10.15 Muasasah sudah sahkan.\u201d',
      'testimonial-text-2': '\u201cUntuk rakan-rakan travel, ini penyelesaian handling yang praktikal. Pembayaran hotel di Makkah dan Madinah terus selesai.\u201d',
      'testimonial-text-3': '\u201cKami guna RiyalDirect untuk bayar visa dan Muasasah 3 kumpulan sekali gus. Proses kemas, ada bukti rasmi.\u201d',
      'testimonial-role-1': 'Usahawan, Jakarta', 'testimonial-role-2': 'Pemilik Travel Umrah, Surabaya', 'testimonial-role-3': 'Pengurus Travel, Bandung',
      'faq-badge': 'Pusat Bantuan',
      'faq-q-1': 'Adakah transaksi ini selamat dan sah?',
      'faq-a-1': 'Kami bekerjasama dengan bank rasmi di Saudi dan Indonesia. Setiap transaksi ada bukti rasmi.',
      'faq-q-2': 'Berapa lama pemindahan sampai ke Muasasah/Hotel?',
      'faq-a-2': 'Purata 5\u201330 minit selepas pengesahan pembayaran Rupiah.',
      'faq-q-3': 'Berapa minimum transaksi?',
      'faq-a-3': 'Tiada minimum. Dari wang saku jemaah (bermula 100 SAR) hingga pembayaran besar.',
      'faq-q-4': 'Apakah denominasi riyal tunai yang tersedia?',
      'faq-a-4': 'Kami sediakan denominasi 1, 5, 10, 50, 100, dan 500 SAR untuk diambil di Saudi.',
      'faq-q-5': 'Bagaimana cara memulakan transaksi?',
      'faq-a-5': 'Hubungi mana-mana admin kami melalui WhatsApp. Maklumkan keperluan anda.',
      'cash-desc-a': 'Pelbagai denominasi tersedia untuk wang saku jemaah di Tanah Suci.',
      'cash-desc-b': 'Riyal tunai boleh diambil terus dari pasukan kami di Saudi. Tersedia di bandar utama.',
      'cash-button-text': 'Pesan Riyal Tunai',
      'cta-subtitle': 'Hubungi pasukan kami untuk konsultasi kadar dan keperluan pembayaran di Tanah Suci.',
      'cta-button-text': 'Konsultasi via WhatsApp',
      'footer-description': 'Rakan dipercayai untuk pembayaran Muasasah, Hotel, dan operasi Haji & Umrah.',
      'footer-service-title': 'Perkhidmatan Utama', 'footer-service-1': 'Pemindahan Muasasah', 'footer-service-2': 'Pembayaran Hotel', 'footer-service-3': 'Pengendalian Kargo', 'footer-service-4': 'Kadar Riyal Terkini',
      'footer-contact-title': 'Hubungi Kami', 'footer-location-text': 'Jakarta, Indonesia',
      'footer-copyright': '\u00a9 2026 RiyalDirect. Hak cipta terpelihara.',
      'footer-terms': 'Terma & Syarat', 'footer-privacy': 'Dasar Privasi',
      'wa-modal-badge': 'Sokongan WhatsApp', 'wa-modal-title': 'Pilih Admin Perkhidmatan',
      'wa-modal-subtitle-1': 'Pilih salah satu admin kami di bawah.', 'wa-modal-subtitle-2': 'Respons pantas, pilih admin yang tersedia.',
      'mobile-link-features': 'Perkhidmatan', 'mobile-link-steps': 'Aliran Transaksi', 'mobile-link-testimonials': 'Ulasan', 'mobile-link-cash': 'Riyal Tunai', 'mobile-link-faq': 'FAQ', 'mobile-contact-btn': 'Hubungi Kami',
      'testimonial-subtitle': 'Pengalaman sebenar dari rakan dan jemaah yang telah menggunakan perkhidmatan kami.',
      'faq-subtitle': 'Jawapan untuk soalan yang sering kami terima daripada bakal rakan dan jemaah.',
      'cash-subtitle': 'Kami menyediakan wang tunai Riyal (SAR) fizikal yang boleh diambil terus di Saudi Arabia.',
      'cash-denom-title': 'Denominasi Tersedia', 'cash-pickup-title': 'Pengambilan di Saudi',
      'cash-denom-note': 'Denominasi kecil sesuai untuk membeli-belah di sekitar Masjidil Haram & Masjid Nabawi.',
      'cash-footnote': '* Perkhidmatan riyal tunai hanya tersedia di Saudi Arabia. Untuk pemindahan bank ke Muasasah/Hotel, sila hubungi CS.',
      'cta-response-text': 'Respons pantas \u2022 Tersedia setiap hari',
      'footer-info-title': 'Maklumat', 'footer-email-text': 'admin@riyaldirect.com'
    },
    html: {
      'feature-heading': 'Mengapa Pilih <span class="text-primary">RiyalDirect</span>?',
      'steps-heading': 'Aliran Pemindahan Riyal & <span class="text-primary">Pembayaran Hotel</span>',
      'testimonial-heading': 'Dipercayai Travel & Jemaah <span class="text-primary">Seluruh Indonesia</span>',
      'faq-heading': 'Soalan <span class="text-primary">Lazim</span>',
      'cta-heading': 'Sedia Membantu Transaksi Anda',
      'cash-heading': 'Riyal Tunai <span class="text-primary">di Saudi Arabia</span>'
    }
  }
};
const waAutoMessages = {
  general: {
    id: 'Assalamualaikum Admin, saya ingin bertanya tentang transfer riyal.',
    en: 'Hello Admin, I want to ask about riyal transfer.',
    ar: '\u0627\u0644\u0633\u0644\u0627\u0645 \u0639\u0644\u064a\u0643\u0645\u060c \u0623\u0631\u064a\u062f \u0627\u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631 \u0639\u0646 \u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0631\u064a\u0627\u0644',
    ms: 'Assalamualaikum Admin, saya ingin bertanya tentang transfer riyal.'
  },
  cash: {
    id: 'Assalamualaikum Admin, saya ingin beli Riyal Cash dan tanya info pembayaran Hotel/Visa secara Tunai.',
    en: 'Hello Admin, I need Riyal cash and information about cash payment for Hotel/Visa.',
    ar: '\u0627\u0644\u0633\u0644\u0627\u0645 \u0639\u0644\u064a\u0643\u0645\u060c \u0623\u0631\u064a\u062f \u0634\u0631\u0627\u0621 \u0627\u0644\u0631\u064a\u0627\u0644 \u0646\u0642\u062f\u0627\u064b',
    ms: 'Assalamualaikum Admin, saya ingin beli Riyal Cash.'
  }
};

function updateWALinks(lang) {
  const ctx = waAutoMessages[currentWAMessageContext] || waAutoMessages.general;
  const msg = ctx[lang] || ctx.id;
  document.querySelectorAll('a[data-wa-number]').forEach(link => {
    const num = link.getAttribute('data-wa-number');
    if (num) link.href = `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
  });
}

function applyLanguage(lang) {
  const sel = translations[lang] ? lang : 'id';
  const dict = translations[sel];
  const isAr = sel === 'ar';
  document.documentElement.lang = sel;
  document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');
  document.body.setAttribute('dir', isAr ? 'rtl' : 'ltr');
  document.body.classList.toggle('lang-ar', isAr);
  Object.entries(dict.text || {}).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });
  Object.entries(dict.html || {}).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = val;
  });
  updateWALinks(sel);
  localStorage.setItem('site_lang', sel);
}

function initLanguageSwitcher() {
  const select = document.getElementById('language-switcher');
  if (!select) return;
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  const savedLang = localStorage.getItem('site_lang');
  const initial = translations[urlLang] ? urlLang : (translations[savedLang] ? savedLang : 'id');
  select.value = initial;
  applyLanguage(initial);
  select.addEventListener('change', e => {
    const newLang = e.target.value;
    applyLanguage(newLang);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', newLang);
    window.history.replaceState({}, '', url);
  });
}

// ===== CALCULATOR =====
document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();

  // Hamburger menu
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-menu-close');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => mobileMenu.classList.add('active'));
  }
  if (mobileClose && mobileMenu) {
    mobileClose.addEventListener('click', () => mobileMenu.classList.remove('active'));
  }

  const inputSar = document.getElementById('input-sar') || document.getElementById('input-idr');
  const outputIdr = document.getElementById('output-idr') || document.getElementById('output-sar');
  const RATE_ADJUSTMENT = 10;
  let currentRate = 4250 + RATE_ADJUSTMENT; // IDR per 1 SAR

  const formatIDR = num => new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(num);

  const calculate = () => {
    const amount = parseFloat(inputSar?.value);
    if (outputIdr) outputIdr.value = !isNaN(amount) && amount > 0 ? formatIDR(amount * currentRate) : formatIDR(0);
    const outputMobile = document.getElementById('output-idr-mobile') || document.getElementById('output-sar-mobile');
    if (outputMobile && outputIdr) outputMobile.value = outputIdr.value;
  };

  const googleRateUrl = 'https://api.codetabs.com/v1/proxy?quest=https://www.google.com/finance/quote/SAR-IDR';
  const fallbackRateUrl = 'https://api.exchangerate-api.com/v4/latest/SAR';
  const parseGoogleRate = html => {
    const match = html?.match(/data-last-price="([0-9.]+)"/i);
    return match ? parseFloat(match[1]) : NaN;
  };

  fetch(googleRateUrl)
    .then(r => r.text())
    .then(html => {
      const googleRate = parseGoogleRate(html);
      if (!isNaN(googleRate) && googleRate > 0) {
        currentRate = googleRate + RATE_ADJUSTMENT;
        return;
      }
      throw new Error('Google rate parse failed');
    })
    .catch(() => fetch(fallbackRateUrl)
      .then(r => r.json())
      .then(data => {
        if (data?.rates?.IDR) currentRate = data.rates.IDR + RATE_ADJUSTMENT;
      })
      .catch(() => { }))
    .finally(() => calculate());

  if (inputSar) inputSar.addEventListener('input', calculate);

  const inputMobile = document.getElementById('input-sar-mobile') || document.getElementById('input-idr-mobile');
  if (inputMobile) {
    inputMobile.addEventListener('input', function () {
      if (inputSar) inputSar.value = this.value;
      calculate();
    });
    if (inputSar) inputSar.addEventListener('input', function () {
      inputMobile.value = this.value;
    });
  }
  calculate();

  const proofCarousel = document.getElementById('proof-carousel');
  const proofPrev = document.getElementById('proof-prev');
  const proofNext = document.getElementById('proof-next');
  if (proofCarousel && proofPrev && proofNext) {
    const getSlideStep = () => {
      const first = proofCarousel.querySelector('.proof-card');
      if (!first) return 320;
      const gap = parseFloat(getComputedStyle(proofCarousel).columnGap || getComputedStyle(proofCarousel).gap || '16');
      return first.getBoundingClientRect().width + gap;
    };
    proofPrev.addEventListener('click', () => {
      proofCarousel.scrollBy({ left: -getSlideStep(), behavior: 'smooth' });
    });
    proofNext.addEventListener('click', () => {
      proofCarousel.scrollBy({ left: getSlideStep(), behavior: 'smooth' });
    });
  }

  // ===== SCROLL ANIMATIONS =====
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.anim-fade-up').forEach(el => observer.observe(el));

  // ===== SCROLL REVEAL FOR SECTIONS =====
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

  // Cards and items
  document.querySelectorAll('#features .grid > div, #steps .grid > div, #testimonials .grid > div, #proof-testimonials .proof-card, .faq-item, #riyal-cash .bg-background-card').forEach(el => {
    el.classList.add('scroll-reveal');
    revealObserver.observe(el);
  });

  // Section headings
  document.querySelectorAll('#features .text-center, #steps .text-center, #testimonials .text-center, #proof-testimonials .text-center, #faq .text-center, #riyal-cash .text-center').forEach(el => {
    el.classList.add('section-reveal');
    revealObserver.observe(el);
  });

  // Stats bar reveal
  document.querySelectorAll('.stats-bar .text-center').forEach(el => {
    el.classList.add('scroll-reveal');
    revealObserver.observe(el);
  });

  // ===== COUNTER ANIMATION (easeOutExpo) =====
  let counterTriggered = false;
  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) {
    const counterObs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !counterTriggered) {
        counterTriggered = true;
        document.querySelectorAll('.count-up').forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const suffix = counter.getAttribute('data-suffix') || '';
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
const stickyCta = document.getElementById('sticky-cta');
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  if (stickyCta) {
    if (window.scrollY > 500) stickyCta.classList.add('visible');
    else stickyCta.classList.remove('visible');
  }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
