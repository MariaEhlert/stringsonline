import Axios from "axios";
import API_URL from "./ApiUrl";
import { authHeader } from './AuthHeader'

//authHeader 
//hvis ikke man skal være logget ind behøver man ikke bruge authHeader
//hvis man ikke er logget ind (der ikke er en token) så sender den en tom authHeader tilbage
//hvis man er logget ind (der er en token) så sender den token med tilbage
//der kan være nogen ting man skal være logget ind for at se fx kommentar så derfor sender jeg authHeader med hver gang for at automatisere min kode

// henter alt fra et argoment 
// fx alle artister
//da der kun er et parmeter behøver man ikke () rundt om endpoint
const getList = endpoint => {
  // placeholder fra ApiUrl
  return Axios.get(`${API_URL}/${endpoint}`, {
    // kommer fra authHeader 
    // bruger man til hvis man skal være logget ind
    //tjekker om man er logget ind hvis det er nødvendigt
    headers: authHeader(),
  });
};

// henter et argoment 
// fx en artist ud fra id
//appservice.get("artist", 25)
const getDetails = (endpoint, id) => {
  return Axios.get(`${API_URL}/${endpoint}/${id}`, {
    headers: authHeader(),
  });
};

//gemmer data som array i et argoment
const create = (endpoint, data) => {
  return Axios.post(`${API_URL}/${endpoint}`, data, {
    headers: authHeader(),
  });
};

//hvis brugernavn og adgangskode er korakte for man token tilbage og kan logge ind
const login = async (username, password) => {
  return await Axios.post(`https://api.mediehuset.net/token`, { username, password });
};

// hvis den eksiter kan du logge ud
// den kraver man har et log out på backend
const logout = async () => {
  return await Axios.post(`${API_URL}/logout`, {
    headers: authHeader(),
  });
};

//tilføjer data til et argoment
//fx artist, 25, title
const update = (endpoint, id, data) => {
  return Axios.put(`${API_URL}/${endpoint}/${id}`, data, {
    headers: authHeader(),
  });
};

//fjener data fra et argoment
//fx artist, 25
const remove = (endpoint, id) => {
  return Axios.delete(`${API_URL}/${endpoint}/${id}`, {
    headers: authHeader(),
  });
};

//exporter alle 
const appService = {
  getList,
  getDetails,
  create,
  update,
  remove,
  login,
  logout,
};

export default appService;