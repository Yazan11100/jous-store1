"use client";

import React from "react";
import { Card, CardContent } from "./components/ui/card.jsx";
import { Button } from "./components/ui/button.jsx";
import ProductCard from "./components/ProductCard.jsx";

export default function HomePage() {
  const product = {
    img: "/fortnite.jpg",
    title: "Fortnite V-Bucks",
    desc: "اشترِ عملات V-Bucks بأفضل سعر!",
    price: "19.99",
  };

  const handleAddToCart = (item) => {
    console.log("تمت الإضافة للسلة:", item);
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">مرحباً بك في Jous Store 👋</h1>
      <ProductCard item={product} onAddToCart={handleAddToCart} />
    </main>
  );
}
