import { Repository } from "./repository";
export function createUserService(repository: Repository) {
  return {
    getUser(name: string) {
      return repository.loginUserInDb(name);
    },
  };
}
