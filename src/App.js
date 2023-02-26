import emptyChannel from './emptyChannel.png';
import logo from './logo.svg';
import './App.scss';

function App() {
  const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const d = new Date();
  let dateDisplay = weekday[d.getDay()] + " " + (d.getMonth() + 1) + "/" + d.getDate();

  return (
    <div className="App">
      <div className="content">
        <div className="channels">
          <Channel type="booper" color="#333" link="https://booper1.github.io/" icon = "true"></Channel>
          <Channel type="mii"></Channel>
          <Channel type="photo" pos="xMidYMin slice"></Channel>
          <Channel type="shop"></Channel>
          <Channel type="homebrew"></Channel>
          <Channel type="empty"></Channel>
          <Channel type="empty"></Channel>
          <Channel type="empty"></Channel>
          <Channel type="empty"></Channel>
          <Channel type="empty"></Channel>
          <Channel type="empty"></Channel>
          <Channel type="empty"></Channel>
        </div>
      </div>
      
      <div className="footer">
        <h1>Under Contruction.<br/>Please come back later.</h1>
        <p className="date">{dateDisplay}</p>
      </div>
    </div>
  );
}

function Channel({type, color = "", pos = "xMidYMid slice", link = "", icon = false}) {
  const images = {
    "homebrew": "https://cdn.dribbble.com/users/187144/screenshots/1554808/wii.png",
    "mii": "https://i.ytimg.com/vi/i_afrkky-dk/maxresdefault.jpg",
    "photo": "https://vgmsite.com/soundtracks/wii-photo-channel/Photo%20Channel%20Soundtrack.png",
    "shop": "https://i.ytimg.com/vi/yyjUmv1gJEg/maxresdefault.jpg"
  };
  const image = images[type] ?? emptyChannel;

  var overlay;
  if (icon) {
    overlay =
    <image x="50%" y="50%" width="300" height="300" href={logo} transform="translate(-150,-150)"/>
  }

  var pathTag =
  <path fill={color==="" ? `url(#${type})` : color} stroke="#b4b4b4" stroke-width="12" stroke-linecap="butt" d="
          M 0,275
          C 5,-20 -20,5 275,0
          L 275,0 725,0
          C 1020,5 995,-20 1000,275
            995,570 1020,545 725,550
          L 725,550 275,550
          C -20,545 5,570 0,275
            5,-20 -20,5 275,0
          " />;

  var linked;
  if (link) {
    linked =
      <a href={link} target="_blank" rel="noreferrer">
        {pathTag}
      </a>;
  }
  else {
    linked = pathTag;
  }

  return (
    <svg id="a"
         xmlns="http://www.w3.org/2000/svg"
         width="1000"
         height="550"
         viewBox="-10 -10 1020 570"
         className={`${type} channel`}>
        <defs>
          <pattern id={type} patternUnits="userSpaceOnUse" width="1000" height="550">
            <image href={image} x="-10" y="-10" width="1030" height="580" preserveAspectRatio={pos} />
          </pattern>
        </defs>
        {linked}
        {overlay}
    </svg>
  );
}

export default App;