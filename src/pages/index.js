import { useSession } from "next-auth/react";
import Layout from "../../components/Layout";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <Layout>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl">Hello, {session?.user?.name}</h2>
        <div className="h-14 w-14 rounded-2xl overflow-hidden">
          <img src={session?.user?.image} alt="" />
        </div>
      </div>
    </Layout>
  );
}
