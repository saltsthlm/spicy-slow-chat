import { userFeature } from "../instance";

export async function UserProfile() {
  const user = await userFeature.userService.getUser("John Wick");

  const username = user[0].username;

  return (
    <>
      <div
        className={`p-4 w-full m-2 flex rounded-sm ${
          username ? "bg-gray-300" : "bg-gray-300"
        }`}
      >
        {username ? (
          <h1>Welcome, {username}!</h1>
        ) : (
          <div>
            <input placeholder="Enter your name" />
            <button className="bg-white p-3">Login</button>
          </div>
        )}
      </div>
    </>
  );
}
