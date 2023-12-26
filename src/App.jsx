import { Provider } from 'react-redux';
import appStore from './store/store.js';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/cart.jsx';
import MainSection from './components/MainSection.jsx';

function App() {
  return (
    <Provider store={appStore}>
      <main className="mt-4">
        <Header />
        <Outlet />
      </main>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <MainSection /> },
      { path: '/cart', element: <Cart /> }
    ]
  }
]);

export default appRouter;
