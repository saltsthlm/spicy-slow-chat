export function LoginForm() {
  return (
    <form action="">
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <button
        type="submit"
        className="bg-gray-100 hover:bg-gray-200 p-2 mt-2 w-full"
      >
        Login
      </button>
    </form>
  );
}
