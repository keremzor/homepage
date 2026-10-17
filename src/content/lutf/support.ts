import type { LegalContent } from '@/components/LegalDocument';

export const support: LegalContent = {
  switchToEnglish: 'English',
  tr: {
    lang: 'tr',
    title: 'Lutf — Yardım ve iletişim',
    blocks: [
      {
        type: 'p',
        text: "Lutf, ruh hâline göre seçilmiş Kur'an ayetlerini gösteren ücretsiz ve reklamsız bir uygulamadır. Geliştirici: İbrahim Kerem Zor.",
      },

      { type: 'h2', text: 'İletişim' },
      {
        type: 'p',
        text: 'Soru, öneri ya da bir sorun için: **[info@keremzor.com](mailto:info@keremzor.com)**',
      },
      {
        type: 'p',
        text: 'Genellikle birkaç gün içinde yanıt veririz. Bir sorun bildiriyorsan şunları da yazarsan daha hızlı yardımcı olabiliriz:',
      },
      {
        type: 'ul',
        items: [
          "iPhone modelin ve iOS sürümün (iPhone'da Ayarlar → Genel → Hakkında)",
          "Lutf'un sürümü (Lutf'ta Ayarlar → Hakkında)",
          'Ne yaptığında ne olduğu; varsa ekran görüntüsü',
        ],
      },

      { type: 'h2', text: 'Uygulama hakkında' },
      {
        type: 'ul',
        items: [
          '**Cihaz:** iPhone, iOS 16.4 ve üzeri.',
          '**Diller:** Türkçe, İngilizce, Endonezce ve Arapça. Lutf telefonunun dilinde açılır.',
          '**İnternet:** Ayetler ve mealler uygulamanın içindedir; Lutf internet olmadan da çalışır.',
          '**Hesap yok:** Kayıt ya da giriş gerekmez.',
        ],
      },

      { type: 'h2', text: 'Sık sorulanlar' },

      { type: 'h3', text: 'Ayetler nasıl seçildi?' },
      {
        type: 'p',
        text: 'Her ruh hâli için teselli eden ve tek başına anlaşılan ayetler seçildi. Her ayetin meali, önceki ve sonraki ayetlerle birlikte okunarak bağlamına bakıldı; savaş, azap ya da hüküm bağlamındaki ayetler alınmadı. Tek başına eksik kalan ayetler, anlamı tamamlayan ayetlerle birlikte gösterilir.',
      },

      { type: 'h3', text: 'Ayet metinleri ve mealler nereden geliyor?' },
      {
        type: 'p',
        text: "Arapça metin ve mealler QuranEnc.com'dan değiştirilmeden alınır; Arapça metin ayrıca Tanzil ile karşılaştırılarak doğrulanır. Hangi mealin hangi sürümünün kullanıldığı Lutf'ta Ayarlar → Kaynaklar bölümünde yazar.",
      },

      { type: 'h3', text: 'Mealde bir hata gördüm.' },
      {
        type: 'p',
        text: 'Lutf\'ta Ayarlar → Kaynaklar → "Mealde hata bildir" ile mealin yayıncısına (QuranEnc.com) iletebilirsin.',
      },

      { type: 'h3', text: 'Favorilerim ve okuma ilerlemem nerede saklanıyor?' },
      {
        type: 'p',
        text: 'Yalnızca telefonunda. Hesap yoktur, bu bilgiler bize gönderilmez. Telefonunun yedeği (iCloud) açıksa yedeğe dahil olur; yeni telefonu yedekten kurduğunda geri gelir.',
      },

      { type: 'h3', text: 'Günün ayeti bildirimi gelmiyor.' },
      {
        type: 'p',
        text: "iPhone'unda Ayarlar → Bildirimler → Lutf'tan bildirimlere izin ver. Lutf'ta Ayarlar → Bildirimler bölümünden günün ayetinin açık olduğunu ve saatini kontrol et.",
      },

      { type: 'h3', text: 'Uygulamanın dilini nasıl değiştiririm?' },
      {
        type: 'p',
        text: "Yalnızca Lutf'un dilini değiştirmek için iPhone'unda Ayarlar → Uygulamalar → Lutf → Dil'den seçebilirsin; Lutf'ta Ayarlar → Dil bölümüne dokunmak da seni oraya götürür. Telefonunun desteklemediği bir dildeyse Lutf İngilizce açılır. iOS 17 ve öncesinde \"Dil\" satırı yalnızca telefonunda birden fazla dil ekliyse görünür: önce Ayarlar → Genel → Dil ve Bölge → Dil Ekle'den bir dil ekle (telefonunun dili değişmez), sonra Ayarlar → Lutf → Dil.",
      },

      { type: 'h3', text: 'Yazıyı büyütebilir miyim?' },
      {
        type: 'p',
        text: "Evet. Okurken üstteki \"Aa\" düğmesiyle ya da Lutf'ta Ayarlar → Okuma → Yazı boyutu'ndan. Lutf, iPhone'unun yazı boyutu ayarına da uyar.",
      },

      { type: 'h3', text: 'Verilerimi nasıl silerim?' },
      {
        type: 'p',
        text: 'Uygulamayı silmen yeterli; telefonundaki tüm Lutf verileri silinir.',
      },

      { type: 'h3', text: 'Lutf bir tedavi ya da fetva kaynağı mı?' },
      {
        type: 'p',
        text: "Hayır. Lutf, ayetlerle teselli bulmana yardım eden bir okuma uygulamasıdır; psikolojik destek ya da tedavinin, dinî konularda da bir âlimin yerini tutmaz. Kendini çok kötü hissediyorsan güvendiğin biriyle ya da bir uzmanla konuş; acil bir durumda 112'yi ara.",
      },

      { type: 'p', text: '[Gizlilik politikası](/lutf/privacy-policy)' },
    ],
  },
  en: {
    lang: 'en',
    title: 'Lutf — Help and contact',
    blocks: [
      {
        type: 'p',
        text: 'Lutf is a free, ad-free app that shows verses of the Quran chosen for how you feel. Developer: İbrahim Kerem Zor.',
      },

      { type: 'h2', text: 'Contact' },
      {
        type: 'p',
        text: 'For questions, suggestions or problems: **[info@keremzor.com](mailto:info@keremzor.com)**',
      },
      {
        type: 'p',
        text: "We usually reply within a few days. If you're reporting a problem, including the following helps us help you faster:",
      },
      {
        type: 'ul',
        items: [
          'Your iPhone model and iOS version (on your iPhone: Settings → General → About)',
          'The version of Lutf (in Lutf: Settings → About)',
          'What you did and what happened; a screenshot if you have one',
        ],
      },

      { type: 'h2', text: 'About the app' },
      {
        type: 'ul',
        items: [
          '**Device:** iPhone, iOS 16.4 or later.',
          "**Languages:** Turkish, English, Indonesian and Arabic. Lutf opens in your phone's language.",
          '**Internet:** Verses and translations are built into the app; Lutf works without an internet connection.',
          '**No account:** No sign-up or sign-in needed.',
        ],
      },

      { type: 'h2', text: 'Frequently asked questions' },

      { type: 'h3', text: 'How were the verses chosen?' },
      {
        type: 'p',
        text: "For each mood, verses were chosen that comfort and can be understood on their own. Each verse's translation was read together with the verses before and after it to check its context; verses about war, punishment or legal rulings were left out. Verses that are incomplete on their own are shown together with the verses that complete their meaning.",
      },

      { type: 'h3', text: 'Where do the verse texts and translations come from?' },
      {
        type: 'p',
        text: 'The Arabic text and translations are taken unchanged from QuranEnc.com; the Arabic text is also checked against Tanzil. You can see which translation and version is used in Lutf under Settings → Sources.',
      },

      { type: 'h3', text: 'I found a mistake in a translation.' },
      {
        type: 'p',
        text: 'In Lutf, go to Settings → Sources → "Report a translation issue" to send it to the translation\'s publisher (QuranEnc.com).',
      },

      { type: 'h3', text: 'Where are my favorites and reading progress stored?' },
      {
        type: 'p',
        text: "Only on your phone. There is no account and this information is never sent to us. If your phone's backup (iCloud) is on, it is included in the backup and comes back when you set up a new phone from it.",
      },

      { type: 'h3', text: "I don't get the verse of the day notification." },
      {
        type: 'p',
        text: 'On your iPhone, allow notifications in Settings → Notifications → Lutf. In Lutf, check in Settings → Notifications that the verse of the day is on and the time is right.',
      },

      { type: 'h3', text: "How do I change the app's language?" },
      {
        type: 'p',
        text: "To change only Lutf's language, go to Settings → Apps → Lutf → Language on your iPhone; tapping Settings → Language in Lutf takes you there too. If your phone is in a language Lutf doesn't support, Lutf opens in English. On iOS 17 and earlier the \"Language\" row only appears if your phone has more than one language: first add one in Settings → General → Language & Region → Add Language (your phone's language stays the same), then go to Settings → Lutf → Language.",
      },

      { type: 'h3', text: 'Can I make the text bigger?' },
      {
        type: 'p',
        text: 'Yes. While reading, use the "Aa" button at the top, or go to Settings → Reading → Text size in Lutf. Lutf also follows your iPhone\'s text size setting.',
      },

      { type: 'h3', text: 'How do I delete my data?' },
      {
        type: 'p',
        text: 'Just delete the app; all Lutf data on your phone is removed with it.',
      },

      { type: 'h3', text: 'Is Lutf a treatment or a source of religious rulings?' },
      {
        type: 'p',
        text: "No. Lutf is a reading app that helps you find comfort in verses; it doesn't replace psychological support or treatment, or a scholar on religious questions. If you're feeling very low, talk to someone you trust or a professional; in an emergency, call your local emergency number.",
      },

      { type: 'p', text: '[Privacy policy](/lutf/privacy-policy#english)' },
    ],
  },
};
