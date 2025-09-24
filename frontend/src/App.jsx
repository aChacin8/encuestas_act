import { BrowserRouter, Routes, Route } from 'react-router';
import DocentList from './components/DocentList';
import DocentDetail from './pages/DocentDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DocentList />} />
        <Route path="/docentes/:id" element={<DocentDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
