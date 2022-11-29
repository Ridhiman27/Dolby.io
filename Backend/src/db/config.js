import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const mongoURI = "mongodb://localhost:27017/dolby";

const connectDb = () => {
  mongoose
    .connect(mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log(`Db connection established`);
    })
    .catch((err) => {
      console.log(err.message);
      throw new Error(err.message);
    });

  mongoose.set("useFindAndModify", false);
};

export default connectDb;
