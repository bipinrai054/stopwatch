import './App.css';
import BtnComponent from './components/BtnComponent';
import DisplayComponent from './components/DisplayComponent';

function App() {
  return (
    <div className='main-section'>
      <div className='clock-holder'>
        <div className='stopwatch'>
          <DisplayComponent />
          <BtnComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
