interface AuthModalInputsProps {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    password: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSignIn?: boolean;
}

export default function AuthModalInputs({
  inputs,
  handleInputChange,
  isSignIn,
}: AuthModalInputsProps) {
  return (
    <div>
      {!isSignIn && (
        <div className="m-3 flex justify-between text-sm">
          <input
            type="text"
            className="border rounded px-2 py-3 w-[49%]"
            placeholder="First name"
            value={inputs.firstName}
            name="firstName"
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="border rounded px-2 py-3 w-[49%]"
            placeholder="Last name"
            value={inputs.lastName}
            name="lastName"
            onChange={handleInputChange}
          />
        </div>
      )}
      <div className="m-3 flex justify-between text-sm">
        <input
          type="email"
          className="border rounded px-2 py-3 w-full"
          placeholder="Email"
          value={inputs.email}
          name="email"
          onChange={handleInputChange}
        />
      </div>
      {!isSignIn && (
        <div className="m-3 flex justify-between text-sm">
          <input
            type="tel"
            className="border rounded px-2 py-3 w-[49%]"
            placeholder="Phone"
            value={inputs.phone}
            name="phone"
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="border rounded px-2 py-3 w-[49%]"
            placeholder="City"
            value={inputs.city}
            name="city"
            onChange={handleInputChange}
          />
        </div>
      )}
      <div className="m-3 flex justify-between text-sm">
        <input
          type="password"
          className="border rounded px-2 py-3 w-full"
          placeholder="Password"
          value={inputs.password}
          name="password"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
