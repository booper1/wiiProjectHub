import empty from './emptyChannel.png';
import './App.scss';

function App() {
  const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const d = new Date();
  let dateDisplay = weekday[d.getDay()] + " " + (d.getMonth() + 1) + "/" + d.getDate();

  return (
    <div className="App">
      <div className="content">
        <div className="channels">
          {Channel("")}
          {Channel("")}
          {Channel("")}
          {Channel("")}
          {Channel("")}
          {Channel("")}
          {Channel("")}
          {Channel("")}
          {Channel("")}
          {Channel("")}
          {Channel("")}
          {Channel("")}
        </div>
      </div>
      
      <div className="footer">
        <h1>Under Contruction.<br/>Please come back later.</h1>
        <p className="date">{dateDisplay}</p>
      </div>
    </div>

    
  );
}

function Channel(type) {
  if (type) {
    const images = {
      "homebrew": "https://cdn.dribbble.com/users/187144/screenshots/1554808/wii.png",
      "mii": "https://i.ytimg.com/vi/i_afrkky-dk/maxresdefault.jpg",
      "photo": "https://vgmsite.com/soundtracks/wii-photo-channel/Photo%20Channel%20Soundtrack.png",
      "shop": "https://i.ytimg.com/vi/yyjUmv1gJEg/maxresdefault.jpg"
    };
    const image = type in images ? images[type] : "";
    return (
      <svg id="a"
           xmlns="http://www.w3.org/2000/svg"
           width="1000"
           height="550"
           viewBox="-10 -10 1020 570">
          <defs>
            <pattern id="bg" patternUnits="userSpaceOnUse" width="1000" height="550">
              <image href={image} x="-10" y="-10" width="1030" height="580" preserveAspectRatio="xMidYMid slice" />
            </pattern>
          </defs>
          <path fill="url(#bg)" stroke="#b4b4b4" stroke-width="12" stroke-linecap="butt" d="
            M 0,275
            C 5,-20 -20,5 275,0
            L 275,0 725,0
            C 1020,5 995,-20 1000,275
              995,570 1020,545 725,550
            L 725,550 275,550
            C -20,545 5,570 0,275
              5,-20 -20,5 275,0
            " />
      </svg>
    );
  }
  else {
    return (
      <svg id="a"
           xmlns="http://www.w3.org/2000/svg"
           width="1000"
           height="550"
           viewBox="-10 -10 1020 570">
          <defs>
            <pattern id="bg" patternUnits="userSpaceOnUse" width="1000" height="550">
              <image href={empty} x="-10" y="-10" width="1030" height="580" preserveAspectRatio="xMidYMid slice" />
            </pattern>
          </defs>
          <path fill="url(#bg)" stroke="#b4b4b4" stroke-width="12" stroke-linecap="butt" d="
            M 0,275
            C 5,-20 -20,5 275,0
            L 275,0 725,0
            C 1020,5 995,-20 1000,275
              995,570 1020,545 725,550
            L 725,550 275,550
            C -20,545 5,570 0,275
              5,-20 -20,5 275,0
            " />
      </svg>
    );
  }
}

export default App;