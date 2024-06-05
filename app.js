




// const express = require('express')
// const app = express()
// const port = 3001

// app.set('view engine', 'ejs') // الدرس رقم 5
// app.use(express.static('public')) // استدعاء الستايل من ملفات الستايل الدرس 6
// app.use(express.urlencoded({ extended: true })); // جاهزة عشان نرسل إلى الداتا ما اعرف وش معناته
// var methodOverride = require('method-override') // جاهز خص بأدة لحذف من الداتا
// app.use(methodOverride('_method')) // جاهز خص بأدة لحذف من الداتا

// const allRoutes = require('./routes/allRoutes') //allRoutes.js كود جاهز للربط بين لمف الركزسات في ملف 
// // const addUserRoutes = require('./routes/addUser') // ركوستات اليوزر حطيتها في ملف لحالة من باب التنظيم وهذا استدعاء لها
// //https://www.npmjs.com/package/cookie-parser اكواد خاصة في اخذ التوكن من المتصف الى السرفر لان السيرفر لايستطسع اخذها فلابد من تثبيت مكتبة والمرجع فيها هذا الرابطة 
// var cookieParser = require('cookie-parser')
// app.use(cookieParser())
// /////تابع الي فوق اخذ التكون من البراوزر//////
// app.use(express.json()) // هذا عشان نقدر نيتخدم الجيسزن 


// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

// // اكواد خاصة في الاوتو رفرش

 
// const path = require("path");
// const livereload = require("livereload");
// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch(path.join(__dirname, 'public'));
 
 
// const connectLivereload = require("connect-livereload");
// app.use(connectLivereload());
 
// liveReloadServer.server.once("connection", () => {
//   setTimeout(() => {
//     liveReloadServer.refresh("/");
//   }, 100);
// });
// // //اكواد خاصة في الاوتو رقرش//









// // اكواد قاعدة البيانات
// // bynEIKO6LtlgqZTB
// // qorhod

// const mongoose = require('mongoose'); //كود جاهز استدعى ادات المنقز  للأتصال بقاعة البيانات
// // const Mydata = require('./models/mydataSchema'); // صدرنا الاسكيما من هذا الامتداد حقها

// mongoose.connect("mongodb+srv://qorhod:bynEIKO6LtlgqZTB@cluster0.uvrx1sw.mongodb.net/all-data?retryWrites=true&w=majority") // الاتصال بقاعة البينات
// .then(() => {
//   app.listen(port, () => {
//     console.log(`http://localhost:${port}/`);
    
//   });
//  })
//  .catch((err) => {
//    console.log(err);
//  });

 
// app.use(allRoutes); //allRoutes طباعة لمحتويات ملف الركوستات 
// // app.use(addUserRoutes);  // طباعة للمتغير الذي يستدعي الركوستات حقت اليزر 









const express = require('express');
const app = express();
const port = 3001;

app.set('view engine', 'ejs'); // الدرس رقم 5
app.use(express.static('public')); // استدعاء الستايل من ملفات الستايل الدرس 6
app.use(express.urlencoded({ extended: true })); // جاهزة عشان نرسل إلى الداتا ما اعرف وش معناته
var methodOverride = require('method-override'); // جاهز خص بأدة لحذف من الداتا
app.use(methodOverride('_method')); // جاهز خص بأدة لحذف من الداتا

const allRoutes = require('./routes/allRoutes'); // كود جاهز للربط بين لمف الركزسات في ملف 
// const addUserRoutes = require('./routes/addUser'); // ركوستات اليوزر حطيتها في ملف لحالة من باب التنظيم وهذا استدعاء لها
// https://www.npmjs.com/package/cookie-parser اكواد خاصة في اخذ التوكن من المتصف الى السرفر لان السيرفر لايستطسع اخذها فلابد من تثبيت مكتبة والمرجع فيها هذا الرابطة 
var cookieParser = require('cookie-parser');
app.use(cookieParser());
// تابع الي فوق اخذ التكون من البراوزر
app.use(express.json()); // هذا عشان نقدر نيتخدم الجيسزن 

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// اكواد خاصة في الاوتو رفرش
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
// اكواد خاصة في الاوتو رقرش

// اكواد قاعدة البيانات
const mongoose = require('mongoose'); // كود جاهز استدعى ادات المنقز للأتصال بقاعة البيانات
// const Mydata = require('./models/mydataSchema'); // صدرنا الاسكيما من هذا الامتداد حقها
require('dotenv').config();
mongoose.connect(process.env.DATABASE_PASSWORD) // الاتصال بقاعة البينات
.then(() => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
  });
})
.catch((err) => {
  console.log(err);
});

// إضافة مسارات إدارة النظام
const adminRoutes = require('./admin/routes/adminRoutes');
app.use('/admin', adminRoutes);

app.use(allRoutes); // طباعة لمحتويات ملف الركوستات 
// app.use(addUserRoutes);  // طباعة للمتغير الذي يستدعي الركوستات حقت اليزر
