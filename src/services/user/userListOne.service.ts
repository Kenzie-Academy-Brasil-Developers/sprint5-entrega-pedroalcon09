import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

async function userListOneService(id: string) {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const user = users.find((elem) => elem.id === id);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}

export default userListOneService;
