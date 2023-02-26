import logo from './logo.svg';
import './App.scss';

function App() {
  const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const d = new Date();
  let dateDisplay = weekday[d.getDay()] + " " + (d.getMonth() + 1) + "/" + d.getDate();

  // https://github.com/PavelLaptev/squircle-houdini-css
  if ("paintWorklet" in CSS) {
    CSS.paintWorklet.addModule(
      "https://www.unpkg.com/css-houdini-squircle/squircle.min.js"
    );
  }

  return (
    <div className="App">
      <div className="content">
        <div className="channels">
          <div class="link link_fill link_outline booper">
            <a href="https://booper1.github.io/" target="_blank" rel="noreferrer">
              <img src={logo} className="myLogo" alt="Booper_1 logo" />
            </a>
          </div>
          <div class="link link_fill link_outline mii">
          </div>
          <div class="link link_fill link_outline photo">
          </div>
          <div class="link link_fill link_outline shop">
          </div>
          <div class="link link_fill link_outline homebrew">
          </div>
          <div class="link link_fill link_outline">
          </div>
          <div class="link link_fill link_outline">
          </div>
          <div class="link link_fill link_outline">
          </div>
          <div class="link link_fill link_outline">
          </div>
          <div class="link link_fill link_outline">
          </div>
          <div class="link link_fill link_outline">
          </div>
          <div class="link link_fill link_outline">
          </div>
        </div>
      </div>
      
      <div className="footer">
        <h1>Under Contruction.<br/>Please come back later.</h1>
        <p className="date">{dateDisplay}</p>
      </div>
    </div>

    
  );
}

export default App;
