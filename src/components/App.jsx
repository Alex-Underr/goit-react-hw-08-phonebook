import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations/contactsOperations';

import NotFound from 'Pages/NotFound/NotFound';
const AppBar = lazy(() => import('components/AppBar/AppBar'));
const Home = lazy(() => import('Pages/Home/Home'));
const Contacts = lazy(() => import('components/Contacts/Contacts'));
const Registration = lazy(() => import('Pages/Register/Register'));
const Login = lazy(() => import('Pages/Login/Login'));

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
