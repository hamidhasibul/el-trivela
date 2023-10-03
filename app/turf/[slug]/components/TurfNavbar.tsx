import Link from "next/link";
import React from "react";

const TurfNavbar = ({ slug }: { slug: string }) => {
  return (
    <>
      <nav className="flex text-reg border-b pb-2">
        <Link href={`/turf/${slug}`} className="mr-7">
          Overview
        </Link>
        <Link href={`/turf/${slug}/menu`} className="mr-7">
          Menu
        </Link>
      </nav>
    </>
  );
};

export default TurfNavbar;
