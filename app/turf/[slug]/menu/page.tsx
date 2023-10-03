import { PrismaClient } from "@prisma/client";
import TurfNavbar from "../components/TurfNavbar";
import TurfCard from "./components/TurfCard";

const prisma = new PrismaClient();

const fetchGrounds = async (slug: string) => {
  const grounds = await prisma.turf.findUnique({
    where: {
      slug,
    },
    select: {
      grounds: true,
    },
  });

  if (!grounds) throw new Error();

  return grounds.grounds;
};

const TurfMenu = async ({ params }: { params: { slug: string } }) => {
  const grounds = await fetchGrounds(params.slug);
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <TurfNavbar slug={params.slug} />
        <main className="bg-white mt-5">
          <div>
            <div className="mt-4 pb-1 mb-1">
              <h1 className="font-bold text-4xl">Grounds</h1>
            </div>
            <div className="flex flex-wrap justify-between">
              {grounds.length ? (
                grounds.map((ground) => (
                  <TurfCard key={ground.id} ground={ground} />
                ))
              ) : (
                <>
                  <p>No ground info provided</p>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default TurfMenu;
