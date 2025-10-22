import { Routes, Route } from 'react-router';

import DocenteList from '../components/DocentList';
import DocentDetail from '../pages/DocentDetail';
import AlumoDetail from '../pages/AlumnoDetail';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/alumnos' element={<SignUp />} />
      <Route path='/alumnos/login' element={<Login />} />
      <Route path="/docentes" element={<DocenteList />} />
      <Route path="/docentes/:id" element={<DocentDetail />} />
      <Route path='/alumnos/:codigo_estudiante' element={<AlumoDetail />} />
    </Routes>
  );
}

export default RoutesIndex;