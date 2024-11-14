import { createUserService } from "./service";

export function createUserFeature() {
  const userService = createUserService();
  return {
    userService,
  };
}
