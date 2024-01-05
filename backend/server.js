// required packages
    // installed packages
const express = require("express")
const mongoose = require("mongoose")
    // my packages
const userRouter = require("./routes/userRouter")
const deckRouter = require("./routes/deckRouter")
const User = require("./models/userModel")

// express app
const app = express()

// middleware, reformats the req into json
app.use(express.json())

// outputs to console info on each request
app.use((req, res, next) => {
    console.log("new request made:");
    console.log("host: ", req.hostname);
    console.log("path: ", req.path);
    console.log("method: ", req.method);
    next();
});

// basic routes
app.get('/', (req, res) => {    // home page
    res.json({mssg: 'Welcome to the app'})
});

// trade home page
app.get("/trade", async (req, res) => {
    res.json({mssg: "Welcome to the trade page"})
})

// all routes for user page, found in /routes/userRouter.js
app.use("/user", userRouter);

// all routes for user page, found in /routes/userRouter.js
app.use("/deck", deckRouter);

// connect to local mongodb
const uri = "mongodb://localhost:27017/MTG-Website-2"
mongoose.connect(uri)
    .then(() => {
        // listen for requests after conencting to db
        app.listen(4000, () => {
            console.log('connected to db and listening on port 4000!!!')
        })
    })
    .catch((error) => { // catches any errors when connecting to db
        console.log(error)
    });

// app.listen(4000, () => {
//     console.log('listening on port 4000!!!')
// });

// redirect example

// app.get("/about-us", (req, res) => {
//     res.redirect("/about")
// });


// 404 page not found

// app.use((req, res) => {
//     res.status(404).sendFile(".views/404.html", {root: __dirname})  // need to make 404.html and might need to change "" to ''
// });
