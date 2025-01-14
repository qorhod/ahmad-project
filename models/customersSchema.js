
// تم الغاء هذه الاسكيما وضمها مع اسكيما المستخدم


//https://mongoosejs.com/docs/documents.html#updating-using-save الطريقة كامله لأستخدام اداة المنقز تلاقيها في موقعهم وانتبه للأحرف الكبتل في البداية ساوها زيهم هذا الرابط 

const mongoose = require("mongoose"); // كود جاهز استدعاء ادات المنقز 
const Schema = mongoose.Schema; // تجهيز الإسكيما من المنقز
 
// define the Schema (the structure of the article)

const userSchema = new Schema({// بناء الاسكيما مثل ما توريد

    
    
    firstNamecustomer: String,
    lastNamecustomer: String,
    phoneNumber: String,
    gender: String,
    branch: String,
    salesEmployeeId: String,
    salesEmployeeName: String,
    salesEmployeeUserName: String,
    orders: [{
        orderNumber: Number,
            status: String,
            branch: String,
            location: String,
            salesEmployeeId: String,
            salesEmployeeName: String,
            salesEmployeeUserName: String,


            aluminumCode0:String ,
            aluminumThickness0: String,
            aluminumColorCode0: String,

            glasstype0: String,
            glassThickness0: String,
            glassColorCode0: String,
          
      
        




      
                    measurement:[{
                        iid:String,
                        id_id:String,
                            H: Number,
                            W: Number,
                            designCode: String,

                            aluminumCode: String,
                            aluminumThickness: Number,
                            insideOrOutside: String,
                            aluminumColorCode: String,

                            glasstype: String,
                            glassThickness: String,
                            glassColorCode: String,
                            glassCode: String,
                            temper: String,
                            lip: String,
                            
                            comments: String,

                            totalMeters:{
                                H1: Number,
                                W1: Number,
                                totalMeters: Number,
                               
                            },


                            price:{ // التسعيرة

                                item: String,
                                umberOfMeters: Number,
                                price: Number,
                                discount: Number,
                                total: Number,
                                // totalBeforeTax: Number,
                                // tax: Number,
                                totalWithDiscount: Number,
                                },


                                // totalPrice:{ // التسعيرة

                 
                                //     totalBeforeTax: Number,
                                //     tax: Number,
                                //     totalWithTax: Number,
                                //     },

                                motherEquation: {

                                     E10 :Number,  // الحلق
                                     F10 :Number, // الكعب
                                     G10 :Number, // الشنكل
                                     H10 :Number, // الجنب
                                     I10 :Number,// درفة الشبك
                                     J10 :Number, //ربل درفة
                                     M10 :Number,// زجاج
                                     N10 :Number,// شبك حديد 2م
                                     Q10 :Number, // زجاج الثابت
                                     K10 :Number, // كفرات درفه 
                                     L10 :Number, // كفرات شبك 
                                     O10 :Number, //مسكة
                                     P10 :Number, // سيلكون المنيوم
                                    


                                },
                                glassCuttingReport:{
                                    H: Number,
                                    W: Number,
                                    reportTemper: Number,
                                },
                                aluminumCuttingReport:{
                                    Q4: Number,
                                    R4: Number,
                                    S4: Number,
                                    T4: Number,
                                    U4: Number,
                                
                                }



                    }],
                    
                    // totalMeters:[{
                    //     H1: Number,
                    //     W1: Number,
                    //     totalMeters: Number,
                       
                    // }],

                    // totalPrice: String,


                    totalPrice:{ // التسعيرة

                 
                    totalBeforeTax: Number,
                    tax: Number,
                    totalWithTax: Number,
                    },
                    

                    motherEquationTotal:[ {
              // تجميع  العداد مع بعض بشرط نفس اسم القطاع
                        aluminumCode: String,
                        E10T :Number,  // الحلق
                        F10T :Number, // الكعب
                        G10T :Number, // الشنكل
                        H10T :Number, // الجنب
                        I10T :Number,// درفة الشبك
                        J10T :Number, //ربل درفة
                        M10T :Number,// زجاج
                        N10T :Number,// شبك حديد 2م
                        Q10T :Number, // زجاج الثابت
                        K10T :Number, // كفرات درفه 
                        L10T :Number, // كفرات شبك 
                        O10T :Number, //مسكة
                        P10T :Number, // سيلكون المنيوم
                // تجميع  العداد مع بعض بشرط نفس اسم القطاع//


// نفس الي فوق ولاكن تم عمل عمليات حسابيه عليها
                        E10TF :Number,  // الحلق
                        F10TF :Number, // الكعب
                        G10TF :Number, // الشنكل
                        H10TF :Number, // الجنب
                        I10TF :Number,// درفة الشبك
                        J10TF :Number, //ربل درفة
                        M10TF :Number,// زجاج
                        N10TF :Number,// شبك حديد 2م
                        Q10TF :Number, // زجاج الثابت
                        K10TF :Number, // كفرات درفه 
                        L10TF :Number, // كفرات شبك 
                        O10TF :Number, //مسكة
                        P10TF :Number, // سيلكون المنيوم
// نفس الي فوق ولاكن تم عمل عمليات حسابيه عليها//

                   }],









        
            // createdAt:Date
            createdAt: {
                type: Date,
                default: Date.now
              } ,
            updatedAt:{type:Date,default:Date.now},
        
  
    }]



},{ timestamps: true }); // اضفنا هذا عشان يطبع في الداتا التاريخ والوقت واخر تعديل 
 
 
// Create a model based on that schema
const User = mongoose.model("customer", userSchema);  //كأنه نشأ اري وداخل اري يبدا يكتب البيانات الي نبغا بصيغة ابجكت customer عشان ننشاء مكان في الداتا بيز بهذا الأسم 
 
 
// export the model
module.exports = User;  //app.js نصدر الداتا عشان نستقبلها في صفحة 