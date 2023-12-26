import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';

const MainSection = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();

    // data.products.length = 2;
    setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <section className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] px-4">
      {products.length &&
        products.map(product => <Card data={product} key={product.id} />)}
    </section>
  );
};

export default MainSection;
