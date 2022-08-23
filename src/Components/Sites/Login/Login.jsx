import { useContext, useState } from "react"
import { useForm } from "react-hook-form";
// import { AuthContext } from "./AuthProvider"
import axios from "axios";
import { AuthContext } from "./AuthProvider";

export const Login = () => {
    // const { login, setLogin } = useContext(AuthContext);
    // const { register, hanldeSubmit, formState: { errors } } = useForm();
    // const [userMessage, setUserMessage] = useState('');
    // const onSubmit = async data => {
    //     const formdata = new FormData();
    //     formdata.append('username', data.username);
    //     formdata.append('password', data.password);

    //     const url = 'https://api.mediehuset.net/token';
    //     const result = await axios(url, formdata)
    //     handleSessionData(result.data)
    // }
    // const handleSessionData = resp => {
    //     if (!resp.userMessage) {
    //         setLogin(resp)
    //         sessionStorage.setItem('token', JSON.stringify(resp))
    //         setUserMessage(`Du er logget på som ${resp.username}`)
    //     } else {
    //         setUserMessage('Fandt ingen match på brugernavn eller adgangskode')
    //     }

    // }
    // const LoginForm = () => {
    //     return (
    //         <form onSubmit={hanldeSubmit(onSubmit)}>
    //             <div>
    //                 <h4>Login til SingOnline</h4>
    //             </div>
    //             <div>
    //                 <label htmlFor="username">Brugernavn:</label>
    //                 <input {...register('username', { required: true })} />
    //                 {errors.username && "Du skal indtaste dit brugernavn!"}
    //             </div>
    //             <div>
    //                 <label htmlFor="password">Adgangskode:</label>
    //                 <input type="password" {...register('password', { required: true })} />
    //                 {errors.username && "Du skal indtaste din adgangskode!"}
    //             </div>
    //             <div>
    //                 <button type="reset">Annuller</button>
    //                 <button type="submit">Login</button>
    //             </div>
    //         </form>

    //     )
    // }

    // return (
    //     <>
    //         {!loginData || !loginData.username ?
    //             <div className="loginwrapper">
    //                 <LoginForm />
    //             </div>
    //             :
    //             <>
    //                 <Header />
    //                 <Main>
    //                     <AppRouter />
    //                 </Main>
    //                 <Footer />
    //             </>
    //         }
    //     </>
    // )
}