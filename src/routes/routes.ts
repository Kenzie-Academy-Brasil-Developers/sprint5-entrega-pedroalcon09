import { Router } from "express";

const routes = Router();

import userListController from "../controllers/users/userList.controller";
import userCreateController from "../controllers/users/userCreate.controller";
import userListOneController from "../controllers/users/userListOne.controller";
import userDeleteController from "../controllers/users/userDelete.controller";
import userUpdateController from "../controllers/users/userUpdate.controller";

routes.post("/users", userCreateController);
routes.get("/users", userListController);
routes.get("/users/:id", userListOneController);
routes.delete("/users/:id", userDeleteController);
routes.patch("/users/:id", userUpdateController);

export default routes;
