export default function Images({ images }: { images: string[] }) {
  return (
    <div>
      <h3 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        {images.length} photo{images.length > 1 ? 's' : ''}
      </h3>
      <div className="flex flex-wrap">
        {images.map((image, index) => (
          <img
            key={`${image}-${index}`}
            className="w-56 h-44 mr-1 object-cover"
            src={image}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}
