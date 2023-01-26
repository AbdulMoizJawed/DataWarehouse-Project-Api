const connectToMongo = require("./db");
const express = require("express");

connectToMongo();

const app = express();
const port = 5000;
app.use(express.json());

// Available Routes
app.get("/", (req, res) => {
  res.send("Backend API");
});
// app.use('/api/auth', require('./routes/auth.js'));
app.use("/api/datawarehouse", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Exampple app listening on port ${port}`);
});
