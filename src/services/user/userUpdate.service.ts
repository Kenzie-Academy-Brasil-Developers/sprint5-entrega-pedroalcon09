import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/users";

async function userUpdateService(id: string, updatedUser: IUserUpdate) {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const updateUser = users.find((user) => user.id === id);

  const account = { ...updateUser, ...updatedUser };

  await userRepository.update(updateUser!.id, {
    name: account.name,
    email: account.email,
    age: account.age,
    updated_at: new Date(),
  });

  return true;
}

export default userUpdateService;
