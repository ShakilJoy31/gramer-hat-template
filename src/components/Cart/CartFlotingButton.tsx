"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/hooks/CartContext";
import { useRouter } from "next/navigation";
import { FaShoppingBag } from "react-icons/fa";

export default function CartFloatingButton() {
  const { items, totalItems } = useCart();
  const router = useRouter();
  const [totalPrice, setTotalPrice] = useState(0);

  // calculate total price
  useEffect(() => {
    const price = items.reduce(
      (acc: number, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(price);
  }, [items]);

  console.log(items)

  if (totalItems === 0) return null;

  return (
    <div
      className="fixed bottom-1/2 right-0 z-50 cursor-pointer"
      onClick={() => router.push("/cart")}
    >
      <div className="w-40 rounded-tl-md rounded-bl-md overflow-hidden shadow-lg">
        {/* Top section */}
        <div className="bg-blue-50 flex flex-col items-center py-4">
          <FaShoppingBag className="text-green-600 text-2xl mb-1" />
          <p className="text-gray-800 text-sm font-medium">{totalItems} Items</p>
        </div>

        {/* Bottom section */}
        <div className="bg-green-700 text-center py-3">
          <p className="text-white font-bold text-lg">
            ${totalPrice.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}