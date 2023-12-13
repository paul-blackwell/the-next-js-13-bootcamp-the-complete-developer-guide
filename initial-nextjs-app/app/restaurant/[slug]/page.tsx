import Link from "next/link";
import NavBar from "../../components/NavBar";

export default function RestaurantDetails() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
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
              <Link href="/restaurant/milestone-grill" className="mr-7">
                Overview
              </Link>
              <Link href="/restaurant/milestone-grill/menu" className="mr-7">
                Menu
              </Link>
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
          {/* START RESERVATION CARD PORTION */}
          <div className="w-[27%] relative text-reg">
            <aside className="fixed w-[15%] bg-white rounded p-3 shadow">
              <div className="text-center border-b pb-2 font-bold">
                <h4 className="mr-7 text-lg">Make a Reservation</h4>
              </div>
              <div className="my-3 flex flex-col">
                <label htmlFor="">Party size</label>
                <select id="" name="" className="py-3 border-b font-light">
                  <option value="">1 person</option>
                  <option value="">2 person</option>
                </select>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="">Date</label>
                  <input type="text" className="py-3 border-b font-light w-28" />
                </div>
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="">Time</label>
                  <select id="" name="" className="py-3 border-b font-light">
                    <option value="">7:30 am</option>
                    <option value="">9:30 am</option>
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">
                  Find a time
                </button>
              </div>
            </aside>
          </div>
          {/* END RESERVATION CARD PORTION */}
        </div>
        {/* END DESCRIPTION PORTION */}
      </main>
    </main>
  );
}
