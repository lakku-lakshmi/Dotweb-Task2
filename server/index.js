const express = require('express');
const app = express();
const router = express.Router();
const dotenv = require('dotenv');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { isLoggedIn } = require('./middleware/isLoggedIn');
const user = require('./model/user');
const mongoose=require('mongoose');
const bcrypt=require("bcrypt")
const  employ =require('../src/models/Employ');
const secret="myscretkey";
dotenv.config();

app.use(express.json());
app.use(cors());

//Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

router.post('/addemploy',async(req,res)=>{
  const {employInfo}=req.body;
  console.log("..employInfo...",employInfo);
  try{     
        const user=await employ.findOne({email:employInfo.email});
        if(user){
          res.status(400).json({
              error:"user already exists "
          })
        }
        else{
          console.log("-----------")
          await employ.create(employInfo)
          .then(result => {
            console.log(result)
          })
          .catch(error=>{
            console.log(error)
          })
          }

  }catch(error){
    return res.status(400).json({error:error.message});
  }
})
router.post('/employDetails',async(req,res)=>{
  const {currentPage}=req.body;
   console.log("--------",req.body);
   const RPP=5;
   const skipFactor=((currentPage-1)*RPP);
    try{
      console.log("------employ details")
      const data=await employ.find({});
      sortedData=data.sort((a,b)=>(a.firstname.toLowerCase() > b.firstname.toLowerCase()) ? 1 : -1)
      const items=data.slice(skipFactor,skipFactor+RPP);
      console.log("-----data----------",data.length,items.length);
      const TotalPages=Math.ceil(data.length/RPP);
      console.log("============",TotalPages);
      return res.status(200).send({
        msg: "details fetched successfully",
        data:{items,TotalPages},
        statusCode: "0000000",
      });
      
    }
    catch(error){
      console.log("==+++++++++++++++++++++++++")
      return res.status(400).json({error:error.message});
    }     
    }
)
router.post('/signup',async(req,res)=>{
    const data=req.body;
    try{
         const user=await user.findOne({email:data.email});
         if(user){
            res.status(400).json({
                error:"user already exists "
            })
         }
         const createdUser=await user.create(data);
         return res.json({user:createdUser});
    }catch(error){
         return res.status(400).json({error:error.message});
    }
})

router.get('/',isLoggedIn,async(req,res)=>{
    console.log("------username",req.params);
    try{
        let profile=await user.findOne({username});
        if(!profile){
            return res.status(400).json({error:"invalid profile"});
        }
        return res.json({profile});
    }catch(error){
        return res.status(400).json({error:error.message});
    }
})
router.post('/login',async(req,res)=>{

    let {email,password}=req.body;
         console.log("=========================",email);
    try{
        let data=await user.findOne({email:email});
        console.log("----user---",data)
        if(!data)
           { 
            res.status(400).json({
            error:"error doesn't exist "
           })
           }
         const isSame=await bcrypt.compare(password,data.password);
         if(isSame){
            console.log("-----bgf-issame");
            const token=jwt.sign({data},secret,{expiresIn:"20s"})
            console.log("--token--",token);
            res.json({token,data});
          }
          else{
            console.log("else");
            return res.status(400).send({
              msg: "Invalid password",
              statusCode: "0000000"
            });
          }
        
    }catch(Error){
        return res.status(400).send({
            msg: Error.message,
            statusCode: "0000000"
          });
    }
})
router.post('refreshToken',async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) {
      const error = new Error("token not found");
      error.statusCode = "MFBCAURT03";
      throw error;
    }

    // We have a token, let's verify it!
    let payload = null;

    payload = jwt.verify(token,secret);
    let user = await users.find({payload}).lean();

    if (!user) {
      const error = new Error("user not found");
      error.statusCode = "MFBCAURT02";
      throw error;
    }

    //user exist, check if refreshtoken exist on user
    if (user.refresh_token !== token) {
      const error = new Error("token does not match");
      error.statusCode = "MFBCAURT01";
      throw error;
    }

    console.log(user);

    const accessToken = jwt.sign(
      {
        payload //adding user role to jwt token
      },
      process.env.secret,
      { expiresIn: "20s"}
    );

    const refreshToken = jwt.sign(
      { payload },
      process.env.secret,
      { expiresIn:"10d"}
    );

    const newData = await users.findAndUpdate(
      payload,
      { refreshtoken: refreshToken }
    );
    // All good to go, send new refreshtoken and accesstoken
    let details;
     details = await users(user._id);

    return res.status(200).send({
      statusCode: "MFBAUS01",
      data: {
        accessToken: accessToken,
        refreshToken: refreshToken,
        details: details,
      },
      msg: "successful",
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = "MFBAALRRT44";
    }
    return res.status(400).send({
      statusCode: error.statusCode,
      msg: error.message,
    });
  }
})

mongoose
.connect("mongodb://0.0.0.0:27017")
.then(() => {
  console.log("Connected ");
})
.catch((err) => {
  console.log(err);
  console.log("connection failed");
});

app.listen(2000, () => {
    console.log('Authentication service started on port 2000');
});