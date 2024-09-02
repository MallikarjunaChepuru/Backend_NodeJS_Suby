const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const vendorRoutes = require("./routes/vendorRoutes");
const firmRoutes=require("./routes/firmRoutes")
const productRoutes=require("./routes/productRoutes")
const path=require("path")
dotenv.config();
const app = express();
const PORT =process.env.PORT|| 6060;
app.use(express.json());
app.use(bodyParser.json());
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongodb connected successfully"))
  .catch((error) => console.log(error));

app.use("/vendor", vendorRoutes);
app.use("/firm",firmRoutes)
app.use("/product",productRoutes)
app.use("/uploads",express.static("uploads"))
app.listen(PORT, () => {
  console.log(`Server started and running at ${PORT}`);
});


app.use("/",(req,res)=>{
res.send("<h1>Welcome to suby</h1>")
})