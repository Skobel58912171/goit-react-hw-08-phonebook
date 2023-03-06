import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
// import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <main>
          {' '}
          <Outlet />
        </main>
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
      <Footer />
    </div>
  );
};
