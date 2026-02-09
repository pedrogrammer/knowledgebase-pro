import ClientCounter from "@/components/ClientCounter";
import { prisma } from "../../../lib/prisma";
import { createUser } from "./actions";

const DashboardPage = async () => {
  const allUsers = await prisma.user.findMany();

  return (
    <>
      <div>{JSON.stringify(allUsers, null, 2)}</div>
      <ClientCounter />
      <div>
        <button
          style={{ background: "white", color: "black" }}
          onClick={createUser}
        >
          Create a new user
        </button>
      </div>
    </>
  );
};

export default DashboardPage;
