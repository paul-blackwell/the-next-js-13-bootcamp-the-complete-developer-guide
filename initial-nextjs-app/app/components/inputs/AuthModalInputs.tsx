
interface AuthModalInputsProps {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    password: string;
  };
}

export default function AuthModalInputs({inputs}: AuthModalInputsProps) {
  return (
    <div>
      <div className="m-3 flex justify-between text-sm">
        <input
          type="text"
          className="border rounded px-2 py-3 w-[49%]"
          placeholder="First name"
          value={inputs.firstName}
        />
        <input
          type="text"
          className="border rounded px-2 py-3 w-[49%]"
          placeholder="Last name"
          value={inputs.lastName}
        />
      </div>
      <div className="m-3 flex justify-between text-sm">
        <input
          type="email"
          className="border rounded px-2 py-3 w-full"
          placeholder="Email"
          value={inputs.email}
        />
      </div>
      <div className="m-3 flex justify-between text-sm">
        <input
          type="tel"
          className="border rounded px-2 py-3 w-[49%]"
          placeholder="Phone"
          value={inputs.phone}
        />
        <input
          type="text"
          className="border rounded px-2 py-3 w-[49%]"
          placeholder="City"
          value={inputs.city}
        />
      </div>
      <div className="m-3 flex justify-between text-sm">
        <input
          type="password"
          className="border rounded px-2 py-3 w-full"
          placeholder="Password"
          value={inputs.password}
        />
      </div>
    </div>
  );
}
