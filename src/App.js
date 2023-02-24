import logo from './logo.svg';
import './App.scss';

function App() {
  const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const d = new Date();
  let dateDisplay = weekday[d.getDay()] + " " + (d.getMonth() + 1) + "/" + d.getDate();

  return (
    <div className="App">
      <div className="content">
        <a className="squircle" href="https://booper1.github.io/" target="_blank" rel="noreferrer">
          <img src={logo} className="logo" alt="logo" />
        </a>

        <h1>Under Contruction. <br/>Please come back later.</h1>
      </div>
      
      <div className="footer">
        <p className="date">{dateDisplay}</p>
      </div>
    </div>
  );
}

export default App;
