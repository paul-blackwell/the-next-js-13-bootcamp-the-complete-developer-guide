import { PrismaClient, Location, Cuisine } from '@prisma/client';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import SearchSidebar from './components/SearchSidebar';
import { SearchParamsType } from '../../types/search';

const prisma = new PrismaClient();

const fetchRestaurantsBySearchParams = async (searchParams?: SearchParamsType) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };

  const where: any = {};

  if (searchParams?.city) {
    where.location = {
      name: {
        equals: searchParams.city.toLowerCase(),
      },
    };
  }

  if (searchParams?.cuisine) {
    where.cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase(),
      },
    };
  }

  if (searchParams?.price) {
    where.price = {
      equals: searchParams.price,
    };
  }

  return prisma.restaurant.findMany({
    where,
    select,
  });
};

const fetchLocations = async (): Promise<Location[]> => {
  return await prisma.location.findMany();
};

const fetchCuisines = async (): Promise<Cuisine[]> => {
  return await prisma.cuisine.findMany();
};

export default async function Search({ searchParams }: { searchParams: SearchParamsType }) {
  const restaurants = await fetchRestaurantsBySearchParams(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        {/* @ts-expect-error Server Component */}
        <SearchSidebar locations={locations} cuisines={cuisines} searchParams={searchParams} />
        <div className="w-5/6">
          {restaurants.length ? (
            restaurants.map((restaurant) => (
              <RestaurantCard restaurant={restaurant} key={restaurant.id} />
            ))
          ) : (
            <p>Sorry, we found no restaurants in that area.</p>
          )}
        </div>
      </div>
    </>
  );
}
