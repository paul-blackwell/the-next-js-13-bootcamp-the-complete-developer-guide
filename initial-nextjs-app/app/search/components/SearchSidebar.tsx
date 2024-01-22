import { Location, Cuisine } from '@prisma/client';
import Link from 'next/link';
import { SearchParamsType } from '../../../types/search';
import SearchSidebarPriceButton from './SearchSidebarPriceButton';

export default function SearchSidebar({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: SearchParamsType;
}) {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        {locations?.map((location) => (
          <Link
            className="block font-light text-reg capitalize"
            href={{
              pathname: '/search',
              query: {
                ...searchParams,
                city: location.name,
              },
            }}
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
            className="block font-light text-reg capitalize"
            href={{
              pathname: '/search',
              query: {
                ...searchParams,
                cuisine: cuisine.name,
              },
            }}
            key={cuisine.id}
          >
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2"></h1>
        <div className="flex">
          <SearchSidebarPriceButton price="CHEAP" searchParams={searchParams}>
            $
          </SearchSidebarPriceButton>
          <SearchSidebarPriceButton
            className="rounded-none"
            price="REGULAR"
            searchParams={searchParams}
          >
            $$
          </SearchSidebarPriceButton>
          <SearchSidebarPriceButton
            className="rounded-l-none rounded-r"
            price="EXPENSIVE"
            searchParams={searchParams}
          >
            $$$
          </SearchSidebarPriceButton>
        </div>
      </div>
    </div>
  );
}
