import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import Container from 'components/Container/Container';
import { PuffLoader } from 'react-spinners';
import { Outlet } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selectors/selectors';
import { useSelector } from 'react-redux';
// import Contacts from 'Pages/Contacts/Contacts';
export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <Container>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        {/* {isLoggedIn ? <Contacts /> : <UserMenu />} */}
      </Container>
      <Suspense
        fallback={
          <PuffLoader
            color="#36d63c"
            loading
            cssOverride={{
              position: 'absolute',
              left: '50%',
              top: '45%',
            }}
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
}
