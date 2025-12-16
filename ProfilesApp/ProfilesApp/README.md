React Native Lab 10 – Profiles App

Öğrenci Bilgileri
- Ad Soyad: tugrul salaz
- Öğrenci Numarası: 220404922

---

Proje Açıklaması:

Bu proje, React Native (Expo) kullanılarak geliştirilmiş bir mobil uygulamadır.
Uygulama, yerel olarak çalışan bir Express.js API sunucusundan profil verilerini
çekerek sayfalanmış bir listede göstermekte ve seçilen profil için detay ekranı
sunmaktadır.

Bu laboratuvar çalışması aşağıdaki konuları kapsamaktadır:
- API entegrasyonu
- Asenkron işlemler
- Sayfalama (pagination)
- Navigasyon
- Ortam değişkenleri (.env)
- Hata yönetimi

---

Kullanılan Teknolojiler:

Backend:
- Node.js
- Express.js

Frontend:
- React Native
- Expo
- Axios
- React Navigation

---
Backend Kurulumu (Express API):
node server.js ile yapılır

Frontend Kurulumu:
.env dosyasında
EXPO_PUBLIC_API_BASE_URL=http://<192.x.x.x.x>:

IP Yapılandırması:

React Native uygulaması, Express API’ye .env dosyasında tanımlanan
EXPO_PUBLIC_API_BASE_URL üzerinden bağlanmaktadır.

localhost kullanılmamaktadır.

Telefon ve bilgisayar aynı Wi-Fi ağına bağlı olmalıdır.
