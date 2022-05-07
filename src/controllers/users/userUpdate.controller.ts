import { Request, Response } from "express";
import userUpdateService from "../../services/user/userUpdate.service";

async function userUpdateController(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const userUpdate = req.body;

    if (!userUpdate) {
      throw new Error("No info to update");
    }

    const user = await userUpdateService(id, userUpdate);

    return res.status(200).json({ message: "User updated!" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
}

export default userUpdateController;
