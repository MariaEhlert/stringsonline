import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { Header } from './Components/Partials/Header/Header';
import { AppRouter } from './Components/AppRouter/AppRouter';
import { Main } from './Components/Partials/Main/Main';
import { Footer } from './Components/Partials/Footer/Footer';
import { SideNav } from './Components/Partials/Nav/SideNav';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <SideNav />
        <section>
          <AppRouter />
        </section>
      </Main>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
