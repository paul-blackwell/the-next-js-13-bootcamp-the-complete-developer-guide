import { PrismaClient } from '@prisma/client';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import SearchSidebar from './components/SearchSidebar';

const prisma = new PrismaClient();

const fetchRestaurantsBy = async (filter: {
  city?: string | undefined;
  cuisine?: string | undefined;
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

  const { city, cuisine } = filter;

  // If no city or cuisine return all restaurants
  if (city && cuisine) await prisma.restaurant.findMany({ select });

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

export default async function Search({
  searchParams,
}: {
  searchParams: { city: string | undefined; cuisine: string | undefined };
}) {
  const restaurants = await fetchRestaurantsBy(
    searchParams?.cuisine ? { cuisine: searchParams.cuisine } : { city: searchParams.city }
  );

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        {/* @ts-expect-error Server Component */}
        <SearchSidebar />
        <div className="w-5/6">
          {restaurants.length ? (
            restaurants.map((restaurant) => <RestaurantCard restaurant={restaurant} />)
          ) : (
            <p>Sorry, we found no restaurants in that area.</p>
          )}
        </div>
      </div>
    </>
  );
}
