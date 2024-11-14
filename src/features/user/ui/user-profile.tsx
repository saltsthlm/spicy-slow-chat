import { createUserService } from "../service";

export async function UserProfile() {
  const service = createUserService();
  const user = await service.getUser("John");
  return <div>{user as unknown}</div>;
}
