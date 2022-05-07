import { Request, Response } from "express";
import userListService from "../../services/user/userList.service";

async function userListController(req: Request, res: Response) {
  try {
    const users = await userListService();

    return res.status(200).send(users);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
}

export default userListController;
