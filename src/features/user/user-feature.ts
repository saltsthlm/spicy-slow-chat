import { createRepository } from "./repository";
import { createUserService } from "./service";

export function createUserFeature() {
  const userRepository = createRepository();
  const userService = createUserService(userRepository);
  return {
    userService,
  };
}
