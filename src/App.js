import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PremiumLanding from './components/PremiumLanding';
import AdsAgencySection from './components/AdsAgencySection';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import GoogleAdsExpertSection from './components/GoogleAdsExpertSection';

function App() {
  return (
    <div className="App">
      <Header />
      <PremiumLanding />
      <AdsAgencySection />
      <StatsSection />
      <TestimonialsSection/>
      <GoogleAdsExpertSection />
    </div>
  );
}

export default App;
