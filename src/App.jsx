import {Routes,Route} from "react-router-dom"
import {Home} from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path ="/" element = {<Home/>}/>
      </Routes>
    </>
  );
};

export default App;
