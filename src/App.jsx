import "./App.css";
import {useState} from 'react';
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";
const App = () => {
  const [login,setLogin] = useState();
  return (
    <div>
      <Navigation login={login}/>
      <HeroSection setLogin={setLogin}/>
    </div>
  );
};

export default App;
