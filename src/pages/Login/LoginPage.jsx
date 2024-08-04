import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { FaUserAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { MdOutlineVpnKey } from "react-icons/md";
import css from "../../components/SharedLayout/SharedLayout.module.css";

export const LoginPage = () => {
   const [emailOnFocus, setEmailOnFocus] = useState(false);
   const [pwordOnFocus, setPwordOnFocus] = useState(false);
   const [email, setEmail] = useState('');
   const [pword, setPword] = useState('');

   const dispatch = useDispatch();

   const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      
      const data = {
         email: form.elements.email.value,
         password: form.elements.pword.value,
      }

      dispatch(login(data));

   }

   const handleOnFocus = e => {
      if (e.target.name === 'email') {
         return setEmailOnFocus(!emailOnFocus);
      }
      return setPwordOnFocus(!pwordOnFocus);
   }

   const handleOnBlur = e => {
      if (e.target.name === 'email') {
         return setEmailOnFocus(!emailOnFocus);
      }
      return setPwordOnFocus(!pwordOnFocus);
   }

   const handleOnChange = e => {
      if (e.target.name === 'email') {
         return setEmail(e.target.value);
      }
      return setPword(e.target.value);
   }
   
   return (
      <section className={css.section}>
         <form onSubmit={handleOnSubmit} className={css.navForm}>
            <div className={css.titleWrapper}>
               <div className={css.navIcon}>
                  <FaUserAlt />
               </div>
               <h2 className={css.formTitle}>Login</h2>
            </div>
            <div className={css.navDiv}>
               <label 
                  htmlFor="email"
                  className={emailOnFocus || email !== "" ? css.onFocus : css.label}
               >Email</label>
                  <input 
                     type="email"
                     name="email"
                     id="email"
                     autoComplete="off"
                     onBlur={handleOnBlur}
                     onFocus={handleOnFocus}
                     value={email}
                     onChange={handleOnChange}
                  />
                  <GoMail />
            </div>
            <div className={css.navDiv}>
               <label 
                  htmlFor="pword"
                  className={pwordOnFocus || pword !== "" ? css.onFocus : css.label}>Password</label>
                  <input 
                     type="password"
                     name="pword"
                     id="pword"
                     autoComplete="off"
                     onBlur={handleOnBlur}
                     onFocus={handleOnFocus}
                     value={pword}
                     onChange={handleOnChange}
                  />
                  <MdOutlineVpnKey />
            </div>
            <button>Login</button>
            <span>
               <Link 
                  to="/register"
                  >
                  Don't have an account? Click here to Register!
               </Link>
            </span>
         </form>
      </section>
   )
}