import { Router} from "express"; 
import userRoutes from "./user-routes.js";
import chatRoutes from "./chat-routes.js";
import app from "../app.js";
import { userSignup } from "../controllers/user-controllers.js";

const appRouter = Router(); 

appRouter.use("/user", userRoutes, userSignup); //domain/api/v1/user
appRouter.use("/chats", chatRoutes); //domain/api/v1/chats


export default appRouter; 
