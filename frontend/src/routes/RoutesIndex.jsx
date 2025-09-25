import {Routes, Route} from 'react-router';

import DocenteList from '../components/DocentList';
import DocentDetail from '../pages/DocentDetail';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';

const RoutesIndex = () => {
    return (
       <Routes>
        <Route path='/alumnos' element={<SignUp/>}/>
        <Route path='/alumnos/login' element={<Login/>}/>
        <Route path="/docentes" element={<DocenteList />} />
        <Route path="/docentes/:id" element={<DocentDetail />} />
      </Routes>
    );
}

export default RoutesIndex;