import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";

async function userListService() {
  const userRepository = AppDataSource.getRepository(User);

  const users = userRepository.find();

  return users;
}

export default userListService;
