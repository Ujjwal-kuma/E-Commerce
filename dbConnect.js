let mongoose  = require('mongoose');
let url = "mongodb+srv://ujjwal:ujjwal123@cluster0.ge5s5st.mongodb.net/"



let dbConnect = async()=>{
   await mongoose.connect(url);
}

module.exports = dbConnect;







