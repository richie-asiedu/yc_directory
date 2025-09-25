"use client";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signIn("github");
  };

  return (
    <form onSubmit={handleLogin}>
      <button type="submit" className="text-[#EF4444]">Login</button>
    </form>
  );
}
