export default function Header() {
  return (
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
  );
}
