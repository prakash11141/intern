const ProductCard = ({
  id,
  name,
  description,
  image,
  imageAlt,
  price,
  href,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-64 group">
      <div className="w-full h-64 overflow-hidden relative">
        <img
          alt={imageAlt}
          src={image}
          className="w-full h-full object-cover object-center group-hover:opacity-75 transition-opacity duration-200"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity duration-300" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-200">
          <span className="inline-block bg-purple-700 text-white rounded-full px-3 py-1">
            <a href={href}>{name}</a>
          </span>
        </h3>
        <p className="mt-1 text-gray-600 line-clamp-2">{description}</p>
        <p className="mt-2 text-lg font-medium text-gray-900">
          <span className="inline-block bg-white text-black rounded-full px-3 py-1 border border-yellow-400 shadow-md">
            Rs.{price}
          </span>
        </p>
      </div>
      <div className="p-4 flex justify-between">
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-200 transform hover:scale-105">
          Add to Cart
        </button>
        <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded hover:bg-gray-300 transition duration-200 transform hover:scale-105">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
