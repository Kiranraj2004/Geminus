import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/sidebar/Sidebar';
import Body from './Components/main/Body';

function App() {
  return (
    <div  className="app" >
      <Sidebar></Sidebar>
      <Body></Body>
    </div>
    
  );
}

export default App;
