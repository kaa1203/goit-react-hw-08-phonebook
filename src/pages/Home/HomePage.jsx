import { useEffect } from "react";
import { selectUser, selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { Section } from "../../components/Section/Section";
import css from "./HomePage.module.css";

export const HomePage = () => {
   const user = useSelector(selectUser);
   const loginStatus = useSelector(selectIsLoggedIn);
   
   return (
      <Section>
         { loginStatus && user.user !== null ?
            <h1 className={css.header}>Welcome back {user.user}!<br/> Hope you have a good day today!</h1>
            :
            <h1 className={css.header}>Welcome! This is the home page of the Phonebook web app. Login or Register to access it now!</h1>
            
         }
      </Section>
   );
}