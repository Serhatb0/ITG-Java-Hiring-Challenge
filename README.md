# Mini Otomotiv Parça E-Ticaret Projesi

Bu proje, bir otomotiv parça e-ticaret platformudur. Kullanıcılar ve yöneticilerin sisteme kaydolabileceği bir sistemdir.

## Branch Yapısı

Projede kullanılan branch yapısı aşağıdaki gibidir:

- `master` branch'i hem backend hem de frontend kodlarını içerir.
- `FrontEnd` branch'i sadece frontend kodlarını içerir.
- `Backend` branch'i sadece backend kodlarını içerir.



## Proje Özellikleri

- Kullanıcıların sisteme kaydolabilmesi için kayıt ekranı bulunmaktadır.
- Sisteme kaydolan kullanıcılar e-posta onayı yaparak hesaplarını aktifleştirebilirler.
- Kayıtlı kullanıcılar istedikleri ürünleri sepete ekleyerek satın alabilirler.
- Satın alınan ürünler, kullanıcının belirlediği e-posta adresine gönderilecektir.
- Ana sayfada mevcut ürünlerin miktarı görüntülenecektir.
- Kullanıcılar, dil seçeneğini Türkçe veya İngilizce olarak değiştirebilirler.
- Kullanıcılar, hatalı girişlerde kilitlenme durumuyla karşılaşabilir. Bu durumu sadece yöneticiler kaldırabilir.
- Yöneticiler, sisteme yeni ürünler ekleyebilirler.




## BackEnd Proje Kurulumu
1. Projenin kaynak kodunu indirin veya kopyalayın.
2. Projenizin kök dizinine yerleşin.
3. Docker CLI'ını kullanarak projeyi Docker image'ına dönüştürmek için aşağıdaki komutları sırasıyla çalıştırın
4. ``` docker build -t otomotiv-eticaret . ``` Bu komut, Dockerfile'ı kullanarak projenizi bir Docker image'ına dönüştürür.
5. Docker image'ını çalıştırmak için aşağıdaki komutu kullanın
6. ``` docker run -p 8080:8080 otomotiv-eticaret . ```


## FrontEnd Proje Kurulumu
1. Projenin kaynak kodunu indirin veya kopyalayın.
2. Projenizin kök dizinine yerleşin.
3. ``` npm install ``` Bu komut, bir proje bağımlılıklarının yüklenmesi için kullanılır.
4. Sonra ``` npm run dev ``` Diyerek Projeyi Başlatın
5. Proje ``` http://localhost:3000 ``` Başlayacaktır





## Kullanılan Teknolojiler

Projenin geliştirilmesinde aşağıdaki teknolojiler kullanılmıştır:

### Backend

- Java 17
- Spring Boot
- Spring Security
- Spring Data JPA
- H2DB 

### Frontend

- Nextjs
- React
- HTML5
- CSS3
- JavaScript
- Bootstrap
- Tailwind CSS

### Diğer

- Postman (API testleri için)
- Swagger UI (API belgeleri için)


## Online Ödeme Yöntemi

Proje, Iyzico ödeme yöntemini entegre etmek için aşağıdaki teknolojileri kullanmıştır:

- Iyzico API
- Iyzico Developer Ortamı

Ödeme işlemleri için Iyzico API'sini kullanarak geliştirme ortamında entegrasyonu gerçekleştirilmiştir. Bu sayede kullanıcılar, ürün satın alırken güvenli bir şekilde ödeme yapabilmektedir.




