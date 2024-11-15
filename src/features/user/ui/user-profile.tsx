import { userFeature } from "../instance";

export async function UserProfile() {
  const user = await userFeature.userService.getUser("John Wick");
  console.log(user[0]);
  const userName = user[0].username;

  return <div>{userName && userName}</div>;
}
