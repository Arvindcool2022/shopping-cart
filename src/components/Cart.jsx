import { useSelector } from 'react-redux';

const Cart = () => {
  const cartStore = useSelector(store => store.cart);
  const { totalQuantity, items } = cartStore;
  console.log(totalQuantity, [...Object.values(items)]);
  return (
    <div className="max-w-5xl mx-auto mt-8 bg-slate-300">
      <div className="flex w-full justify-between ">
        <h1 className="text-3xl font-bold">Cart</h1>
        <p className="font-bold">Total Quantity: {totalQuantity}</p>
      </div>
      {items && (
        <ul>
          {[...Object.values(items)].map(x => (
            <li key={x.id}>
              Name: {x.title}, Qty: {x.qty}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
// {
//   "items": {
//       "iPhone 9": {
//           "id": 1,
//           "title": "iPhone 9",
//           "description": "An apple mobile which is nothing like apple",
//           "price": 549,
//           "discountPercentage": 12.96,
//           "rating": 4.69,
//           "stock": 94,
//           "brand": "Apple",
//           "category": "smartphones",
//           "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//           "images": [
//               "https://i.dummyjson.com/data/products/1/1.jpg",
//               "https://i.dummyjson.com/data/products/1/2.jpg",
//               "https://i.dummyjson.com/data/products/1/3.jpg",
//               "https://i.dummyjson.com/data/products/1/4.jpg",
//               "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
//           ],
//           "qty": 1
//       },
//       "iPhone X": {
//           "id": 2,
//           "title": "iPhone X",
//           "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
//           "price": 899,
//           "discountPercentage": 17.94,
//           "rating": 4.44,
//           "stock": 34,
//           "brand": "Apple",
//           "category": "smartphones",
//           "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
//           "images": [
//               "https://i.dummyjson.com/data/products/2/1.jpg",
//               "https://i.dummyjson.com/data/products/2/2.jpg",
//               "https://i.dummyjson.com/data/products/2/3.jpg",
//               "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
//           ],
//           "qty": 3
//       },
//       "Samsung Universe 9": {
//           "id": 3,
//           "title": "Samsung Universe 9",
//           "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
//           "price": 1249,
//           "discountPercentage": 15.46,
//           "rating": 4.09,
//           "stock": 36,
//           "brand": "Samsung",
//           "category": "smartphones",
//           "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
//           "images": [
//               "https://i.dummyjson.com/data/products/3/1.jpg"
//           ],
//           "qty": 3
//       }
//   },
//   "totalQuantity": 7
// }
