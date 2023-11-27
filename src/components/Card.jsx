import React, { useState, useEffect } from 'react';

const Card = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const { thumbnail, description, title, price } = data;

  return (
    <div className="transition-transform duration-200 ease-in hover:scale-95 overflow-hidden">
      <div className="max-w-56 h-40 overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={thumbnail}
          alt={description}
        />
      </div>
      <div className="flex flex-col items-start p-2 justify-stretch ">
        <h2 className="my-2 font-semibold">{title}</h2>
        <div className="max-w-xs">
          <p
            className={`${
              expanded ? '' : 'whitespace-nowrap overflow-hidden text-ellipsis'
            }`}
          >
            {data.description}
          </p>
          <button
            className="text-sm font-medium text-blue-600 lowercase"
            onClick={() => setExpanded(p => !p)}
          >
            {expanded ? 'Show Less' : 'Read More'}
          </button>
        </div>
        <p className="mb-6 font-medium">$ {price}</p>
        <button className="py-1 px-4 bg-zinc-800 text-white rounded">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;

/**
 * brand: "Samsung"
category: "laptops"
description: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched"
discountPercentage: 4.15
id: 7
images: Array[4]
price: 1499
rating: 4.25
stock: 50
thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
title: "Samsung Galaxy Book"
 * 
 */
