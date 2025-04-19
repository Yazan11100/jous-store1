"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Globe, ShoppingCart, CreditCard, Mail, Phone,
  ShieldCheck, Lock, User, Star, Tag,
  Megaphone, Bell, Ticket, Bot
} from "lucide-react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard"; // ✅ الاستيراد الصحيح فوق

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">مرحباً بك في Jous Store 👋</h1>
      <ProductCard
        image="/fortnite.jpg"
        title="Fortnite V-Bucks"
        description="اشترِ عملات V-Bucks بأفضل سعر!"
        price="19.99"
      />
    </main>
  );
}
 