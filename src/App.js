import Lemmikraamat from './Lemmikraamat';
import RatingBox from './RaitingBox';
import './App.css';
import myImage from './Raamat.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Minu lemmikraamat</h1>
          <img src={myImage} alt="Raamatu pilt" style={{ width: '200px', height: 'auto' }} />
        </div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <RatingBox />
        <Lemmikraamat />
      </header>
    </div>
  );
}

export default App;
