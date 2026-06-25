# NEFA — Cryptocurrency Web App

Proje Ödevi **WT-5440P** — NEFA Cryptocurrency Web App Figma tasarımının
**HTML, Sass ve Bootstrap** ile koda dökülmüş hâli.

![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?logo=sass&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?logo=bootstrap&logoColor=white)

## Özellikler

- **Responsive** tasarım (Bootstrap 5 grid + özel media query'ler)
- **Gradient text** — başlıktaki seçili kelimelere `background-clip: text` ile gradyan
- **Gradient border'lı input'lar** — maskeleme tekniğiyle (Amount / Get alanları)
- **Custom select kutuları** — USD / BTC para birimi seçimi, sol tarafta kripto ikonu
- **Market board** — Trending / Top Gainers / Recently Added, kolonlar arası
  tek taraflı border ile ayraç (divider) ve mini fiyat grafikleri (SVG)
- **"Get started in a few minutes"** — 3 adım, aralarındaki ok işaretleri
  `position: absolute` ile yerleştirildi; mobilde gizleniyor
- **FAQ accordion** — saf JavaScript ile tek-açılır akordiyon
- **Canlı dönüştürücü** — Amount/Get alanları arasında basit kur hesabı

## Kurulum

```bash
# bağımlılıkları kur (sadece sass)
npm install

# Sass'ı CSS'e derle
npm run sass

# geliştirme sırasında otomatik derleme
npm run watch
```

Ardından `index.html` dosyasını tarayıcıda açın (ya da bir statik sunucu çalıştırın):

```bash
python3 -m http.server 5511
# http://localhost:5511
```

## Proje yapısı

```
crypto-web-site/
├── index.html              # tek sayfalık site
├── css/style.css           # Sass'tan derlenen çıktı (elle düzenlemeyin)
├── scss/                   # Sass kaynak dosyaları
│   ├── style.scss          # ana giriş — tüm partial'ları import eder
│   ├── _variables.scss     # renkler, tipografi, radius, gölge token'ları
│   ├── _mixins.scss        # gradient-text / gradient-border / breakpoint mixin'leri
│   ├── _base.scss          # global stiller + butonlar + yardımcı sınıflar
│   ├── _navbar.scss
│   ├── _hero.scss          # başlık + buy/sell widget
│   ├── _market.scss        # Trending / Top Gainers / Recently Added
│   ├── _steps.scss         # "Get started" adımları + ok işaretleri
│   ├── _faq.scss           # accordion
│   └── _cta.scss           # alt CTA banner + footer
├── js/script.js            # accordion + widget + mobil menü
└── assets/
    ├── charts/             # yeşil/kırmızı mini fiyat grafikleri (SVG)
    ├── icons/              # kripto para ikonları (SVG)
    └── illustrations/      # adım görselleri, ok, FAQ görseli (SVG)
```

## Notlar

- `css/style.css` derlenmiş bir çıktıdır — değişiklikleri `scss/` altında yapın
  ve yeniden derleyin.
- İkon ve grafikler, tasarımı tek dosyada taşınabilir tutmak için SVG olarak
  yeniden oluşturulmuştur; dilerseniz [cryptoicons.co](http://cryptoicons.co)
  paketindeki gerçek ikonlarla değiştirebilirsiniz.
