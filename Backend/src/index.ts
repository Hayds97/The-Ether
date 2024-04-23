import app from "./app.js"
import conncectToDatabase from "./db/connection.js";


//connection and listeners 
conncectToDatabase()
.then(() => {
  app.listen(5000, () =>
    console.log("Server Open & Connected To The Database 🤟"));
})
.catch((err) => console.log(err)); 
