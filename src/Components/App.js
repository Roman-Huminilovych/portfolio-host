import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Contact from './Contact';
import About from './About';
import Promo from './Projects';

function App() {
  return (
    <Routes>
      <Route path="/promo" element={<Promo mainBackColor="black" />} />
      <Route path="/connect" element={<Contact mainBackColor="black" />} />
      <Route path="/about" element={<About mainBackColor="black" />} />
      <Route exact path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
