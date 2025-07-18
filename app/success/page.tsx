"use client";
import { useCartStore } from "@/store/cart-store";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const SuccessPage = () => {
  const { clearCart } = useCartStore();
  useEffect(() => {
    clearCart();
  }, [clearCart]);
  return (
    <div className="mt-22 container mx-auto flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center">
        <CheckCircle className="text-green-600 w-16 h-16 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Successful
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order is being processed.
        </p>
        <Link
          href="/products"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
