import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavLink } from "react-router-dom";



const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <section>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </section>
      </main>
    </>
  );
};
export default SharedLayout;