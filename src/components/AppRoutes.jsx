import { Routes, Route } from 'react-router-dom'
import Hero from './Hero'
import Community from './Community';
import Feature from './Feature';
import Location from './Location';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path="/Comunity" element={<Community/>} />
      <Route path="/feature" element={<Feature/>} />
      <Route path='/location' element={<Location/>}/>
      
    </Routes>
  )
}

export default AppRoutes;
