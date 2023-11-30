import { Inter } from '@next/font/google';

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* START NAVBAR */}
        <nav className="bg-white p-2 flex justify-between">
          <a href="#" className="font-bold text-gray-700 text-2xl">
            OpenTable
          </a>
          <div>
            <div className="flex">
              <button className="bg-blue-400 text-white border py-1 px-4 rounded mr-3">
                Sign in
              </button>
              <button className="border py-1 px-4 rounded">Sign up</button>
            </div>
          </div>
        </nav>
        {/* END NAVBAR */}
        {/* START HEADER */}
        <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
          {/* START SEARCH BAR */}
          <div className="overflow-hidden rounded text-left text-lg py-3 m-auto flex justify-center">
            <input
              className="rounded  mr-3 p-2 w-[400px]"
              type="text"
              placeholder="State, city or town"
            />
            <button className="rounded bg-red-600 px-9 py-2 text-white">Let's go</button>
          </div>
          {/* END SEARCH BAR */}
        </div>
        {/* END HEADER */}
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <div className="w-1/5">
            <div className="border-b pb-4">
              <h1 className="mb-2">Region</h1>
              <p className="font-light text-reg">Toronto</p>
              <p className="font-light text-reg">Ottawa</p>
              <p className="font-light text-reg">Montreal</p>
              <p className="font-light text-reg">Hamilton</p>
              <p className="font-light text-reg">Kingston</p>
              <p className="font-light text-reg">Niagara</p>
            </div>
            <div className="border-b pb-4 mt-3">
              <h1 className="mb-2">Cuisine</h1>
              <p className="font-light text-reg">Mexican</p>
              <p className="font-light text-reg">Italian</p>
              <p className="font-light text-reg">Chinese</p>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
