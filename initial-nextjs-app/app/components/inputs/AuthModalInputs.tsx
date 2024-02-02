export default function AuthModalInputs() {
  return (
    <div>
      <div className="m-3 flex justify-between text-sm">
        <input type="text" className="border rounded px-2 py-3 w-[49%]" placeholder="First name" />
        <input type="text" className="border rounded px-2 py-3 w-[49%]" placeholder="Last name" />
      </div>
      <div className="m-3 flex justify-between text-sm">
        <input type="email" className="border rounded px-2 py-3 w-full" placeholder="Email" />
      </div>
      <div className="m-3 flex justify-between text-sm">
        <input type="tel" className="border rounded px-2 py-3 w-[49%]" placeholder="Phone" />
        <input type="text" className="border rounded px-2 py-3 w-[49%]" placeholder="City" />
      </div>
      <div className="m-3 flex justify-between text-sm">
        <input type="password" className="border rounded px-2 py-3 w-full" placeholder="Password" />
      </div>
    </div>
  );
}
