import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TurfCard from "./components/TurfCard";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <main>
          <Header />
          <TurfCard />
        </main>
      </main>
    </main>
  );
}
