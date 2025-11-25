# Maglo | React + Typescript + Vite + Bun

## Turkish

### Proje Hakkında

Proje en yaygın javascript runtime'ı olan [Node.js](https://nodejs.org/) üzerinde değil ona alternatif bir runtime olan [Bun](https://bun.com/) üzerinde geliştirilmiştir.

Projede kullanılacak endpoint bilgileri swagger görüntüleyicisi aracılığıyla tarafıma iletilmiş olmasına rağmen url aramalarım sonucu herhangi bir `swagger.json` dosyası bulamadım. Bu yüzden swagger ui'a ait dosyalar arasından gereken bilgiyi alıp bu json'ı kendim oluşturdum (`openapi.json`).

`openapi.json`'ı oluşturma sebebim [openapi-generator](http://openapi-generator.tech/) ile api dokümanlarını proje içerisine entegre etmek. Bu sayede bir endpoint hangi parametreleri alıyor hangi cevapları gönderiyor diye düşünmek yerine direkt olarak proje içerisindeki dosyalardan okuyarak görebildim. Ayrıca tüm veri tiplerini gördüğüm için proje içerisideki tüm kısımlar `type-safe` olarak geliştirildi. Herhangi bir yanlış anlaşılma olmaması adına şunu da belirtmekte fayda var. İsteklerin tamamı belirtildiği gibi `https://case.nodelabs.dev/api/` url'ine atılmaktadır.

#### openapi-generator

Kullanımına ait bilgiyi kendi web siteleri üzerinden edinebilirsiniz. Benim proje içerisinde nasıl kullandığımı görmek için `open-api-generate.sh` dosyası ve bu dosya içerisinde kullanılan `open-api-generator-config.json` ve `openapi.json` dosyalarını inceleyebilirsiniz.

#### Neden Bun?

