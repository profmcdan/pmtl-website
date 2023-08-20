import { Outlet } from 'react-router-dom';
// import AppNav from './AppNav';

const RootLayout = () => {
  return (
    <>
      {/* <AppNav /> */}

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
