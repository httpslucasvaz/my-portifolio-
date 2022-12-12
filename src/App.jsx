import { Content } from "./components/content/content";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/Header";

import './style/App.css'


function App() {
  return (
    <>
    <Header />
    <img src='/astronauta.svg' alt='' className="bg-astrounata"/>
    <Content />
    <Footer />
    </>
  );
}

export default App;