Bu sorunun cevabını [Bun — Node.js Killer](https://medium.com/@fatikaratepe/bun-node-js-killer-c22c632bf138) makalemde açıklıyorum.

#### Projeyi Çalıştırma

Projeyi clone'ladıktan sonra çalıştırmak için aşağıdaki adımları izleyiniz:

```bash
#cihazınızda bun yüklü değilse https://bun.com/ adresi üzerinden indirmeniz gerekli

bun install #package.json içerisindeki gerekliliklerin yüklenmesi işlemini yapar

bun run dev #projeyi development environmentinde çalıştırır ve 5173 portunda koşturur
```

#### Projedeki Gereklilikler

`package.json` içerisindeki harici gereklilikler şunlar:

```json
"@hookform/resolvers": "^5.2.2", /* react-hook-form ve zod paketlerini entegre kullanabilme imkanı sağlar */
"@tailwindcss/vite": "^4.1.17", // tailwind 4 ile birlikte gelen vite eklentisi
"@tanstack/react-query": "^5.62.7", // http isteklerini yönetme imkanı sağlar
"axios": "^1.13.2", // http isteklerini atma konusunda kolaylık sağlar (openapi-generator'a istek yöneticisi olarak axios tanımlayıp çalıştırdığım için de gerekli)
"dayjs": "^1.11.19", // tarih formatlama konusunda kolaylık sağlar (moment.js'e nazaran hem daha güncel hem de daha küçük boyutta bir paket)
"echarts": "^6.0.0", // grafik oluşturma imkanı sağlar
"framer-motion": "^12.23.24", // animasyon ekleme imkanı sağlar
"jwt-decode": "^4.0.0", // jwt token decode imkanı sağlar
"rc-tooltip": "^6.4.0", // tooltip oluşturma imkanı sağlar (alternatiflerine oranla bağlılıkları daha az sayıda ve küçük boyutlu)
"react-hook-form": "^7.66.1", // form oluşturma ve validasyon imkanı sağlar
"react-router-dom": "^7.9.6", // proje içerisinde oluşturulan sayfalar arasında dinamik olarak gezinme imkanı sağlar
"sonner": "^2.0.7", // toast mesajları oluşturma imkanı sağlar
"tailwindcss": "^4.1.17", // stilleri elementler üzerinden yönetme imkanı sağlar
"zod": "^4.1.12" // form objelerini oluşturma imkanı sağlar
```

### Birkaç Hatırlatma

Gereklilik olarak belirtilen `skeleton loading` dışında proje içerisinde bir adet de `spinner loading` componenti bulunmaktadır.

* Skeleton: component içerisinde bir endpoint isteği varsa ve bu isteğe henüz cevap alınmadıysa component içerisinde veri gösterilecek alanda görünecek şekilde kullanıldı

* Spinner: buton içerisinde ve React'a ait `Suspense` etiketlerinin `fallback` alanında kullanıldı. Sayfa geçişleri esnasında görünen spinner loading bahsedilen `Suspense` etiketi sayesinde gerçekleşmektedir. Bunun sebebi iste `lazy loading` olan sayfaların dinamik olarak import edilmesinin beklenmesidir.

## English

### About the Project

The project was developed not on [Node.js](https://nodejs.org/), the most common JavaScript runtime, but on [Bun](https://bun.com/), an alternative runtime.

Although the endpoint information to be used in the project was provided to me via a Swagger viewer, I could not find any `swagger.json` file after searching the URLs. Therefore, I extracted the necessary information from the Swagger UI files and manually created this JSON file (`openapi.json`).

The purpose of creating `openapi.json` is to integrate the API documentation into the project using [openapi-generator](http://openapi-generator.tech/). This allowed me to directly see what parameters an endpoint accepts and what responses it returns by reading the generated files inside the project. Since I could also see all data types, every part of the project was developed in a `type-safe` manner. To avoid any misunderstanding, it’s worth noting that all requests are sent to the following URL as specified: `https://case.nodelabs.dev/api/`.

#### openapi-generator

You can find usage information on their official website. To see how I used it within the project, you can review the `open-api-generate.sh` file and the `open-api-generator-config.json` and `openapi.json` files referenced inside it.

#### Why Bun?

I explain the answer to this question in my article: [Bun — Node.js Killer](https://medium.com/@fatikaratepe/bun-node-js-killer-c22c632bf138).

#### Running the Project

After cloning the project, follow the steps below to run it:

```bash
# if bun is not installed on your device, you need to download it from https://bun.com/

bun install # installs the dependencies listed in package.json

bun run dev # runs the project in development environment on port 5173
```

#### Project Dependencies

The external dependencies listed in `package.json` are:

```json
"@hookform/resolvers": "^5.2.2", // allows integrated usage of react-hook-form and zod
"@tailwindcss/vite": "^4.1.17", // vite plugin introduced with tailwind v4
"@tanstack/react-query": "^5.62.7", // provides ability to manage http requests
"axios": "^1.13.2", // simplifies making http requests (also required because I configured axios as the request manager for openapi-generator)
"dayjs": "^1.11.19", // simplifies date formatting (a more modern and lightweight alternative to moment.js)
"echarts": "^6.0.0", // enables chart creation
"framer-motion": "^12.23.24", // enables adding animations
"jwt-decode": "^4.0.0", // enables decoding jwt tokens
"rc-tooltip": "^6.4.0", // enables tooltip creation (fewer and lighter dependencies compared to alternatives)
"react-hook-form": "^7.66.1", // enables form creation and validation
"react-router-dom": "^7.9.6", // enables dynamic navigation between pages in the project
"sonner": "^2.0.7", // enables toast message creation
"tailwindcss": "^4.1.17", // enables managing styles directly through elements
"zod": "^4.1.12" // enables creating form schemas
```

### A Few Reminders

In addition to the required `skeleton loading`, there is also a `spinner loading` component in the project.

* **Skeleton:** Used inside components when there is an endpoint request and no response has been received yet. It displays a placeholder in the area where data will be shown.

* **Spinner:** Used inside buttons and in the `fallback` areas of React's `Suspense` components. The spinner loading seen during page transitions appears thanks to `Suspense`, as it waits for lazily loaded pages to be dynamically imported.
