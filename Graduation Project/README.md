BrewHaven - Coffee Store ☕
متجر إلكتروني متخصص لبيع القهوة، يعرض 30 نوع قهوة مختلف بصورها الحقيقية.

الفكرة
BrewHaven هو مشروع تخرج عبارة عن E-Commerce App لبيع القهوة. بدل ما نستخدم الـ API التقليدي fakestoreapi.com اللي الدكتور حاطه في الـ Demo، ابتكرنا فكرة متجر قهوة متخصص. كل منتج ليه صورته الحقيقية ووصفه ومكوناته وسعره بالجنيه المصري. المستخدم يقدر يتصفح المنيو، يفلتر حسب النوع (Espresso, Latte, Cold Brew...)، يبحث عن نوع القهوة، يشوف تفاصيل كل منتج، يضيفه للسلة أو المفضلة، ويتحكم في الكمية والسعر بيتحدث تلقائي.

المميزات
عرض 30 نوع قهوة بصور حقيقية عالية الجودة
فلترة حسب التصنيف (All, Espresso, Latte, Cold Brew, Traditional, Specialty)
خانة بحث ذكية تبحث بالاسم
صفحة تفاصيل لكل منتج
سلة ذكية تحسب الكمية والسعر الإجمالي تلقائياً
نظام مفضلة كامل
حفظ تلقائي في localStorage حتى بعد عمل Refresh
تصميم Responsive يعمل على الموبايل والتابلت والديسكتوب
التقنيات المستخدمة
React (Vite) - لبناء واجهة المستخدم
React Router DOM - للتنقل بين الصفحات (Routing)
Bootstrap 5 - كمكتبة UI للتصميم
Context API - لإدارة حالة السلة والمفضلة (CartContext, FavoritesContext)
JavaScript (ES6+) - للمنطق
CSS3 - للتصميم المخصص
localStorage - لحفظ البيانات
هيكل المشروع
React-Store-Project/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   └── Navbar.jsx              # شريط التنقل وعداد السلة والمفضلة
│   ├── Context/
│   │   ├── CartContext.jsx         # منطق السلة (إضافة، حذف، حساب السعر)
│   │   └── FavoritesContext.jsx    # منطق المفضلة
│   ├── pages/
│   │   ├── Home.jsx                # الصفحة الرئيسية
│   │   ├── Products.jsx            # صفحة عرض 30 نوع قهوة + بحث + فلتر
│   │   ├── ProductDetails.jsx      # صفحة تفاصيل كل منتج
│   │   ├── Cart.jsx                # صفحة السلة وإتمام الطلب
│   │   └── Favorites.jsx           # صفحة المفضلة
│   ├── services/
│   │   └── api.js                  # بيانات الـ 30 منتج بالصور الحقيقية
│   ├── App.jsx                     # ملف الـ Routes الرئيسي
│   ├── App.css
│   ├── index.css
│   └── main.jsx                    # نقطة البداية والـ Providers
├── screenshots/                    # صور من كل صفحات المشروع
│   ├── home.png
│   ├── products.png
│   ├── details.png
│   ├── cart.png
│   └── favorites.png
├── index.html
├── package.json
└── README.md
طريقة التشغيل
# تحميل المكتبات
npm install
# تشغيل المشروع
npm run dev
ثم افتح http://localhost:5173

الـ Routing
المشروع يحتوي على 5 مسارات رئيسية:

/ - الصفحة الرئيسية Home
/products - صفحة المنيو (30 نوع قهوة)
/product/:id - صفحة تفاصيل المنتج
/cart - صفحة السلة
/favorites - صفحة المفضلة
Screenshots
جميع الصور موجودة في فولدر /screenshots

الصفحة	الوصف
Home	الصفحة الرئيسية
Products	صفحة عرض 30 نوع قهوة مع البحث والفلتر
Product Details	تفاصيل كل منتج
Cart	السلة وحساب الإجمالي
Favorites	المنتجات المفضلة
الروابط
GitHub Repo: [حط لينك الريبو هنا بعد الرفع]
Live Demo (Vercel): [حط لينك فيرسل هنا بعد الرفع - لازم يكون Public ويفتح في Private Window]

استخدمت


 استخدام React Framework
 استخدام مكتبة UI (Bootstrap 5)
 المشروع يحتوي على Routing
 التصميم Responsive
 ملف README كامل
 مرفق Screenshots
 فكرة مبتكرة (متجر قهوة متخصص)