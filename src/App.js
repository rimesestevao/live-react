import './App.css';
import Body from './componentes/Body';
import Header from './componentes/Header';
import Sidebar from './componentes/Sidebar';

function App() {
  return (
    // BEM
    <div className="app">
      <Header/>
      <div className='app__main'>
        <Sidebar/>
        <Body/>
      </div>
    </div>
  );
}

export default App;
