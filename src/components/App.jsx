import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/operations/contactsOperations';
import { current } from 'redux/operations/authOperation';

import NotFound from 'Pages/NotFound/NotFound';
import AppBar from 'components/AppBar/AppBar';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
const Home = lazy(() => import('Pages/Home/Home'));
const Contacts = lazy(() => import('Pages/Contacts/Contacts'));
const Registration = lazy(() => import('Pages/Register/Register'));
const Login = lazy(() => import('Pages/Login/Login'));

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
