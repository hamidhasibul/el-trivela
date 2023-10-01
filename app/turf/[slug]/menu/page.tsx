import Navbar from "@/app/components/Navbar";
import Header from "../components/Header";
import TurfNavbar from "../components/TurfNavbar";
import TurfCard from "./components/TurfCard";

const TurfMenu = () => {
  return (
    <>
      <main className="bg-gray-100 min-h-screen w-screen">
        <main className="max-w-screen-2xl m-auto bg-white">
          <Navbar />
          <Header />
          <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
            <div className="bg-white w-[100%] rounded p-3 shadow">
              <TurfNavbar />
              <main className="bg-white mt-5">
                <div>
                  <div className="mt-4 pb-1 mb-1">
                    <h1 className="font-bold text-4xl">Menu</h1>
                  </div>
                  <div className="flex flex-wrap justify-between">
                    <TurfCard />
                  </div>
                </div>
              </main>
            </div>
          </div>
        </main>
      </main>
    </>
  );
};

export default TurfMenu;
