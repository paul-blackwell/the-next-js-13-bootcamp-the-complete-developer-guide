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
        <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full justify-center items-center">
          <h1 className="text-7xl text-white capitalize text-shadow text-center">Meadow Kitchen (Toronto)</h1>
        </div>
        {/* END HEADER */}
      </main>
    </main>
  );
}
