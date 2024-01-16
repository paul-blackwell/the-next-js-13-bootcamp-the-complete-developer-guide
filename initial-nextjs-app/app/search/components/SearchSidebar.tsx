import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const prisma = new PrismaClient();

interface LocationType {
  id: number,
  name: string,
}

interface CuisineType {
  id: number;
  name: string;
}

const fetchLocations = async (): Promise<LocationType[]> => {
  return await prisma.location.findMany({
    select: {
      id: true,
      name: true,
    },
  });
};

const fetchCuisines = async (): Promise<CuisineType[]> => {
  return await prisma.cuisine.findMany({
    select: {
      id: true,
      name: true,
    },
  });
};


export default async function SearchSidebar() {
  const locations =  await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        {locations?.map((location) => (
          <Link
            className="block font-light text-reg"
            href={`/search?city=${location.name}`}
            key={location.id}
          >
            {location.name}
          </Link>
        ))}
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines?.map((cuisine) => (
          <Link
            className="block font-light text-reg"
            href={`/search?cuisine=${cuisine.name}`}
            key={cuisine.id}
          >
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2"></h1>
        <div className="flex">
          <button className="border w-full text-reg font-light rounded-l p-2">$</button>
          <button className="border-r border-t border-b w-full text-reg font-light p-2">$$</button>
          <button className="border-r border-t border-b w-full text-reg font-light rounded-r p-2">
            $$$
          </button>
        </div>
      </div>
    </div>
  );
}
