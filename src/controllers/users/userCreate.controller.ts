import { Request, Response } from "express";
import userCreateService from "../../services/user/userCreate.service";

async function userCreateController(req: Request, res: Response) {
  try {
    const { name, email, password, age } = req.body;

    const newUser = await userCreateService({ name, email, password, age });

    return res.status(201).send(newUser);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
}

export default userCreateController;
