import type { LegalContent } from '@/components/LegalDocument';

export const privacyPolicy: LegalContent = {
  switchToEnglish: 'English',
  tr: {
    lang: 'tr',
    title: 'Gizlilik Politikası ve KVKK Aydınlatma Metni',
    blocks: [
      { type: 'p', text: '**Son güncelleme:** 18.10.2026' },
      {
        type: 'p',
        text: 'Lutf ("Uygulama"), ruh hâline göre Kur\'an ayetleri gösteren bir mobil uygulamadır. Bu metin, Uygulama\'yı kullanırken hangi verilerin işlendiğini, neden işlendiğini ve haklarını açıklar. 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamındaki aydınlatma metni olarak da geçerlidir.',
      },

      { type: 'h2', text: '1. Veri sorumlusu' },
      { type: 'p', text: 'İbrahim Kerem Zor' },
      { type: 'p', text: 'E-posta: [info@keremzor.com](mailto:info@keremzor.com)' },

      { type: 'h2', text: '2. Kısaca' },
      {
        type: 'ul',
        items: [
          'Hesap açman gerekmez. Adını, e-postanı ya da telefon numaranı istemeyiz.',
          '**Favorilerin, okuma ilerlemen ve ayarların kendi cihazında (ve telefonunun kendi yedeğinde) saklanır.** Bize gönderilmez.',
          'Uygulamayı geliştirmek için hata raporları ve kullanım istatistikleri toplanır. İkisi de **anonimdir**: kalıcı bir kimlik taşımaz, kimseye ve hiçbir cihaza bağlanamaz.',
          'Uygulama ücretsizdir.',
        ],
      },

      { type: 'h2', text: '3. Cihazında kalan veriler' },
      {
        type: 'p',
        text: 'Aşağıdaki bilgiler yalnızca cihazındaki uygulama depolama alanında tutulur. Bu verilere bizim erişimimiz yoktur:',
      },
      {
        type: 'ul',
        items: [
          'Favorilere eklediğin ayetler ve hangi ruh hâli için eklediğin',
          'Her ruh hâli için kaldığın ayet ve ayetlerin sırası',
          'Son okuduğun ruh hâli',
          'Ayarların: dil, tema, yazı boyutu, Arapça metnin gösterilip gösterilmemesi, günün ayeti bildiriminin açık olup olmadığı ve saati',
          'Bir kez gösterilen ipuçlarını (ör. "kaydır" ipucu) görüp görmediğin ve "Her gün bir ayet" kartını yanıtlayıp yanıtlamadığın',
          'Uygulamayı kaç farklı gün kullandığın ve App Store puan penceresinin hangi sürümde istendiği (puanı seyrek ve yalnızca uygulamayı birkaç gün kullanan birine sormak için)',
          'Paylaştığın son ayet görseli: paylaşım için telefonunun geçici klasöründe tutulur ve bir sonraki paylaşımda silinir',
        ],
      },
      {
        type: 'p',
        text: "Telefonunun yedekleme özelliği açıksa (iPhone'da iCloud ya da bilgisayar yedeği, Android'de Google yedeği), bu bilgiler de yedeğe dahil olabilir. Böylece yeni bir telefona geçtiğinde favorilerin geri gelir. Bu yedekler senin Apple ya da Google hesabında tutulur, bize ulaşmaz.",
      },
      {
        type: 'p',
        text: 'Günün ayeti bildirimi telefonunda zamanlanır ve telefonunda gösterilir; bunun için hiçbir bilgi bize ya da başka bir hizmete gönderilmez.',
      },
      {
        type: 'p',
        text: "Puan penceresi Apple'ın kendi penceresidir: verdiğin puan ve yazdığın yorum doğrudan App Store'a gider, uygulama üzerinden bize bir şey gönderilmez.",
      },
      {
        type: 'p',
        text: 'Uygulamayı sildiğinde cihazındaki veriler silinir. Yedekteki kopyaları telefonunun yedekleme ayarlarından yönetebilirsin.',
      },

      { type: 'h2', text: '4. İşlenen veriler, amaçları ve hukuki sebepleri' },
      { type: 'h3', text: '4.1 Hata raporları (Sentry)' },
      {
        type: 'p',
        text: 'Uygulama çöktüğünde ya da bir hata oluştuğunda, sorunu bulup düzeltebilmemiz için bir hata raporu gönderilir. Raporda şunlar bulunur:',
      },
      {
        type: 'ul',
        items: [
          'Hatanın teknik ayrıntıları',
          'Cihaz modeli, işletim sistemi, uygulama sürümü ve uygulamanın dili',
          'Hatayı anlamaya yarayan teknik cihaz durumu (ör. boş bellek ve depolama, ekran yönü)',
          'Hatanın hangi ekranda (ör. okuma ekranı) olduğu',
        ],
      },
      {
        type: 'p',
        text: "Raporlarda okuduğun ayetler, seçtiğin ruh hâlleri, favorilerin, IP adresin ya da cihazına özel bir kimlik yer almaz; bu yüzden bir rapor kimseye bağlanamaz. Rapor yalnızca bir hata olduğunda gönderilir; internet yoksa telefonunda bekler. Raporlar Avrupa Birliği'ndeki (Almanya) sunucularda tutulur.",
      },

      { type: 'h3', text: '4.2 Kullanım istatistikleri (PostHog)' },
      {
        type: 'p',
        text: 'Uygulamanın nasıl kullanıldığını genel olarak anlamak ve içeriği geliştirmek için kullanım istatistikleri toplanır:',
      },
      {
        type: 'ul',
        items: [
          'Uygulamanın açılması ve o anki ayarlar (dil, tema, yazı boyutu, Arapça metnin gösterilmesi, günün ayeti bildiriminin açık olması)',
          'Hangi ruh hâlinin açıldığı ve nereden açıldığı (ana sayfa, bildirim vb.), bir okumada kaç ayet görüldüğü ve sona gelinip gelinmediği',
          'Favoriye ekleme ve çıkarma, paylaşma ve kopyalama sayıları; günün ayeti kartına ve bildirim iznine verilen cevap; bir ayarın değiştirilmesi',
          'Cihaz modeli, işletim sistemi, ekran boyutu, uygulama sürümü, dil ve saat dilimi',
        ],
      },
      {
        type: 'p',
        text: "**Hangi ayetleri okuduğun ya da favorilediğin, destek ödemeleri ve seni tanıtan hiçbir bilgi gönderilmez.** İstatistikler her açılışta yeniden ve rastgele üretilen bir kimlikle gönderilir; telefonuna kalıcı bir kimlik yazılmaz. Böylece iki ayrı açılış birbirine, istatistikler de sana ya da cihazına bağlanamaz. IP adresin saklanmaz ve konumun bulunmaya çalışılmaz. Veriler Avrupa Birliği'ndeki sunucularda tutulur.",
      },
      {
        type: 'p',
        text: 'Hata raporları ve kullanım istatistikleri kimseye bağlanamayan anonim verilerdir; bu nedenle KVKK anlamında kişisel veri sayılmaz (KVKK m.3/1-d).',
      },

      { type: 'h3', text: '4.3 Dış bağlantılar' },
      {
        type: 'p',
        text: '"Mealde hata bildir" bağlantısı QuranEnc.com sitesini açar. Bu siteye girdiğinde QuranEnc\'in kendi gizlilik politikası geçerlidir.',
      },
      {
        type: 'p',
        text: 'Bir ayeti paylaştığında, ayet görseli telefonunun paylaşım menüsü üzerinden seçtiğin uygulamaya gönderilir. Bu içerik bize ulaşmaz.',
      },

      { type: 'h2', text: '5. Verilerin aktarılması' },
      {
        type: 'p',
        text: "Anonim hata raporları ve kullanım istatistikleri şu hizmet sağlayıcılarda, Avrupa Birliği'ndeki sunucularda tutulur:",
      },
      {
        type: 'ul',
        items: [
          'Functional Software, Inc. (Sentry): hata raporları',
          'PostHog, Inc. (PostHog): kullanım istatistikleri',
        ],
      },
      {
        type: 'p',
        text: 'Bu veriler kimseye bağlanamadığı için kişisel veri değildir; kişisel verin yurt dışına aktarılmaz.',
      },
      { type: 'p', text: 'Verileri satmayız ve reklam için kullanmayız.' },

      { type: 'h2', text: '6. Saklama süreleri' },
      {
        type: 'ul',
        items: [
          'Cihazındaki veriler: uygulamayı silene kadar',
          'Hata raporları: 30 gün',
          'Kullanım istatistikleri: 1 yıl',
        ],
      },

      { type: 'h2', text: '7. Çocuklar' },
      {
        type: 'p',
        text: 'Uygulama 13 yaşından küçük çocuklara yönelik değildir ve bilerek bu yaştaki çocuklardan kişisel veri toplamaz.',
      },

      { type: 'h2', text: '8. Tercihlerini değiştirmek' },
      {
        type: 'ul',
        items: ['**Cihazındaki verileri silmek:** Uygulamayı sil.'],
      },

      { type: 'h2', text: '9. KVKK kapsamındaki hakların' },
      { type: 'p', text: 'KVKK m.11 uyarınca şu haklara sahipsin:' },
      {
        type: 'ul',
        items: [
          'Kişisel verilerinin işlenip işlenmediğini öğrenmek',
          'İşlenmişse buna ilişkin bilgi istemek',
          'İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenmek',
          'Yurt içinde ya da yurt dışında aktarıldığı üçüncü kişileri bilmek',
          'Eksik ya da yanlış işlenmişse düzeltilmesini istemek',
          "KVKK m.7'deki şartlar çerçevesinde silinmesini ya da yok edilmesini istemek",
          'Düzeltme, silme ya da yok etme işlemlerinin, verilerin aktarıldığı üçüncü kişilere bildirilmesini istemek',
          'Münhasıran otomatik sistemlerle analiz edilmesi sonucu aleyhine bir sonuç çıkmasına itiraz etmek',
          'Kanuna aykırı işleme nedeniyle zarara uğramışsan zararın giderilmesini talep etmek',
        ],
      },
      {
        type: 'p',
        text: 'Başvurularını [info@keremzor.com](mailto:info@keremzor.com) adresine iletebilirsin. Başvurular en geç 30 gün içinde ücretsiz olarak yanıtlanır.',
      },
      {
        type: 'p',
        text: 'Hesap sistemi olmadığı ve hata raporları ile kullanım istatistikleri anonim olduğu için seni tanıyabileceğimiz bir bilgi tutmuyoruz; bu yüzden bu verileri sana bağlayıp gösteremeyiz ya da yalnızca seninkileri silemeyiz.',
      },

      { type: 'h2', text: '10. Değişiklikler' },
      {
        type: 'p',
        text: "Bu metni güncellediğimizde sayfanın başındaki tarihi değiştiririz. Önemli değişiklikleri App Store'daki sürüm notlarında da belirtiriz.",
      },

      { type: 'h2', text: '11. İletişim' },
      { type: 'p', text: '[info@keremzor.com](mailto:info@keremzor.com)' },
    ],
  },
  en: {
    lang: 'en',
    title: 'Privacy Policy',
    blocks: [
      { type: 'p', text: '**Last updated:** October 18, 2026' },
      {
        type: 'p',
        text: 'Lutf ("the App") is a mobile app that shows verses of the Quran based on how you feel. This policy explains what data is processed when you use the App, why it is processed, and what your rights are.',
      },

      { type: 'h2', text: '1. Who we are' },
      { type: 'p', text: 'İbrahim Kerem Zor' },
      { type: 'p', text: 'Email: [info@keremzor.com](mailto:info@keremzor.com)' },

      { type: 'h2', text: '2. In short' },
      {
        type: 'ul',
        items: [
          "You don't need an account. We never ask for your name, email or phone number.",
          "**Your favorites, your reading progress and your settings stay on your device (and in your phone's own backup).** They are not sent to us.",
          'Crash reports and usage statistics are collected to improve the App. Both are **anonymous**: they carry no lasting identifier and cannot be linked to you or to any device.',
          'The App is free.',
        ],
      },

      { type: 'h2', text: '3. Data that stays on your device' },
      {
        type: 'p',
        text: "The following is stored only in the App's storage on your device. We have no access to it:",
      },
      {
        type: 'ul',
        items: [
          'The verses you add to favorites, and the mood you added them under',
          'The verse you stopped at for each mood, and the order of the verses',
          'The mood you read last',
          'Your settings: language, theme, text size, whether Arabic text is shown, and whether the verse of the day notification is on and its time',
          'Whether you have seen one-time hints (such as the "swipe" hint) and answered the "A verse every day" card',
          'How many different days you have used the App and in which version the App Store rating window was requested (so that a rating is asked for rarely, and only from someone who has used the App on several days)',
          "The last verse image you shared: it is kept in your phone's temporary folder for sharing and is deleted the next time you share",
        ],
      },
      {
        type: 'p',
        text: "If your phone's backup is turned on (iCloud or computer backup on iPhone, Google backup on Android), this data may be included in it, so your favorites come back when you move to a new phone. These backups are kept in your own Apple or Google account and never reach us.",
      },
      {
        type: 'p',
        text: 'The verse of the day notification is scheduled and shown on your phone; no information is sent to us or any other service for it.',
      },
      {
        type: 'p',
        text: "The rating window is Apple's own: your rating and review go directly to the App Store, and nothing is sent to us through the App.",
      },
      {
        type: 'p',
        text: "Deleting the App deletes the data on your device. You can manage the copies in your backup from your phone's backup settings.",
      },

      { type: 'h2', text: '4. Data we process, why, and on what legal basis' },
      { type: 'h3', text: '4.1 Crash reports (Sentry)' },
      {
        type: 'p',
        text: 'When the App crashes or an error occurs, a report is sent so we can find and fix the problem. A report contains:',
      },
      {
        type: 'ul',
        items: [
          'Technical details of the error',
          "Device model, operating system, app version and the App's language",
          'Technical device state that helps explain the error (for example, free memory and storage, screen orientation)',
          'Which screen the error happened on (for example, the reading screen)',
        ],
      },
      {
        type: 'p',
        text: 'Reports never include the verses you read, the moods you chose, your favorites, your IP address or an identifier specific to your device, so a report cannot be linked to anyone. A report is sent only when an error occurs; if you are offline, it waits on your phone. Reports are stored on servers in the European Union (Germany).',
      },

      { type: 'h3', text: '4.2 Usage statistics (PostHog)' },
      {
        type: 'p',
        text: 'Usage statistics help us understand how the App is used in general and improve its content:',
      },
      {
        type: 'ul',
        items: [
          'The App being opened, with the settings at that moment (language, theme, text size, whether Arabic text is shown, whether the verse of the day notification is on)',
          'Which mood was opened and from where (home screen, notification, etc.), how many verses were seen in a reading, and whether the end was reached',
          'How often verses are added to or removed from favorites, shared or copied; answers to the verse of the day card and the notification permission; changing a setting',
          'Device model, operating system, screen size, app version, language and time zone',
        ],
      },
      {
        type: 'p',
        text: '**The verses you read or favorite, tips, and anything that identifies you are never sent.** Statistics are sent with an identifier that is created at random each time the App opens; no lasting identifier is stored on your phone. So two separate launches cannot be linked to each other, and the statistics cannot be linked to you or your device. Your IP address is not stored and your location is not looked up. The data is kept on servers in the European Union.',
      },
      {
        type: 'p',
        text: 'Because crash reports and usage statistics cannot be linked to anyone, they are anonymous data and not personal data under the GDPR (Recital 26).',
      },

      { type: 'h3', text: '4.3 External links and sharing' },
      {
        type: 'p',
        text: '"Report a translation issue" opens QuranEnc.com. QuranEnc\'s own privacy policy applies on that site.',
      },
      {
        type: 'p',
        text: "When you share a verse, the image is passed through your phone's share menu to the app you choose. It never reaches us.",
      },

      { type: 'h2', text: '5. Who we share data with' },
      {
        type: 'p',
        text: 'Anonymous crash reports and usage statistics are kept by these service providers, on servers in the European Union:',
      },
      {
        type: 'ul',
        items: [
          'Functional Software, Inc. (Sentry): crash reports',
          'PostHog, Inc. (PostHog): usage statistics',
        ],
      },
      {
        type: 'p',
        text: 'Because this data cannot be linked to anyone, it is not personal data; none of your personal data is transferred.',
      },
      { type: 'p', text: 'We do not sell data or use it for advertising.' },

      { type: 'h2', text: '6. How long data is kept' },
      {
        type: 'ul',
        items: [
          'Data on your device: until you delete the App',
          'Crash reports: 30 days',
          'Usage statistics: 1 year',
        ],
      },

      { type: 'h2', text: '7. Children' },
      {
        type: 'p',
        text: 'The App is not directed at children under 13 and does not knowingly collect personal data from them.',
      },

      { type: 'h2', text: '8. Your choices' },
      {
        type: 'ul',
        items: ['**Delete data stored on your device:** Delete the App.'],
      },

      { type: 'h2', text: '9. Your rights' },
      { type: 'p', text: 'Depending on where you live, you may have the right to:' },
      {
        type: 'ul',
        items: [
          'Access the personal data we hold about you',
          'Have it corrected or erased',
          'Restrict or object to its processing',
          'Data portability',
          'Withdraw your consent at any time',
          'Lodge a complaint with your local data protection authority',
        ],
      },
      {
        type: 'p',
        text: 'California residents have the right to know about and delete their personal data, and the right not to be discriminated against for using these rights. We do not sell or share your personal information.',
      },
      {
        type: 'p',
        text: 'To use any of these rights, email [info@keremzor.com](mailto:info@keremzor.com). We reply within 30 days.',
      },
      {
        type: 'p',
        text: "Because the App has no accounts and crash reports and usage statistics are anonymous, we don't hold any information that identifies you; so we cannot link that data to you, show it to you, or delete only yours.",
      },

      { type: 'h2', text: '10. Changes' },
      {
        type: 'p',
        text: 'When we update this policy, we change the date at the top of this page. We also mention important changes in the release notes on the App Store.',
      },

      { type: 'h2', text: '11. Contact' },
      { type: 'p', text: '[info@keremzor.com](mailto:info@keremzor.com)' },
    ],
  },
};
