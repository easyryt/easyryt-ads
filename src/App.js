import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PremiumLanding from './components/PremiumLanding';
import AdsAgencySection from './components/AdsAgencySection';

function App() {
  return (
    <div className="App">
      <Header />
      <PremiumLanding />
      <AdsAgencySection />
    </div>
  );
}

export default App;
