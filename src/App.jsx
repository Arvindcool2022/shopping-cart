import React, { useState, useEffect } from 'react';
import Card from './components/Card.jsx';

export default function App() {
  const [products, setProducts] = useState([]);
  if (products.length > 10) products.length = 10;

  const fetchProducts = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();

    setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className="mt-4">
      <div className="relative">
        <h1 className="text-2xl text-center font-bold mb-4">Shopping Cart</h1>
        <button className="absolute right-3 -top-1 py-1 px-4 border rounded">
          Cart
        </button>
      </div>
      <section className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
        {products.length &&
          products.map(product => <Card data={product} key={product.id} />)}
      </section>
    </main>
  );
}
