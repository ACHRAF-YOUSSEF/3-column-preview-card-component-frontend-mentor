import Card from './components/Card';
import Footer from './components/Footer';
import sedans from './assets/icon-sedans.svg';
import suvs from './assets/icon-suvs.svg';
import luxury from './assets/icon-luxury.svg';

import './App.css';

function App() {
  return (
    <>
      <div
        className="
          flex 
          flex-col 
          justify-center 
          items-center 
          m-auto
          h-fit
          sm:h-screen
          w-screen
        "
      >
        <div 
          className="
            flex 
            flex-col
            sm:flex-row 
            justify-center 
            w-fit 
            h-fit 
            sm:m-auto
            m-8
            itemx-center 
            max-w-3xl
          ">
          <Card
            rounded_left={true}
            rounded_right={false}
            color="Bright-orange"
            image={sedans}
            title="Sedans"
            description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
          or on your next road trip."
            onClick={() => console.log("Learn More")}
          />
          <Card
            rounded_left={false}
            rounded_right={false}
            color="Dark-cyan"
            image={suvs}
            title="SUVs"
            description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
          and off-road adventures."
            onClick={() => console.log("Learn More")}
          />
          <Card
            rounded_left={false}
            rounded_right={true}
            color="Very-dark-cyan"
            image={luxury}
            title="Luxury"
            description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
          rental and arrive in style."
            onClick={() => console.log("Learn More")}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;