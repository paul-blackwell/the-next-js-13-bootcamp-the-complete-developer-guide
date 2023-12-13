import Link from 'next/link';
import Header from './components/Header';
import NavBar from './components/NavBar';
import RestaurantCard from './components/RestaurantCard';

export default function Home() {

  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <main>
          <Header />
          {/* START OF CARDS */}
          <div className="py-3 px-36 mt-10 flex flex-wrap">
            <RestaurantCard />
          </div>
          {/* END OF CARDS */}
        </main>
      </main>
    </main>
  );
}
