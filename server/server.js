const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");
const openaiRoutes = require("./routes/openai-routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/openai", openaiRoutes);

app.listen(port, () => {
  console.log("Connected!");
});
