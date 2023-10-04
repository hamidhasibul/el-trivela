import Header from "./components/Header";
import TurfCard from "./components/TurfCard";
import { Location, PRICE_TYPE, PrismaClient, TurfType } from "@prisma/client";

const prisma = new PrismaClient();

export interface TurfCardType {
  id: number;
  name: string;
  main_img: string;
  turf_type: TurfType;
  location: Location;
  price_type: PRICE_TYPE;
  slug: string;
}

const fetchTurfs = async (): Promise<TurfCardType[]> => {
  const turfs = await prisma.turf.findMany({
    select: {
      id: true,
      name: true,
      main_img: true,
      turf_type: true,
      location: true,
      price_type: true,
      slug: true,
    },
  });

  return turfs;
};

export default async function Home() {
  const turfs = await fetchTurfs();

  return (
    <>
      <main>
        <Header />
        <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
          {turfs.map((turf) => (
            <TurfCard key={turf.id} turf={turf} />
          ))}
        </div>
      </main>
    </>
  );
}
