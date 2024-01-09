import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import SearchSidebar from './components/SearchSidebar';

export default function Search({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <Header searchParams={searchParams} />
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
