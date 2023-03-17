import "./Channel.scss";

import emptyChannel from "./emptyChannel.png";
import c_logo from "./c_logo.svg";
const imported = { emptyChannel, c_logo };

function Channel({
  title = "emptyChannel",
  bgColor,
  image = imported[title],
  par = "xMidYMid slice",
  link = "",
  innerContentType,
  innerContent
}) {
  var overlay;
  switch (innerContentType) {
    case "icon":
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
    case "text":
      overlay = (
        <text
          x='50%'
          y='50%'
          dominantBaseline='middle'
          textAnchor='middle'
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
        Wii {title} channel
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
            alt={title}
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

export default Channel;
