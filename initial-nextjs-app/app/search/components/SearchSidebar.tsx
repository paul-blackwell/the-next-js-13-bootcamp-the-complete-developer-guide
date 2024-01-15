import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const fetchLocations = async () => {
  return await prisma.location.findMany({
    select: {
      id: true,
      name: true,
    }
  });
};


export default async function SearchSidebar() {
  const locations =  await fetchLocations();
  console.log(locations);

  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>

        {/* <p className="font-light text-reg">Toronto</p>
        <p className="font-light text-reg">Ottawa</p>
        <p className="font-light text-reg">Montreal</p>
        <p className="font-light text-reg">Hamilton</p>
        <p className="font-light text-reg">Kingston</p>
        <p className="font-light text-reg">Niagara</p> */}
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Cuisine</h1>
        <p className="font-light text-reg">Mexican</p>
        <p className="font-light text-reg">Italian</p>
        <p className="font-light text-reg">Chinese</p>
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
