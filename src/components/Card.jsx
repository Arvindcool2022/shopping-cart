import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../store/cartSlice';

const Card = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const { thumbnail, description, title, price } = data;
  const cartItems = useSelector(store => store.cart.items);

  let count = cartItems?.[data.title]?.qty ?? 0;

  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem(data));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(data));
  };

  return (
    <div className="transition-transform duration-200 ease-in hover:scale-105 overflow-hidden">
      <div className="max-w-56 h-40 overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={thumbnail}
          alt={description}
        />
      </div>
      <div className="flex flex-col items-start p-2 justify-stretch ">
        <h2 className="mt-2 font-semibold">{title}</h2>
        <div className="max-w-xs">
          <p
            className={`${
              expanded ? '' : 'whitespace-nowrap overflow-hidden text-ellipsis'
            } text-zinc-700 text-sm`}
          >
            {data.description}
          </p>
          <button
            className="text-sm  text-blue-500 lowercase float-right"
            onClick={() => setExpanded(p => !p)}
          >
            {expanded ? 'Show Less' : 'Read More'}
          </button>
        </div>
        <p className="mb-6 font-medium">$ {price}</p>
        {!count ? (
          <button
            onClick={handleAddItem}
            className="py-1 px-4 bg-zinc-800 text-white rounded border border-zinc-800 transition-all duration-300 ease-out hover:bg-transparent hover:text-inherit"
          >
            Add to cart
          </button>
        ) : (
          <div className="flex border-2 border-stone-800 rounded">
            <button
              className="px-2 border-r-2 border-stone-800 bg-stone-800 text-white "
              onClick={handleRemoveItem}
            >
              -
            </button>
            <p className="px-3">{count}</p>
            <button
              className="px-2 border-l-2 border-stone-800 bg-stone-800 text-white"
              onClick={handleAddItem}
            >
              +
            </button>
          </div>
        )}
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
