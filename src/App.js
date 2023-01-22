import logo from './logo.svg';
import './App.css';
import Clock from './Projects/Clock';
import BmiCalculator from './Projects/BmiCalculator';

function App() {
  return (
    <>
      <div className='main-wrapper'>
        {/* <Clock /> */}
        <BmiCalculator />
      </div>
    </>
  );
}

export default App;