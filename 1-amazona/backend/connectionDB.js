import mongoose from "mongoose";

const URI = "mongodb+srv://bahtiyar:lenovo17@cluster0.4acqb.mongodb.net/test";

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URL || URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("DB connected...!");
};

export default connectDB;
