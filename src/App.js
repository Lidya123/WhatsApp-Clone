
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

function App() {
  return (
    <div className="app">

      <div className='app_body'>
        <Sidebar/>
      {/*sidebar*/}
        <Chat/>
      {/*chat*/}
      </div>
    </div>
  );
}

export default App;
