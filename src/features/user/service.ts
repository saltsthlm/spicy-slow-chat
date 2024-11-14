import { createRepository } from "./repository";

const repository = createRepository();

export function createUserService() {
  return {
    getUser(name: string) {
      return repository.loginUserInDb(name);
    },
  };
}
