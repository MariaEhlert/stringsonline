import { useState } from "react"
import axios from 'axios'

export const Login = () => {
    // const [message, setMessage] = useState('Indtast brugernavn og adgangskode for at logge ind');
    // const [loginData, setLoginData] = useState('');
    // const submitLogin = async data => {
    //     const formData = new FormData(data.target.form)
    //     const url = 'https://api.mediehuset.net/token'
    //     try {
    //         const result = await axios.post(url, formData)
    //         handleSessionData(result);
    //     } catch (error) {
    //         setMessage('Kunne ikke logge ind')
    //     }
    // }
    // const handleSessionData = data => {
    //     if (data.state === 201) {
    //         setLoginData(data.data);
    //         sessionStorage.setItem('token', JSON.stringify(data.data))
    //     }
    // }
    // return (
    //     <>
    //         <p>{message}</p>
    //         {!loginData && !loginData.username ?
    //             <form method="post">
    //                 <input type="text" name="username" id="username" />
    //                 <input type="password" name="password" id="password" />
    //                 <button type="button" onClick={submitLogin}>Login</button>
    //                 <button type="reset">Nulstil</button>
    //             </form>
    //             :
    //             <form>
    //                 <p>Du er logget ind som {loginData.username}</p>
    //                 <button type="button">Log ud</button>
    //             </form>
    //         }
    //     </>
    // )
}
