
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="textUtils" link="About Us" />
      <div className="container my-5">
        <TextForm heading="Enter the text to analzye"  type="Preview"/>
      </div>


    </>

  );
}

export default App;
