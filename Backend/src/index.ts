import app from "./app.js"
import conncectToDatabase from "./db/connection.js";


//connection and listeners 
const PORT = process.env.PORT || 5000; 
conncectToDatabase()
.then(() => {
  app.listen(PORT, () =>
    console.log("Server Open & Connected To The Database 🤟"));
})
.catch((err) => console.log(err)); 

console.log ()

