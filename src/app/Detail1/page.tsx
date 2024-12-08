"use client"
import { useState } from "react";

export default function ProductPage() {
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="bg-white p-4">
            <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8  bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border ">
                    {/* Product Imagess */}
                    <div>
                        <img
                            src="/c1.jpeg"
                            alt="The Dandy Chair"
                            className="w-full h-auto object-cover rounded-lg shadow"
                        />
                    </div>

                    {/* Product details */}
                    <div className="p-5">
                        <h1 className="text-[#2A254B]  font-serif text-2xl font-bold mt-8 mb-8">The Dandy Chair</h1>
                        <p className="text-lg text-gray-600">£250</p>
                        <p className="mt-4 text-gray-700 text-sm">
                            A timeless design, with premium materials features as one of our
                            most popular and iconic pieces. The Dandy chair is perfect for any
                            stylish living space with beech legs and lambskin leather upholstery.
                        </p>

                        {/* dimension */}
                        <div className="mt-6">
                            <h2 className="text-lg font-semibold">Dimensions</h2>
                            <div className="grid grid-cols-3 gap-4 text-center mt-2">
                                <div>
                                    <p className="font-medium">Height</p>
                                    <p>110cm</p>
                                </div>
                                <div>
                                    <p className="font-medium">Width</p>
                                    <p>75cm</p>
                                </div>
                                <div>
                                    <p className="font-medium">Depth</p>
                                    <p>50cm</p>
                                </div>
                            </div>
                        </div>

                        {/* quantity */}
                        <div className="mt-6">
                            <h2 className="text-lg font-semibold">Quantity</h2>
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                className="w-20 mt-2 px-2 py-1 border rounded-md"
                            />
                        </div>

                        {/* buttons */}
                        <div className="mt-6 flex items-center space-x-4">
                            <button
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-sky-700"
                            >
                                Add to Cart
                            </button>
                            <button
                                onClick={handleFavorite}
                                className={`px-4 py-2 border rounded ${isFavorite ? "text-red-500 border-red-500" : "text-gray-600 border-gray-600"
                                    }`}
                            >
                                {isFavorite ? "Added to Favorites ❤" : "Save to Favorites"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}