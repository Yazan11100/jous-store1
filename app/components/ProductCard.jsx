// app/components/ProductCard.jsx

export default function ProductCard({ image, title, description, price }) {
    return (
      <div className="bg-white text-black p-4 rounded shadow text-center">
        <img src={image} alt={title} className="w-full h-40 object-contain mb-2 rounded" />
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-700 mb-2">{description}</p>
        <p className="font-semibold mb-2">السعر: {price}</p>
        <button
          onClick={() => alert('أضفت المنتج!')}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          أضف للسلة
        </button>
      </div>
    );
  }
  