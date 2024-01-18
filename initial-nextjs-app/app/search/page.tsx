import { PrismaClient, Location, Cuisine } from '@prisma/client';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import SearchSidebar from './components/SearchSidebar';
import { SearchParamsType } from '../../types/search';

const prisma = new PrismaClient();

const fetchRestaurantsBy = async (filter?: {
  city?: string | undefined;
  cuisine?: string | undefined;
  price?: string | undefined;
}) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };

  // If no city or cuisine return all restaurants
  if (!filter) return await prisma.restaurant.findMany({ select });

  const { city, cuisine, price } = filter;
  // If no city or cuisine return all restaurants
  if (!city && !cuisine && !price) return await prisma.restaurant.findMany({ select });

  // If cuisine set return restaurants based on their cuisine
  if (cuisine) {
    return await prisma.restaurant.findMany({
      where: {
        cuisine: {
          name: {
            equals: cuisine?.toLowerCase(),
          },
        },
      },
      select,
    });
  }

  // Else return restaurants based on their location
  return await prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city?.toLowerCase(),
        },
      },
    },
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
  const restaurants = await fetchRestaurantsBy(
    searchParams?.cuisine ? { cuisine: searchParams.cuisine } : { city: searchParams.city }
  );
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
            restaurants.map((restaurant) => <RestaurantCard restaurant={restaurant} key={restaurant.id} />)
          ) : (
            <p>Sorry, we found no restaurants in that area.</p>
          )}
        </div>
      </div>
    </>
  );
}
