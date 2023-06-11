# Mini Otomotiv Parça E-Ticaret Projesi

Bu proje, bir otomotiv parça e-ticaret platformudur. Kullanıcılar ve yöneticilerin sisteme kaydolabileceği bir sistemdir.


## Admin Girişi İçin
- `Email: ` biricikserhat47@gmail.com
- `Password: ` 123456
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


![screen01](https://github.com/Serhatb0/ITG-Java-Hiring-Challenge/assets/77425377/53bd89f8-5eaf-4991-a730-db0c027f9fb9)
![screen13](https://github.com/Serhatb0/ITG-Java-Hiring-Challenge/assets/77425377/e14a3403-29f6-4b36-8342-299aa48cc1dd)
![screen02](https://github.com/Serhatb0/ITG-Java-Hiring-Challenge/assets/77425377/f766e9a3-8a57-4520-b308-eca0c27b92ad)
![screen14](https://github.com/Serhatb0/ITG-Java-Hiring-Challenge/assets/77425377/d17e437a-1663-4c7f-b84c-e16d48905403)
![screen03](https://github.com/Serhatb0/ITG-Java-Hiring-Challenge/assets/77425377/e339dd50-73de-4995-8f7e-667ffc2b7b8d)
![screen15](https://github.com/Serhatb0/ITG-Java-Hiring-Challenge/assets/77425377/11f1a4eb-cd68-4453-a6cd-f91a12f297d1)
![screen04](https://github.com/Serhatb0/ITG-Java-Hiring-Challenge/assets/77425377/f7c8042e-6e27-4f02-a8a5-058229a1be3c)
![screen16](https://github.com/Serhatb0/ITG-Java-Hiring-Challenge/assets/77425377/3968d09b-63c3-4150-a7df-46a02def26ae)
![screen05](https://github.com/Serhatb0/ITG-Java-Hiring-Challenge/assets/77425377/ce1b43f5-2a12-4cb6-a0b9-5cf1c8776f93)
![screen17](https://github.com/Serhatb0/ITG-Java-Hiring-Challenge/assets/77425377/fedca379-ff16-407f-a81f-2f3c8bb3fe13)
![screen06](https://github.com/Serhatb0/ITG-Java-Hiring-Challenge/assets/77425377/13a7551f-f1cf-441a-8db6-4c7a3592c3b0)
![screen18](https://github.com/Serhatb0/ITG-Java-Hiring-Challenge/assets/77425377/e0066773-c9d5-4400-9280-eee7fa7d7e02)
![screen07](https://github.com/Serhatb0/ITG-Java-Hiring-Challenge/assets/77425377/d84278ef-763c-40f3-9b2a-7bab16b011b5)
![screen08](https://github.com/Serhatb0/ITG-Java-Hiring-Challenge/assets/77425377/3c887d83-3696-412a-9d9d-3908eaa324e9)
![screen09](https://github.com/Serhatb0/ITG-Java-Hiring-Challenge/assets/77425377/0d126178-6c8a-421d-8565-c3b28f51e009)


