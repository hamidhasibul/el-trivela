import Navbar from "@/app/components/Navbar";
import Header from "./components/Header";
import ReserveForm from "./components/ReserveForm";

const Reservation = () => {
  return (
    <>
      <main className="bg-gray-100 min-h-screen ">
        <main className="max-w-screen-2xl m-auto bg-white">
          <Navbar />
          <div className="border-t h-screen">
            <div className="py-9 w-3/5 m-auto">
              <Header />
              <ReserveForm />
            </div>
          </div>
        </main>
      </main>
    </>
  );
};

export default Reservation;
