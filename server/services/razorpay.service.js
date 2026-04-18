import dotenv from "dotenv";
dotenv.config();
import Razorpay from "razorpay";

var razorpay = new Razorpay({
  key_id: process.env.Razorpay_KEY_ID,
  key_secret: process.env.Razorpay_KEY_SECRET,
});

export default razorpay;
