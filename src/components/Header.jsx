import { useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';

const Header = () => {
  const cartItems = useSelector(store => store.cart.totalQuantity);
  //   console.log(cartItems);
  const { pathname } = useLocation();
  //   console.log(pathname);

  return (
    <div className="relative">
      <h1 className="text-2xl text-center font-bold my-6">Shopping Cart</h1>
      {pathname === '/' ? (
        <Link to="/cart">
          <button className="absolute right-3 top-0 py-1 px-4 border border-zinc-800 rounded transition-all duration-300 ease-out hover:bg-zinc-800 hover:text-white">
            Cart ({cartItems})
          </button>
        </Link>
      ) : (
        <Link to="/">
          <button className="absolute right-3 top-0 py-1 px-4 border border-zinc-800 rounded transition-all duration-300 ease-out hover:bg-zinc-800 hover:text-white">
            Go Home
          </button>{' '}
        </Link>
      )}
    </div>
  );
};

export default Header;
