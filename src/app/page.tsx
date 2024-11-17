import Link from "next/link";

export default async function Home() {
  return (
    <>
      <h1>Welcome to Spicy Slow Chat</h1>
      <Link href="/login-page">Lets get Started</Link>
    </>
  );
}
