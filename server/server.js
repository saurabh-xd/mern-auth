import express from "express"
import cors from "cors"
import 'dotenv/config'
import cookieParser from "cookie-parser"
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();

const port = process.env.PORT || 4000
connectDB();

const allowedOrigins = ['https://mern-auth-vbcd.onrender.com']

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({origin: allowedOrigins ,credentials: true}))

app.use("/api/auth/", authRouter)
app.use("/api/user/", userRouter)

app.get('/', (req,res)=> res.send("hello"))

app.listen(port, ()=> console.log(`server started on PORT: localhost:${port}`)
)




