import Testimonials from './components/Testimonials';
import './App.css';
import reviews from './data';

function App() {
  return (
    <div className="App">
      <div className='head'>
        <h1>Our Testinomials</h1>
      </div>
      <Testimonials reviews = {reviews}/>
    </div>
  );
}

export default App;
