import {Routes,Route} from "react-router-dom"
import {Home, Register} from './pages'


const App = () => {
  return (
    <>
      <Routes>
        <Route path ="/" element = {<Home/>}/>
        <Route path='/register' element = {<Register/>}/>
      </Routes>
    </>
  );
};

export default App;
