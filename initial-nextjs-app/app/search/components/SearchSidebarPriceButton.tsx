import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { SearchParamsType } from '../../../types/search';

export default function SearchSidebarPriceButton({
  price,
  searchParams,
  className,
  children,
}: {
  price: 'CHEAP' | 'REGULAR' | 'EXPENSIVE';
  searchParams: SearchParamsType;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      className={twMerge('block border w-full text-reg font-light rounded-l p-2 text-center', className)}
      href={{
        pathname: '/search',
        query: {
          ...searchParams,
          price: price,
        },
      }}
    >
      {children}
    </Link>
  );
}
