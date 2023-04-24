import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-slate-500 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="bg-white p-2 px-4 rounded-lg"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-slate-500 w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col ">
        <span className="text-2xl text-blue-950 py-4">
          Logged in as {session.user.email}
        </span>
        <button
          className="bg-white p-2 px-4 rounded-lg"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
