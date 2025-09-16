import CartBtn from "./CartBtn";


export default function ProductCard({ product }) {
    const { name, finalPrice, discountPercentage, originalPrice, thumbnail, colors, _id } = product
    return (
        <div className="w-64 bg-white rounded-2xl shadow-md overflow-hidden relative group p-4">
            {/* Discount Badge */}
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                -{discountPercentage}%
            </span>

            {/* Product Thumbnail */}
            <div className="w-full h-40 flex items-center justify-center">
                <img
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/product/${thumbnail}`}
                    alt="Product"
                    className="h-full object-contain"
                />
            </div>

            {/* Product Info */}
            <div className="mt-3">
                <h3 className="text-sm font-medium text-gray-800">
                    {name}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-2 mt-2">
                    <span className="text-red-500 font-bold text-lg">${finalPrice}</span>
                    <span className="text-gray-400 line-through text-sm">${originalPrice}</span>
                </div>

                {/* Color Dots */}
                <div className="flex gap-2 mt-2">
                    {
                        colors?.map((color) => {
                            return <span style={{ background: color.hexcode }} className="w-5 h-5 rounded-full cursor-pointer border"></span>

                        })
                    }

                </div>

                <CartBtn finalPrice={finalPrice} productId={_id} originalPrice={originalPrice} />

            </div>
        </div>
    );
}
