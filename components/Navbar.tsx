"use client";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import LoginForm from "./LoginForm";
import LogoutForm from "./LogoutForm";

const Navbar = () => {
  const { data: session } = useSession();
  return (
  <header className="fixed top-0 left-0 w-full z-100 px-5 py-3 bg-white shadow-sm">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/YCDirectory.png" alt="logo" width={144} height={30}/>
        </Link>

        <div className="flex items-center gap-5 text-black font-extrabold font-sans">
        {session && session.user ? (
          <>
            <Link href="/create">
              <span>Create</span>
            </Link>
            <LogoutForm />
            <Link href={`/user/${session.user.id || "me"}`}>
              {session.user.image ? (
                <div
                  className="w-8 h-8 rounded-full border border-gray-300 bg-cover bg-center"
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  title={session.user.name || session.user.email || "User Avatar"}
                />
              ) : (
                <span>{session.user.name || session.user.email}</span>
              )}
            </Link>
          </>
        ) : (
          <LoginForm />
        )}
      </div>
      </nav>
    </header>
  )
}

export default Navbar
