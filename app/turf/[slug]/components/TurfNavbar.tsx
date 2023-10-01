import Link from "next/link";
import React from "react";

const TurfNavbar = () => {
  return (
    <>
      <nav className="flex text-reg border-b pb-2">
        <Link href={"/turf/asd"} className="mr-7">
          Overview
        </Link>
        <Link href={"/turf/asdasd/menu"} className="mr-7">
          Menu
        </Link>
      </nav>
    </>
  );
};

export default TurfNavbar;
