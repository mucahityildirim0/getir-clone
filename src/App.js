import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import Campaigns from "./components/Campaigns";
import Favourite from "./components/Favourite";
import MobileApp from "./components/MobileApp";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Categories />
      <Campaigns />
      <Favourite />
      <MobileApp />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
