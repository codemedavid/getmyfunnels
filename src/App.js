import { Header } from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import SliderSamples from "./components/SliderSamples/SliderSamples";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Process from "./components/Process/Process";
function App() {
  return (
    <div className="App">
    <Header />
    <Hero></Hero>
    <SliderSamples></SliderSamples>
    <About></About>
    <Process></Process>
    </div>
  );
}

export default App;
