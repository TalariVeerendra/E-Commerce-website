// app/pages/index/page.js

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filtered = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="mt-10">
        <div className="w-full h-120 bg-blue-500"></div>

        {/* <div className="container  px-60 flex items-center gap-30 mt-10"></div> */}
      </div>
      <div className="ml-50 mr-30 mt-10">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 mb-4 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className=" ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {filtered.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="w-75 h-90 border p-4 hover:shadow-amber-200">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-30 h-40 mx-auto"
                  />
                  <h2 className="font-bold mt-10">{product.title}</h2>
                  <p>${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
