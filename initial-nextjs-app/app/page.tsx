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
        <div className="h-96 overflow-hidden">
          <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
            <h1 className="text-7xl text-white capitalize text-shadow text-center">
              Meadow Kitchen (Toronto)
            </h1>
          </div>
        </div>
        {/* END HEADER */}
        {/* START DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            {/* START RESTAURANT NAVBAR */}
            <nav className="flex text-reg border-b pb-2">
              <a href="#" className="mr-7">
                Overview
              </a>
              <a href="#" className="mr-7">
                Menu
              </a>
            </nav>
            {/* END RESTAURANT NAVBAR */}
            {/* START TITLE */}
            <div className="mt-4 border-b pb-6">
              <h2 className="font-bold text-6xl">Milestone Grill</h2>
            </div>
            {/* END TITLE */}
            {/* START RATINGS */}
            <div className="flex items-end">
              <div className="ratings mt-2 flex items-center">
                <p>*****</p>
                <p className="text-reg ml-3">4.9</p>
              </div>
              <div>
                <p className="text-reg ml-3">600 reviews</p>
              </div>
            </div>
            {/* END RATINGS */}
            {/* START DESCRIPTION */}
            <div className="mt-4">
              <p className="text-lg font-light">
                The Dining Rooms located in Albion House, right beside the sea in Ramsgate. The
                restaurant is composed of elegant Georgian rooms overlooking Ramsgate's Royal
                Harbour and the impressive Mayors' Chamber which has a great, relaxed atmosphere.
              </p>
            </div>
            {/* END DESCRIPTION */}
            {/* START IMAGES */}
            <h3 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">7 photos</h3>
            <div className="flex flex-wrap">
              <img
                className="w-56 h-44 mr-1 object-cover"
                src="https://resizer.otstatic.com/v2/photos/xlarge/3/48135639.webp"
                alt=""
              />
              <img
                className="w-56 h-44 mr-1 object-cover"
                src="https://resizer.otstatic.com/v2/photos/xlarge/2/42309022.webp"
                alt=""
              />
              <img
                className="w-56 h-44 mr-1 object-cover"
                src="https://resizer.otstatic.com/v2/photos/xlarge/2/48147648.webp"
                alt=""
              />
              <img
                className="w-56 h-44 mr-1 object-cover"
                src="https://resizer.otstatic.com/v2/photos/xlarge/3/48147646.webp"
                alt=""
              />
              <img
                className="w-56 h-44 mr-1 object-cover"
                src="https://resizer.otstatic.com/v2/photos/xlarge/2/48135424.webp"
                alt=""
              />
            </div>
            {/* END IMAGES */}
            {/* START REVIEWS */}
            <div>
              <h5 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                What 100 people are saying
              </h5>
              {/* START REVIEW CARD */}
              <div className="border-b pb-7 mb-7">
                <div className="flex">
                  <div className="w-1/6 flex flex-col items-center">
                    <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                      <span className="text-white text-2xl">JS</span>
                    </div>
                    <p className="text-center">James Smith</p>
                  </div>
                  <div className="ml-10 w-5/6">
                    <div className="flex items-center">
                      <div className="flex mr-5">*****</div>
                    </div>
                    <div className="mt-5">
                      <p className="text-lg font-light">
                        Great service, very friendly, had looked at our dietary requirements
                        beforehand. The halloumi burger was tasty. The only downside is that there
                        could have been more vegetarian and vegan options. Breakfast was overpriced
                        for what it was and not many vegan options.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* END REVIEW CARD */}
            </div>
            {/* END REVIEWS */}
          </div>
        </div>
        {/* END DESCRIPTION PORTION */}
      </main>
    </main>
  );
}
