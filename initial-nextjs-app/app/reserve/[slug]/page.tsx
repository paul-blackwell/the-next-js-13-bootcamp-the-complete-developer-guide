export default function ReservationPage () {
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
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            {/* START HEADER */}
            <div>
              <h3 className="font-bold">You're almost done!</h3>
              <div className="mt-5 flex">
                <img
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/57591789.jpg"
                  alt=""
                  className="w-32 h-18 rounded object-cover"
                />
                <div className="ml-4">
                  <h1 className="text-3xl font-bold">Côte Brasserie - Lewes</h1>
                  <div className="flex mt-3">
                    <p className="mr-6">Tues, 22, 2023</p>
                    <p className="mr-6">7:30 PM</p>
                    <p className="mr-6">3 people</p>
                  </div>
                </div>
              </div>
            </div>
            {/* END HEADER */}
            {/* START FORM */}
            <div className="mt-10 flex flex-wrap justify-between w-[660px]">
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="First Name"
              />
              <input type="text" className="border rounded p-3 w-80 mb-4" placeholder="Last Name" />
              <input
                type="tel"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Phone number"
              />
              <input type="email" className="border rounded p-3 w-80 mb-4" placeholder="Email" />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Occasion (optional)"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Requests (optional)"
              />
              <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
                Complete reservation
              </button>
              <p className="mt-4 text-sm">
                By clicking “Complete booking” you agree to our Terms of Use and Privacy Policy.
                Message & data rates may apply. You can opt out of receiving text messages at any
                time in your account settings or by replying STOP.
              </p>
            </div>
            {/* END FORM */}
          </div>
        </div>
      </main>
    </main>
  );
}
