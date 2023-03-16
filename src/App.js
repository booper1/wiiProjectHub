import emptyChannel from "./emptyChannel.png";
import c_logo from "./c_logo.svg";
import "./App.scss";
const imported = { emptyChannel, c_logo };

function App() {
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const d = new Date();
  let dateDisplay =
    weekday[d.getDay()] + " " + (d.getMonth() + 1) + "/" + d.getDate();

  return (
    <div className='App'>
      <div className='content'>
        <div className='channels'>
          <Channel
            title='booper'
            bgColor='#333'
            link='https://booper1.github.io/'
            innerContent='c_logo'
          />
          <Channel title='mii' />
          <Channel
            title='photo'
            par='xMidYMin slice'
          />
          <Channel title='shop' />
          <Channel title='homebrew' />
          <Channel
            title='tfletch'
            bgColor='#eceae7'
            link='https://tfletch.tech/'
            innerContent='TFletch'
          />
          <Channel />
          <Channel />
          <Channel />
          <Channel />
          <Channel />
          <Channel />
        </div>
      </div>

      <div className='footer'>
        <h1>
          Under Contruction.
          <br />
          Please come back later.
        </h1>
        <p className='date'>{dateDisplay}</p>
      </div>
    </div>
  );
}

function Channel({
  title = "emptyChannel",
  bgColor,
  par = "xMidYMid slice",
  link = "",
  innerContent = false
}) {
  const images = {
    homebrew: "https://tinyurl.com/nhhresxp",
    mii: "https://tinyurl.com/y3wjcxks",
    photo: "https://tinyurl.com/yzkpyd7x",
    shop: "https://tinyurl.com/r454yswc"
  };
  const image = images[title] ?? imported[title];

  var overlay;
  switch (innerContent) {
    case "c_logo":
      overlay = (
        <image
          x='50%'
          y='50%'
          width='300'
          height='300'
          href={imported[innerContent]}
          transform='translate(-150,-150)'
        />
      );
      break;
    case "TFletch":
      overlay = (
        <text
          x='50%'
          y='50%'
          dominant-baseline='middle'
          text-anchor='middle'
        >
          {innerContent}
        </text>
      );
      break;
    default:
      break;
  }

  var useTag = (
    <use
      xlinkHref='#channel'
      strokeWidth={24}
      stroke='#b4b4b4'
      fill={bgColor == null ? `url(#${title})` : bgColor}
      clipPath='url(#insideChannelOnly)'
    />
  );

  var tag;
  if (link) {
    tag = (
      <a
        href={link}
        target='_blank'
        rel='noreferrer'
      >
        {useTag}
      </a>
    );
  } else {
    tag = useTag;
  }

  return (
    <svg
      viewBox='0 0 1000 550'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      className={`${title} channel`}
    >
      <defs>
        <path
          id='channel'
          d='M 0,275
              C 5,-20 -20,5 275,0
              L 275,0 725,0
              C 1020,5 995,-20 1000,275
                995,570 1020,545 725,550
              L 725,550 275,550
              C -20,545 5,570 0,275
                5,-20 -20,5 275,0'
        />
        <clipPath id='insideChannelOnly'>
          <use xlinkHref='#channel' />
        </clipPath>
        <pattern
          id={title}
          patternUnits='userSpaceOnUse'
          width={1000}
          height={550}
        >
          <image
            href={image}
            x={0}
            y={0}
            width={1000}
            height={550}
            preserveAspectRatio={par}
          />
        </pattern>
      </defs>
      {tag}
      {overlay}
    </svg>
  );
}

export default App;
