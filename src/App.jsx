import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { Header } from './Components/Partials/Header/Header';
import { AppRouter } from './Components/AppRouter/AppRouter';
import { Main } from './Components/Partials/Main/Main';
import { Footer } from './Components/Partials/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <AppRouter />
      </Main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
