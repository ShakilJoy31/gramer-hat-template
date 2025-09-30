"use client";

import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "@/hooks/WishlistContext";
import { useRouter } from "next/navigation";

export default function WishlistFloatingButton() {
  const { items, totalItems } = useWishlist();
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();

  // calculate total price
  useEffect(() => {
    const price = items.reduce(
      (acc: number, item) => acc + item.price * (item.quantity ?? 1),
      0
    );
    setTotalPrice(price);
  }, [items]);

  console.log(items)

  if (totalItems === 0) return null;

  return (
    <div
      className="fixed bottom-1/2 left-0 z-50 cursor-pointer"
      onClick={() => router.push("/wishlist")}
    >
      <div className="w-40 rounded-tr-md rounded-br-md overflow-hidden shadow-lg">
        {/* Top section */}
        <div className="bg-rose-50 flex flex-col items-center py-4">
          <FaHeart className="text-pink-600 text-2xl mb-1" />
          <p className="text-gray-800 text-sm font-medium">
            {totalItems} Items
          </p>
        </div>

        {/* Bottom section */}
        <div className="bg-pink-600 text-center py-3">
          <p className="text-white font-bold text-lg">
            ${totalPrice.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}