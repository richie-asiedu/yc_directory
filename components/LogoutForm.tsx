"use client";
import { signOut } from "next-auth/react";

export default function LogoutForm() {
  const handleLogout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signOut();
  };

  return (
    <form onSubmit={handleLogout}>
      <button type="submit" className='text-[#EF4444]'>Logout</button>
    </form>
  );
}
