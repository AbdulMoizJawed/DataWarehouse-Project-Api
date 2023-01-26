const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://Moiz:Rojarcm5@cluster0.brfjb.mongodb.net/inotebook?retryWrites=true&w=majority'

const connectToMongo = () => {
//   mongoose.connect(mongoURL, () => {
//         console.log("connected to mongo Successfully");
//   })
mongoose.connect(mongoURL)
.then(() => {
  console.log("DB Connected Successfully");
}).catch((err) => {
  console.log(err)
})
}

module.exports = connectToMongo;