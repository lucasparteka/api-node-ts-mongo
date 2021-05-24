import { Router } from "express"
import users from "./routes/users";

const routes = () => {
	const router = Router();
	users(router);
	return router;
}

export default routes;