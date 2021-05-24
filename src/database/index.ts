import dotenv from "dotenv";
import { ConnectionOptions, connect } from "mongoose";
dotenv.config();
const connectionString: any = process.env.MONGODB_CONNECTION;

const connectDB = async () => {
  try {
    const options: ConnectionOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };
    await connect(connectionString, options);
    console.log("mongodb is connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;