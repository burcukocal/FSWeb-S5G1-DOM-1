const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

const menu = document.querySelectorAll("nav a");
menu.forEach(a => a.classList.add("italic") )
menu[0].textContent = siteContent["nav"]["nav-item-1"];
menu[1].textContent = siteContent["nav"]["nav-item-2"];
menu[2].textContent = siteContent["nav"]["nav-item-3"];
menu[3].textContent = siteContent["nav"]["nav-item-4"];
menu[4].textContent = siteContent["nav"]["nav-item-5"];
menu[5].textContent = siteContent["nav"]["nav-item-6"];

const resim = document.querySelector("#logo-img");
resim.setAttribute("src", siteContent["images"]["logo-img"]);

const ctaBaslik = document.querySelector(".cta-text h1");
const ctaButon = document.querySelector(".cta-text button");
ctaBaslik.textContent = siteContent.cta.h1;
ctaButon.textContent = siteContent.cta.button;
const ctaResim = document.querySelector("#cta-img");
ctaResim.setAttribute("src",siteContent["images"]["cta-img"]);




const textBaslik = document.querySelectorAll(".text-content h4");
const textParagraf = document.querySelectorAll(".text-content p");

textBaslik[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
textParagraf[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"]
textBaslik[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
textParagraf[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];

const ortaResim = document.querySelector("#middle-img");
ortaResim.setAttribute("src", siteContent["images"]["accent-img"]);

textBaslik[2].textContent = siteContent["ana-içerik"]["servisler-h4"];
textParagraf[2].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
textBaslik[3].textContent = siteContent["ana-içerik"]["ürünler-h4"];
textParagraf[3].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
textBaslik[4].textContent = siteContent["ana-içerik"]["vizyon-h4"];
textParagraf[4].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];


document.querySelector(".contact h4").textContent = siteContent.iletisim["iletişim-h4"];
const contact = document.querySelectorAll(".contact p");
contact[0].textContent = siteContent.iletisim.adres;
contact[1].textContent = siteContent.iletisim.telefon;
contact[2].textContent = siteContent.iletisim.email;

const altBilgi = document.querySelector("footer a")
altBilgi.classList.add("bold");
altBilgi.textContent = siteContent.footer.copyright;