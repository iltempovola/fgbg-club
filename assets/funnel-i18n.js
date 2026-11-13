(() => {
  'use strict';
  const en = {
    language: 'Language', see:'See the', privacy: 'Privacy', terms: 'Terms',
    joinKicker: 'Android beta · install and try', joinTitle: 'Try FGBG on Android',
    joinIntro: 'Download the FGBG beta, install it on your Android phone, and try it at a restaurant near you.',
    joinDownload: 'Download the Android APK', joinStep3: 'Open FGBG, choose your language and goal, then try it at a nearby restaurant.',
    joinFeedback: 'Try the app and send feedback through the platform where you found us.', downloadDetails: 'Download details',
    gmail: 'Gmail used on Google Play', gmailHelp: 'Enter the Gmail address for the Google account you will use to accept the test invitation. Do not share it in recruitment chat.',
    handle: 'Freelancer or Reddit handle', city: 'City', consent: 'I agree that FGBG may use the details I submit to coordinate my testing, and share my Gmail address with Google for test access. This is not marketing consent.',
    retention: 'We retain this submission for 30 days. To request removal, email', privacyPolicy: 'FGBG Privacy Policy', request: 'Request test access',
    next: 'Next steps', success1: 'You will be added within 1 hour; then open', testing: 'Google Play testing', success2: 'and tap Accept, then Download.', success3: 'Open the link using the same Google account as the Gmail address you submitted. This request does not add you to the test automatically.',
    trouble: 'Having trouble accessing Google Play?', apk: 'Download the APK', instead: 'instead.', noscript: 'JavaScript is required to submit this form. Enable JavaScript and reload; this page will not send the form without it.',
    needConsent: 'Please give the required consent before submitting.', invalidGmail: 'Enter a valid Gmail address ending in @gmail.com.', invalidFields: 'Enter a handle and city between 1 and 100 characters each.',
    sending: 'Sending your request…', received: 'Your request was received.', invalidResponse: 'Check your Gmail, handle and city, then try again.',
    rateLimit: 'Too many attempts right now. Wait a little, then try again.', unavailable: 'The service is temporarily unavailable. Your request may not have been recorded; you can try again.',
    unconfirmed: 'We could not confirm your request. It may not have been recorded; you can try again.', timedOut: 'The request timed out. It may have been recorded; you can try again.', unreachable: 'We could not reach the service. Your request may not have been recorded; you can try again.',
    downloadTitle: 'FGBG beta for Android', downloadIntro: 'FGBG finds the best dish for your goal at restaurants near you — lose weight, eat healthier, keto/low-carb, high-protein, vegetarian, halal, diabetic-friendly and more — and helps you order it.',
    downloadButton: 'Download FGBG beta (Android, 57 MB)', install: 'How to install', step1: 'Tap the button above on your Android phone.', step2: 'Open the downloaded file. If asked, allow your browser to “install unknown apps”.', step3: 'Open FGBG, choose your language and goal, and try it at a restaurant near you.',
    available: 'Available in English, Bahasa Melayu, Bahasa Indonesia, Português (Brasil), 中文, Español, हिन्दी, ไทย, Tiếng Việt, اردو and Filipino.', beta: 'Beta testers: please send feedback through the platform where you found us.',
    version: 'Version', by: 'By', pageLanguage: 'This page language does not guarantee the app is available in the same language.'
  };
  const dictionaries = {
    en,
    id: {...en, language:'Bahasa', privacy:'Privasi', terms:'Ketentuan', joinKicker:'Beta Android · pasang dan coba', joinTitle:'Coba FGBG di Android', joinIntro:'Unduh beta FGBG, pasang di ponsel Android Anda, lalu coba di restoran sekitar.', joinDownload:'Unduh APK Android', joinStep3:'Buka FGBG, pilih bahasa dan tujuan, lalu coba di restoran sekitar.', joinFeedback:'Coba aplikasinya dan kirim masukan melalui platform tempat Anda menemukan kami.', downloadDetails:'Detail unduhan', downloadTitle:'FGBG beta untuk Android', downloadIntro:'FGBG menemukan hidangan terbaik sesuai tujuan Anda di restoran sekitar — menurunkan berat badan, makan lebih sehat, keto/rendah karbohidrat, tinggi protein, vegetarian, halal, ramah diabetes, dan lainnya — serta membantu Anda memesannya.', downloadButton:'Unduh FGBG beta (Android, 57 MB)', install:'Cara memasang', step1:'Ketuk tombol di atas pada ponsel Android Anda.', step2:'Buka file yang diunduh. Jika diminta, izinkan browser memasang “aplikasi tidak dikenal”.', step3:'Buka FGBG, pilih bahasa dan tujuan Anda, lalu coba di restoran sekitar.', available:'Tersedia dalam bahasa Inggris, Melayu, Indonesia, Portugis (Brasil), Mandarin, Spanyol, Hindi, Thai, Vietnam, Urdu, dan Filipino.', beta:'Penguji beta: kirim masukan melalui platform tempat Anda menemukan kami.', version:'Versi', by:'Oleh', pageLanguage:'Bahasa halaman ini tidak menjamin aplikasi tersedia dalam bahasa yang sama.'},
    ms: {...en, language:'Bahasa', privacy:'Privasi', terms:'Terma', joinKicker:'Beta Android · pasang dan cuba', joinTitle:'Cuba FGBG di Android', joinIntro:'Muat turun beta FGBG, pasangkannya pada telefon Android anda, kemudian cuba di restoran berdekatan.', joinDownload:'Muat turun APK Android', joinStep3:'Buka FGBG, pilih bahasa dan matlamat anda, kemudian cuba di restoran berdekatan.', joinFeedback:'Cuba aplikasi ini dan hantar maklum balas melalui platform tempat anda menemui kami.', downloadDetails:'Butiran muat turun', downloadTitle:'FGBG beta untuk Android', downloadIntro:'FGBG mencari hidangan terbaik mengikut matlamat anda di restoran berdekatan — menurunkan berat badan, makan lebih sihat, keto/rendah karbohidrat, tinggi protein, vegetarian, halal, mesra diabetes dan banyak lagi — serta membantu anda memesannya.', downloadButton:'Muat turun FGBG beta (Android, 57 MB)', install:'Cara memasang', step1:'Ketik butang di atas pada telefon Android anda.', step2:'Buka file yang dimuat turun. Jika diminta, benarkan browser memasang “aplikasi tidak diketahui”.', step3:'Buka FGBG, pilih bahasa dan matlamat anda, lalu cuba di restoran berdekatan.', available:'Tersedia dalam bahasa Inggeris, Melayu, Indonesia, Portugis (Brasil), Mandarin, Sepanyol, Hindi, Thai, Vietnam, Urdu dan Filipino.', beta:'Penguji beta: sila hantar maklum balas melalui platform tempat anda menemui kami.', version:'Versi', by:'Oleh', pageLanguage:'Bahasa halaman ini tidak menjamin aplikasi tersedia dalam bahasa yang sama.'},
    fil: {...en, joinKicker:'Android beta · install and try', joinTitle:'Try FGBG on Android', joinIntro:'Download the FGBG beta, install it on your Android phone, and try it at a restaurant near you.'},
    ur: {...en, language:'زبان', see:'ملاحظہ کریں', privacy:'رازداری', terms:'شرائط', joinKicker:'اینڈرائیڈ بیٹا · انسٹال کریں اور آزمائیں', joinTitle:'اینڈرائیڈ پر FGBG آزمائیں', joinIntro:'FGBG بیٹا ڈاؤن لوڈ کریں، اسے اپنے اینڈرائیڈ فون پر انسٹال کریں، اور قریبی ریسٹورنٹ میں آزمائیں۔', joinDownload:'اینڈرائیڈ APK ڈاؤن لوڈ کریں', joinStep3:'FGBG کھولیں، اپنی زبان اور مقصد منتخب کریں، پھر قریبی ریسٹورنٹ میں آزمائیں۔', joinFeedback:'ایپ آزمائیں اور اسی پلیٹ فارم پر رائے بھیجیں جہاں آپ کو ہمارا پتا چلا۔', downloadDetails:'ڈاؤن لوڈ کی تفصیلات', downloadTitle:'Android کے لیے FGBG بیٹا', downloadIntro:'FGBG آپ کے مقصد کے مطابق قریبی ریسٹورنٹس میں بہترین کھانا تلاش کرتا ہے — وزن کم کرنا، صحت مند کھانا، کیٹو/کم کارب، زیادہ پروٹین، سبزی خور، حلال، ذیابیطس کے لیے موزوں اور مزید — اور آرڈر کرنے میں مدد دیتا ہے۔', downloadButton:'FGBG بیٹا ڈاؤن لوڈ کریں (Android، 57 MB)', install:'انسٹال کرنے کا طریقہ', step1:'اپنے Android فون پر اوپر والے بٹن کو ٹیپ کریں۔', step2:'ڈاؤن لوڈ کی گئی فائل کھولیں۔ اگر پوچھا جائے تو براؤزر کو “نامعلوم ایپس انسٹال” کرنے کی اجازت دیں۔', step3:'FGBG کھولیں، اپنی زبان اور مقصد منتخب کریں، اور قریبی ریسٹورنٹ میں آزمائیں۔', available:'English، Bahasa Melayu، Bahasa Indonesia، Português (Brasil)، 中文، Español، हिन्दी، ไทย، Tiếng Việt، اردو اور Filipino میں دستیاب ہے۔', beta:'بیٹا ٹیسٹرز: جس پلیٹ فارم پر آپ کو ہمارا پتا چلا، وہیں رائے بھیجیں۔', version:'ورژن', by:'از', pageLanguage:'صفحے کی زبان سے یہ ضمانت نہیں ملتی کہ ایپ بھی اسی زبان میں دستیاب ہے۔'},
    th: {...en, language:'ภาษา', privacy:'ความเป็นส่วนตัว', terms:'ข้อกำหนด', joinKicker:'Android เบต้า · ติดตั้งและทดลองใช้', joinTitle:'ทดลองใช้ FGBG บน Android', joinIntro:'ดาวน์โหลด FGBG เบต้า ติดตั้งบนโทรศัพท์ Android แล้วทดลองใช้ที่ร้านอาหารใกล้คุณ', joinDownload:'ดาวน์โหลด APK สำหรับ Android', joinStep3:'เปิด FGBG เลือกภาษาและเป้าหมาย แล้วทดลองใช้ที่ร้านอาหารใกล้คุณ', joinFeedback:'ทดลองใช้แอปและส่งความคิดเห็นผ่านแพลตฟอร์มที่คุณพบเรา', downloadDetails:'รายละเอียดการดาวน์โหลด', downloadTitle:'FGBG เบต้าสำหรับ Android', downloadIntro:'FGBG ช่วยหาร้านอาหารใกล้คุณที่มีเมนูเหมาะกับเป้าหมาย — ลดน้ำหนัก กินดีขึ้น คีโต/คาร์บต่ำ โปรตีนสูง มังสวิรัติ ฮาลาล เหมาะกับผู้เป็นเบาหวาน และอื่น ๆ — พร้อมช่วยสั่งอาหาร', downloadButton:'ดาวน์โหลด FGBG เบต้า (Android, 57 MB)', install:'วิธีติดตั้ง', step1:'แตะปุ่มด้านบนบนโทรศัพท์ Android', step2:'เปิดไฟล์ที่ดาวน์โหลด หากมีข้อความถาม ให้เบราว์เซอร์ติดตั้ง “แอปที่ไม่รู้จัก” ได้', step3:'เปิด FGBG เลือกภาษาและเป้าหมาย แล้วลองใช้ที่ร้านอาหารใกล้คุณ', available:'รองรับ English, Bahasa Melayu, Bahasa Indonesia, Português (Brasil), 中文, Español, हिन्दी, ไทย, Tiếng Việt, اردو และ Filipino', beta:'ผู้ทดสอบเบต้า: ส่งความคิดเห็นผ่านแพลตฟอร์มที่คุณพบเรา', version:'เวอร์ชัน', by:'โดย', pageLanguage:'ภาษาของหน้านี้ไม่ได้รับประกันว่าแอปจะมีภาษาเดียวกัน'},
    vi: {...en, language:'Ngôn ngữ', privacy:'Quyền riêng tư', terms:'Điều khoản', joinKicker:'Bản beta Android · cài đặt và trải nghiệm', joinTitle:'Trải nghiệm FGBG trên Android', joinIntro:'Tải bản beta FGBG, cài đặt trên điện thoại Android và dùng thử tại một nhà hàng gần bạn.', joinDownload:'Tải APK Android', joinStep3:'Mở FGBG, chọn ngôn ngữ và mục tiêu, rồi dùng thử tại nhà hàng gần bạn.', joinFeedback:'Dùng thử ứng dụng và gửi phản hồi qua nền tảng nơi bạn biết đến chúng tôi.', downloadDetails:'Chi tiết tải xuống', downloadTitle:'FGBG beta cho Android', downloadIntro:'FGBG tìm món phù hợp nhất với mục tiêu của bạn tại nhà hàng gần đó — giảm cân, ăn lành mạnh hơn, keto/ít tinh bột, giàu protein, chay, halal, phù hợp với người tiểu đường và nhiều lựa chọn khác — đồng thời giúp bạn đặt món.', downloadButton:'Tải FGBG beta (Android, 57 MB)', install:'Cách cài đặt', step1:'Nhấn nút phía trên trên điện thoại Android.', step2:'Mở tệp đã tải. Nếu được hỏi, hãy cho phép trình duyệt cài đặt “ứng dụng không rõ nguồn gốc”.', step3:'Mở FGBG, chọn ngôn ngữ và mục tiêu, rồi dùng thử tại nhà hàng gần bạn.', available:'Có các ngôn ngữ English, Bahasa Melayu, Bahasa Indonesia, Português (Brasil), 中文, Español, हिन्दी, ไทย, Tiếng Việt, اردو và Filipino.', beta:'Người thử nghiệm beta: vui lòng gửi phản hồi qua nền tảng nơi bạn biết đến chúng tôi.', version:'Phiên bản', by:'Bởi', pageLanguage:'Ngôn ngữ của trang không đảm bảo ứng dụng có cùng ngôn ngữ.'}
  };
  // Other app languages use English for the rest of this page; recovery is translated.
  for (const code of ['hi','pt','zh','es']) dictionaries[code] = {...en};
  const recovery = {
    en: ['Can’t install?', 'Download again. If it still fails, open the old FGBG app and sign in/sync, then uninstall it and install the new one. Local-only data may be lost.'],
    fil: ['Can’t install?', 'Download again. If it still fails, open the old FGBG app and sign in/sync, then uninstall it and install the new one. Local-only data may be lost.'],
    id: ['Tidak bisa memasang?', 'Unduh lagi. Jika masih gagal, buka aplikasi FGBG lama dan masuk/sinkronkan, lalu hapus dan pasang yang baru. Data yang hanya tersimpan di ponsel bisa hilang.'],
    ms: ['Tidak dapat memasang?', 'Muat turun semula. Jika masih gagal, buka aplikasi FGBG lama dan log masuk/selaraskan data, kemudian nyahpasang dan pasang yang baharu. Data yang hanya disimpan pada telefon mungkin hilang.'],
    ur: ['انسٹال نہیں ہو رہی؟', 'دوبارہ ڈاؤن لوڈ کریں۔ اگر پھر بھی مسئلہ ہو تو پرانی FGBG ایپ کھول کر سائن اِن اور سنک کریں، پھر اسے اَن انسٹال کر کے نئی ایپ انسٹال کریں۔ صرف فون میں محفوظ ڈیٹا ضائع ہو سکتا ہے۔'],
    th: ['ติดตั้งไม่ได้หรือ?', 'ดาวน์โหลดอีกครั้ง หากยังไม่ได้ ให้เปิดแอป FGBG เดิม ลงชื่อเข้าใช้และซิงค์ แล้วถอนการติดตั้งและติดตั้งแอปใหม่ ข้อมูลที่อยู่ในเครื่องเท่านั้นอาจสูญหาย'],
    vi: ['Không cài được?', 'Tải lại. Nếu vẫn lỗi, mở ứng dụng FGBG cũ, đăng nhập/đồng bộ, rồi gỡ ứng dụng đó và cài bản mới. Dữ liệu chỉ lưu trên máy có thể bị mất.'],
    hi: ['इंस्टॉल नहीं हो रहा?', 'फिर से डाउनलोड करें। फिर भी समस्या हो तो पुराना FGBG ऐप खोलकर साइन इन/सिंक करें, फिर उसे अनइंस्टॉल करके नया ऐप इंस्टॉल करें। केवल फ़ोन पर रखा डेटा खो सकता है।'],
    pt: ['Não consegue instalar?', 'Baixe novamente. Se ainda falhar, abra o FGBG antigo e entre/sincronize; depois desinstale e instale o novo. Dados salvos somente no celular podem ser perdidos.'],
    zh: ['无法安装？', '请重新下载。如果仍然失败，请打开旧版 FGBG 并登录/同步，然后卸载旧版并安装新版。仅保存在手机上的数据可能会丢失。'],
    es: ['¿No puedes instalar?', 'Descarga de nuevo. Si sigue fallando, abre la app FGBG anterior e inicia sesión/sincroniza; después desinstálala e instala la nueva. Se pueden perder los datos guardados solo en el teléfono.']
  };
  Object.entries(recovery).forEach(([code, text]) => { dictionaries[code].recoveryTitle = text[0]; dictionaries[code].recovery = text[1]; });
  const params = new URLSearchParams(location.search);
  const supported = ['en','id','ms','fil','ur','th','vi','hi','pt','zh','es'];
  let lang = params.get('lang') || 'en';
  if (!supported.includes(lang)) lang = 'en';
  const t = dictionaries[lang];
  const rtl = lang === 'ur';
  document.documentElement.lang = lang === 'fil' ? 'en-PH' : lang;
  document.documentElement.dir = rtl ? 'rtl' : 'ltr';
  document.documentElement.dataset.lang = lang;
  function translate() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = t[el.dataset.i18n];
      if (value !== undefined) el.textContent = value;
    });

    document.title = document.querySelector('#join-title') ? `${t.joinTitle} — FGBG` : t.downloadTitle;
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const [attr,key] = el.dataset.i18nAttr.split(':'); if (t[key] !== undefined) el.setAttribute(attr,t[key]);
    });
    document.querySelectorAll('[data-preserve-lang]').forEach(a => { const u = new URL(a.href, location.href); u.searchParams.set('lang', lang); a.href = u.pathname + u.search; });
    document.querySelectorAll('.language-selector').forEach(select => {
      select.value = lang;
      select.setAttribute('aria-label', t.language);
      select.addEventListener('change', () => {
        const url = new URL(location.href); url.searchParams.set('lang',select.value);
        location.href = url.toString();
      });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', translate);
  else translate();
  window.FunnelI18n = { lang, t };
})();
