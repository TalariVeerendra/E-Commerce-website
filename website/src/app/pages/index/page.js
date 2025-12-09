// app/pages/index/page.js

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filtered = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search products..."
        className="border p-2 mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <div className="border p-4 hover:shadow">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 mx-auto"
              />
              <h2 className="font-bold mt-2">{product.title}</h2>
              <p>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
