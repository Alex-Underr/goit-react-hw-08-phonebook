import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selectors/selectors';

export default function PrivateRoute() {
  const IsLoggedIn = useSelector(getIsLoggedIn);
  //   if (!IsLoggedIn) {
  //     console.log('Private!');
  //   }

  return IsLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
