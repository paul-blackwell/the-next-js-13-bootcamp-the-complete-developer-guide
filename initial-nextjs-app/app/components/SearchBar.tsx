'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const router = useRouter();
  const [location, setLocation] = useState('');

  // { city: 'toronto' }
  console.log(searchParams);

  return (
    <div className="overflow-hidden rounded text-left text-lg py-3 m-auto flex justify-center">
      <input
        className="rounded  mr-3 p-2 w-[400px]"
        type="text"
        placeholder="State, city or town"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="rounded bg-red-600 px-9 py-2 text-white"
        onClick={() => {
          if (!location) return;
          router.push(`/search?city=${location}`);
          setLocation('');
        }}
      >
        Let's go
      </button>
    </div>
  );
}
