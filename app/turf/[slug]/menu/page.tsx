import TurfNavbar from "../components/TurfNavbar";
import TurfCard from "./components/TurfCard";

const TurfMenu = () => {
  return (
    <>
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
    </>
  );
};

export default TurfMenu;
