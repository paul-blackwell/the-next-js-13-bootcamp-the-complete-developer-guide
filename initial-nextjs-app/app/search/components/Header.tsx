import { PrismaClient, Location } from '@prisma/client';
import SearchBar from '../../components/SearchBar';

interface Restaurant {
  id: number;
  name: string;
  main_image: string;
  slug: string;
  location: Location;
}

const prisma = new PrismaClient();

const fetchRestaurantsByLocation = async (
  location: string | string[] | undefined
): Promise<Restaurant> => {
  let restaurants;

  // If no location return all restaurants (max amount 24)
  if (!location) {
    restaurants = await prisma.restaurant.findMany({
      take: 24,
      select: {
        id: true,
        name: true,
        main_image: true,
        cuisine: true,
        location: true,
        price: true,
        slug: true,
      },
    });
  }

  if (location) {
    restaurants = await prisma.restaurant.findMany({
      where: {
        location: {
          name: {
            contains: location,
          },
        },
      },
      select: {
        id: true,
        name: true,
        main_image: true,
        cuisine: true,
        location: true,
        price: true,
        slug: true,
      },
    });
  }

  console.log(restaurants);
  // const restaurant = await prisma.restaurant.findUnique({
  //   where: {
  //     slug,
  //   },
  //   select: {
  //     id: true,
  //     name: true,
  //     main_image: true,
  //     slug: true,
  //   },
  // });
  // // TODO
  // if (!restaurant) {
  //   throw new Error();
  // }
  // return restaurant;
};

export default async function Header({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  // const {city} : string | null | undefined = searchParams;
  const restaurants = await fetchRestaurantsByLocation(searchParams?.city);

  // { city: 'toronto' }
  console.log('searchParams:', searchParams?.city);

  return (
    <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
      <SearchBar />
    </div>
  );
}
