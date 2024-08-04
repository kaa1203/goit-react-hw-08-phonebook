import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { pageRefresh } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import css from "./SharedLayout.module.css";
import { Navigation } from "components/Navigation/Navigation";
import { Puff } from 'react-loader-spinner';

export const SharedLayout = () => {
   const { isRefreshing  } = useAuth();
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(pageRefresh());
   }, [dispatch]);

   if (isRefreshing) {
     return <Puff
               visible={true}
               height="80"
               width="80"
               color="#eeb2b2"
               ariaLabel="puff-loading"
               wrapperStyle={{
                  display: 'flex', 
                  justifyContent: 'center', 
                  marginTop: '80px'}}
               wrapperClass=""
            />   
   }

   return (
      <div className={css.contentWrapper}>
         <header className={css.header}>
            <div className={css.container}>
               <main className={css.main}>
                  <Navigation/>
               </main>
            </div>
         </header>

         <div className={css.container}>
            <Outlet/>
         </div>
         
         {/* <footer className={css.footer}>
            Copyright &copy; 2024 Kaa1203. All rights reserved.
         </footer> */}
      </div>
   );
}