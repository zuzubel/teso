import { Header } from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage/Homepage';
import { Kontejnery } from './pages/Kontejnery/Kontejnery';
import { ZemniPrace } from './pages/ZemniPrace/ZemniPrace';
import { Autodoprava } from './pages/Autodoprava/Autodoprava';
import { Kontakt } from './pages/Kontakt/Kontakt';
import './App.css';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/kontejnery" element={<Kontejnery />} />
          <Route path="/zemni-prace" element={<ZemniPrace />} />
          <Route path="/autodoprava" element={<Autodoprava />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
