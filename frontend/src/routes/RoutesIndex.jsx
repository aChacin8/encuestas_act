import {Routes, Route} from 'react-router';
import Home from '../pages/Home';

const RoutesIndex = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>   
    );
}

export default RoutesIndex;