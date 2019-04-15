const express = require('express')
const mongoose=require('mongoose')
var bodyParser=require('body-parser')
const app=express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var multer=require('multer')
const path=require('path')
const db=require('./config/keys').mongoURI
const User=require('./models/User')
mongoose.connect(db)
    .then(()=>console.log('MongoDb connected'))
    .catch(err=>console.log(err))
var storage = multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
});
var upload = multer({storage: storage}).single('myImage');
app.use('/',express.static('components'));
app.post('/upload',(req,res)=>{
console.log(req.body)
   //  upload(req,res,(err) => {
   //     if(err){
   //         res.render('index',{
   //             msg:err
   //         })
   //     }else {
   //         console.log(req.body.email)
   //            const user=new User({
   //                email:req.body.email.value,
   //                password:req.body.password,
   //                img:req.file.path
   //            });
   //            user.save()
   //                .then(result => {
   //                    console.log(result);
   //                    res.status(201).json({
   //                        message: "User created"
   //                    });
   //                })
   //                .catch(err => {
   //             console.log(err);
   //             res.status(500).json({
   //                 error: err
   //             });
   //         });
   //     }
   // })
});



const port=process.env.PORT || 5000;
app.listen(port,()=>console.log(`server running on port ${port}`))