
import './App.css';
import Forms from './components/forms';
import {Route , Routes} from 'react-router-dom';
import RoomPage from './pages/roompage';

function App(){
  return (
    < div className='container' >
     <Routes>
      <Route path={"/"} element={<Forms/>} ></Route>
      <Route path="/:roomId" element={<RoomPage/>} ></Route>
     </Routes>

    </div>
  )
}

export default App;