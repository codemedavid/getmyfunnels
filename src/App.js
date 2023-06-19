import { Header } from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import SliderSamples from "./components/SliderSamples/SliderSamples";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
    <Header />
    <Hero></Hero>
    <SliderSamples></SliderSamples>
    </div>
  );
}

export default App;
