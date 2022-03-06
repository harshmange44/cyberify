const express = require("express");
const app = express();
const dotenv = require("dotenv");
const breachRoute = require("./routes/breach");
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(cors())

dotenv.config();
//app.use(express.json());

app.use(bodyParser.urlencoded(
    { extended:true }
));
app.use(bodyParser.json());
app.use("/api/breach", breachRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running...")
});
