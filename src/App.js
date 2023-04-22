import './App.css';
import Sidebar from './Components/sidebar';
import Home from './Components/home';
import Suggession from './Components/suggession';

function App() {
  return (
    <>
    <div style={{display: 'flex'}}>
    <Sidebar/>
    <Home/>
    <Suggession/>
    </div>
    </>
  );
}

export default App;
