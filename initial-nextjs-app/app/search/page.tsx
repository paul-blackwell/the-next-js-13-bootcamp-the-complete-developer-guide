import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import SearchSidebar from './components/SearchSidebar';

export default function Search() {
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSidebar />
        <div className="w-5/6">
          {/* START RESTAURANT CARD */}
          <RestaurantCard />
          {/* END RESTAURANT CARD */}
        </div>
      </div>
    </>
  );
}
