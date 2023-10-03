import TurfNavbar from "./components/TurfNavbar";
import Title from "./components/Title";
import Ratings from "./components/Ratings";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Turf {
  id: number;
  name: string;
  description: string;
  images: string[];
  slug: string;
}

const fetchTurfBySlug = async (slug: string): Promise<Turf> => {
  const turf = await prisma.turf.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      slug: true,
    },
  });

  if (!turf) throw new Error();

  return turf;
};

const TurfDetails = async ({ params }: { params: { slug: string } }) => {
  const turf = await fetchTurfBySlug(params.slug);

  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <TurfNavbar slug={turf.slug} />
        <Title title={turf.name} />
        <Ratings />
        <Description description={turf.description} />
        <Images images={turf.images} />
        <Reviews />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
    </>
  );
};

export default TurfDetails;
