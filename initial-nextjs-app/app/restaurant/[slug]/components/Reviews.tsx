export default function Reviews () {
  return (
    <div>
      <h5 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">What 100 people are saying</h5>
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
                Great service, very friendly, had looked at our dietary requirements beforehand. The
                halloumi burger was tasty. The only downside is that there could have been more
                vegetarian and vegan options. Breakfast was overpriced for what it was and not many
                vegan options.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* END REVIEW CARD */}
    </div>
  );
}
