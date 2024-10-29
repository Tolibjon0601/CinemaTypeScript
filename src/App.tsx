import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import MainLayout from './layouts/main_layouts/layout';
import LoginPage from './login/login';
import AuthPage from './login/authPage';
import SeansPage from './pages/home/seansPage';
import Ticketpage from './pages/cinema/ticketpage';
import Searchpage from './pages/home/searchpage';
import CinemaPage from './pages/cinema/cinemapage';
import SinglePage from './seance/singlepage';
import PaymentPage from './pages/home/payment';

import store from './redux/store';
import AuthContextProvider from './context/authcontext/authContext';
import MySwiper from './pages/home/homePage';

const queryClient = new QueryClient();

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <MySwiper /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'authpage', element: <AuthPage /> },
      { path: 'seanspage', element: <SeansPage /> },
      { path: 'ticketpage', element: <Ticketpage /> },
      { path: 'searchpage', element: <Searchpage /> },
      { path: 'cinemapage', element: <CinemaPage /> },
      { path: 'movie/:id', element: <SinglePage /> },
      { path: 'payment', element: <PaymentPage /> },
    ],
  },
];

function App(): JSX.Element {
  const router = createBrowserRouter(routes);

  return (
    <Provider store={store}>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <ToastContainer />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthContextProvider>
    </Provider>
  );
}

export default App;
