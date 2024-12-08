"use client"
import { useState } from "react";
import Link from "next/link";
const Cart = () => {
    const products = [
        {
            id: 1,
            name: "The Dandy chair",
            description: "A chair is a piece of furniture that comfortable seating option...",
            price: 100,
            image: "/c1.jpeg",
        },
        {
            id: 2,
            name: "Rustic Vase Set",
            description: "A timeless ceramic vase with a tri color grey glaze...",

            price: 960,
            image: "/c2.jpeg",
        },
        {
            id: 3,
            name: "The Silky Vase",
            description: "A timeless ceramic vase with a tri color white glaze...",
            price: 700,
            image: "/c3.jpeg",
        },
        {
            id: 4,
            name: "The Lucy Lamp",
            description: "A lamp is a Lighting device that illuminates spaces....",
            price: 250,
            image: "/c4.jpeg",
        },
        {
            id: 5,
            name: "Golden Lamp",
            description: "A lamp is a Lighting device that adding both functionality...",
            price: 15,
            image: "/p5.jpeg",
        },
    ];

    const [cart, setCart] = useState(
        products.map((product) => ({ ...product, quantity: 1 }))
    );

    const updateQuantity = (id: any, quantity: any) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    const subTotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl text-[#2A254B] font-serif font-bold mb-4">Your shopping cart</h1>
            <div className="grid gap-4">
                {cart.map((product) => (
                    <div
                        key={product.id}
                        className="flex items-center gap-4 p-4 border rounded-md shadow-sm"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-24 h-24 object-cover rounded"
                        />
                        <div className="flex-1">
                            <h2 className="text-lg font-bold">{product.name}</h2>
                            <p className="text-gray-600">{product.description}</p>
                            <p className="text-gray-800 font-semibold">Price: ${product.price}</p>
                        </div>
                        <div>
                            <input
                                type="number"
                                min="1"
                                value={product.quantity}
                                onChange={(e) => updateQuantity(product.id, +e.target.value)}
                                className="border rounded w-16 text-center"
                            />
                            <p className="text-gray-800 font-semibold">
                                Total: ${product.price * product.quantity}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 p-4 border-t text-slate-800">
                <p className="text-right text-lg font-bold">Subtotal: ${subTotal}</p>
                <p className="text-right text-sm text-gray-500">
                    Taxes and shipping are calculated at checkout.
                </p>
                <Link href="/List">
                    <button className="mt-4 bg-slate-800  text-white py-2 px-4 rounded">
                        Go to Checkout
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;