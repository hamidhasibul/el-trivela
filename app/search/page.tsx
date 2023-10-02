import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TurfCard from "./components/TurfCard";

const SearchTurf = () => {
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <Sidebar />
        <TurfCard />
      </div>
    </>
  );
};

export default SearchTurf;
