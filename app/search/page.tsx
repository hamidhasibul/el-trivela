import { PRICE_TYPE, PrismaClient } from "@prisma/client";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TurfCard from "./components/TurfCard";

const prisma = new PrismaClient();

/* export interface TurfCardType {
  id: number;
  name: string;
  main_img: string;
  slug: string;
  price_type: PRICE_TYPE;
  location: {
    name: string;
  };
  turf_type: {
    name: string;
  };
} */

const select = {
  id: true,
  name: true,
  main_img: true,
  slug: true,
  price_type: true,
  location: true,
  turf_type: true,
};

const fetchTurfsByLocation = async (location: string | undefined) => {
  if (!location)
    return await prisma.turf.findMany({
      select,
    });

  const turfs = await prisma.turf.findMany({
    where: {
      location: {
        name: {
          equals: location,
        },
      },
    },
    select,
  });

  return turfs;
};

const SearchTurf = async ({
  searchParams,
}: {
  searchParams: { city: string };
}) => {
  const turfs = await fetchTurfsByLocation(searchParams.city);

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <Sidebar />
        <div className="w-5/6">
          {turfs.length > 0 ? (
            <>
              {turfs?.map((turf) => (
                <TurfCard key={turf.id} turf={turf} />
              ))}
            </>
          ) : (
            <>
              <p>No turfs found in that location</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchTurf;
