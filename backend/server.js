const express = require("express")

const app = express()

app.use((req, res, next) => {
    console.log("new request made:");
    console.log("host: ", req.hostname);
    console.log("path: ", req.path);
    console.log("method: ", req.method);
    next();
});

app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})


app.listen(4000, () => {
    console.log('listening on port 4000!!!')
})

// redirect example

// app.get("/about-us", (req, res) => {
//     res.redirect("/about")
// });


// 404 page not found

// app.use((req, res) => {
//     res.status(404).sendFile(".views/404.html", {root: __dirname})  // need to make 404.html and might need to change "" to ''
// });
