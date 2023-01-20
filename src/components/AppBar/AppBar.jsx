import Navigation from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import Container from 'components/Container/Container';
import { PuffLoader } from 'react-spinners';
import { Outlet } from 'react-router-dom';
export default function AppBar() {
  return (
    <>
      <Container>
        <Navigation />
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
