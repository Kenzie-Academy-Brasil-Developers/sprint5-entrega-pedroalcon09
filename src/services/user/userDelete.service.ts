import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

async function userDeleteService(id: string) {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const deleteUser = users.find((user) => user.id === id);

  await userRepository.delete(deleteUser!.id);

  return true;
}

export default userDeleteService;
