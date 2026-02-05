import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import "@/index.css";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
