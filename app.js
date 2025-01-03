if(process.env.NODE_ENV != 'production'){
    require('dotenv').config();
}


const express = require('express');

const app = express();
const mongoose = require('mongoose');
const Hackathon = require("./models//Hackathon.js");
const path = require("path");
const methodOverride = require('method-override');
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js"); //error handling
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");//for single time flashing the alearts
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");


//using routers
const hackethongRouter = require("./routes/Hakathon.js")
const participateRoute = require("./routes/participate.js")
const userRouter = require("./routes/user.js")

const dbUrl = process.env.ATLASDB_URL;


main().then(()=>{
    console.log("connected to db");
})

.catch( err=>{
    console.log(err);
})

async function main() {
    await mongoose.connect(dbUrl);
}

//middlewares and settings
app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"));  //middleware
app.use(express.urlencoded({extended : true}));  //middleware
app.use(methodOverride('_method')); //middleware
app.engine('ejs', ejsMate);//for ejsMate
app.use(express.static(path.join(__dirname , "public")));  //middleware
app.use(express.static(path.join(__dirname , "public/Assets/css")));
app.use(express.static(path.join(__dirname , "public/Assets/img")));
app.use(express.static(path.join(__dirname , "public/Assets/js")));



const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto:{
        secret: process.env.SECRET,
    },
    touchAfter: 24*3600, //time in sec
});

store.on("error", ()=>{
    console.log("Error on MONGO SESSION STORE", err)
});

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { // Changed "Cookie" to "cookie"
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), //with this yor temp memory get stored for 7 days
        maxAge: 7 * 24 * 60 * 60 * 1000, 
    }
};


app.use(session(sessionOptions));
app.use(flash());


//for passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//Locals
app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.user;
    next();
});



app.use("/hackathon" ,hackethongRouter);
app.use("/" ,userRouter);
app.use("/hackathon/:id/participate" ,participateRoute);


//page not found error for invalid request
app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"Page Not Found!"))
})

//error handling middleware
app.use((err,req,res,next)=>{
    let { statusCode = 500, message = "Something went Wrong!"} = err;
    res.status(statusCode).render('error.ejs', {err});
});

app.listen("8080" , ()=>{
    console.log("Listening on port 8080");
});
