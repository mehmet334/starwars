# 🌌 Star Wars App

Bu proje, [SWAPI (Star Wars API)](https://swapi.dev/) kullanılarak oluşturulmuş interaktif bir **Yıldız Gemisi (Starships)** uygulamasıdır.
Kullanıcılar yıldız gemilerini listeleyebilir, ad veya modele göre arama yapabilir, daha fazla gemi yükleyebilir ve gemilerin detay sayfalarını görüntüleyebilirler.

---

## 🚀 Özellikler

* 🛸 **Yıldız gemilerini listeleme**
  SWAPI üzerinden alınan gemiler ad, model ve atmosferdeki maksimum hız bilgileriyle birlikte listelenir.

* 🔍 **Arama**
  Kullanıcılar gemi adı veya modeline göre arama yapabilir (API `?search=` parametresi).

* 📄 **Detay Sayfası**
  Bir gemiye tıklandığında şu bilgiler gösterilir:

  * Ad
  * Model
  * Üretici
  * Mürettebat
  * Yolcu sayısı
  * Maksimum atmosfer hızı
  * Kargo kapasitesi

* ➕ **Daha Fazla (Load More)**
  Sayfalama desteği: Kullanıcı “Daha Fazla” butonuna basarak yeni sayfalardaki gemileri yükleyebilir.

* ⬅️ **Geri Dönüş**
  Detay sayfasında “Back” butonu ile ana sayfaya dönülebilir.

---

## 🧱 Klasör Yapısı

```
star-wars-app/
├── index.html
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── api.js
    ├── styles.css
    └── components/
        ├── SearchBar.jsx
        ├── StarshipCard.jsx
        ├── StarshipList.jsx
        └── StarshipDetail.jsx
```

---

## ⚙️ Kurulum ve Çalıştırma

1️⃣ **Projeyi klonla**

```bash
git clone https://github.com/mehmet334/star-wars-app.git
cd star-wars-app
```

2️⃣ **Bağımlılıkları yükle**

```bash
npm install
```

3️⃣ **Geliştirme sunucusunu başlat**

```bash
npm run dev
```

Uygulama otomatik olarak açılmazsa [http://localhost:5173](http://localhost:5173) adresine git.

---

## 🌠 Kullanım

* Arama çubuğuna bir kelime yaz ve **Enter** tuşuna bas.
* Sonuçlar anında filtrelenir.
* Herhangi bir gemiye tıklayarak detaylarını görüntüleyebilirsin.
* Detay sayfasında “Back” tuşuna basarak ana ekrana dön.
* Daha fazla gemi görmek için **Load More** butonuna tıkla.

---

## 📡 API Bilgisi

Kaynak: [https://swapi.dev/api/starships/](https://swapi.dev/api/starships/)

* Listeleme:
  `GET https://swapi.dev/api/starships/`

* Arama:
  `GET https://swapi.dev/api/starships/?search=millennium`

* Detay:
  `GET https://swapi.dev/api/starships/{id}/`

---

## 🛠️ Kullanılan Teknolojiler

| Teknoloji      | Amaç                              |
| -------------- | --------------------------------- |
| React 19       | UI geliştirme                     |
| React Router 6 | Sayfa geçişleri (Home / Detail)   |
| Vite 7         | Hızlı geliştirme ortamı           |
| CSS3           | Görsel stil ve responsive tasarım |
| Fetch API      | Veri alma işlemleri (SWAPI)       |

---

## 💡 Geliştirme Fikirleri

* 🌈 Dark / Light tema seçimi
* 🪐 Favori gemileri kaydetme (LocalStorage)
* ♾️ Infinite scroll (Load More yerine otomatik yükleme)
* ⚡ API isteklerinde hata yönetimi geliştirme

---


> 🌌 Bu proje, React ve SWAPI kullanarak REST API’den veri çekme, filtreleme ve yönlendirme (routing) konularını öğretmek için hazırlanmıştır.
