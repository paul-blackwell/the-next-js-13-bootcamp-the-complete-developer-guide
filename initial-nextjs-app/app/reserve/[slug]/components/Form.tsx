export default function Form() {
  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
      <input type="text" className="border rounded p-3 w-80 mb-4" placeholder="First Name" />
      <input type="text" className="border rounded p-3 w-80 mb-4" placeholder="Last Name" />
      <input type="tel" className="border rounded p-3 w-80 mb-4" placeholder="Phone number" />
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
        By clicking “Complete booking” you agree to our Terms of Use and Privacy Policy. Message &
        data rates may apply. You can opt out of receiving text messages at any time in your account
        settings or by replying STOP.
      </p>
    </div>
  );
}
