import { Location, PRICE_TYPE, Turf, TurfType } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface Props {
  id: number;
  name: string;
  main_img: string;
  slug: string;
  price_type: PRICE_TYPE;
  location: Location;
  turf_type: TurfType;
}

const TurfCard = ({ turf }: { turf: Props }) => {
  return (
    <>
      {/* RESAURANT CAR */}

      <div className="border-b flex pb-5">
        <img src={turf.main_img} alt="" className="w-44 rounded" />
        <div className="pl-5">
          <h2 className="text-3xl">{turf.name}</h2>
          <div className="flex items-start">
            <div className="flex mb-2">*****</div>
            <p className="ml-2 text-sm">Awesome</p>
          </div>
          <div className="mb-9">
            <div className="font-light flex text-reg">
              <p className="mr-4">{turf.price_type}</p>
              <p className="mr-4">{turf.turf_type.name}</p>
              <p className="mr-4">{turf.location.name}</p>
            </div>
          </div>
          <div className="text-red-600">
            <Link href={`/turf/${turf.slug}`}>View more information</Link>
          </div>
        </div>
      </div>

      {/* RESAURANT CAR */}
    </>
  );
};

export default TurfCard;
