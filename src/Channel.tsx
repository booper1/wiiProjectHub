import React from "react";
import c_logo from "./c_logo.svg";
import "./Channel.scss";
import emptyChannel from "./emptyChannel.png";

// Map of available images by key
const imported: Record<string, string> = {
  emptyChannel,
  c_logo
};

// Props interface
interface ChannelProps {
  title?: keyof typeof imported;
  bgColor?: string;
  image?: string;
  par?: string;
  link?: string;
  innerContentType?: "icon" | "text";
  innerContent?: string;
}

const Channel: React.FC<ChannelProps> = ({
  title = "emptyChannel",
  bgColor,
  image,
  par = "xMidYMid slice",
  link = "",
  innerContentType,
  innerContent
}) => {
  const resolvedImage = image ?? imported[title];

  let overlay: React.ReactNode;
  switch (innerContentType) {
    case "icon":
      overlay = innerContent ? (
        <image
          x='50%'
          y='50%'
          width='300'
          height='300'
          href={imported[innerContent]}
          transform='translate(-150,-150)'
        />
      ) : null;
      break;
    case "text":
      overlay = (
        <text
          x='50%'
          y='50%'
          textAnchor='middle'
          dominantBaseline='central'
        >
          {innerContent}
        </text>
      );
      break;
    default:
      overlay = null;
  }

  const useTag = (
    <use
      xlinkHref='#channel'
      strokeWidth={24}
      stroke='#b4b4b4'
      fill={bgColor ?? `url(#${title})`}
      clipPath='url(#insideChannelOnly)'
    />
  );

  const tag = link ? (
    <a
      href={link}
      target='_blank'
      rel='noreferrer'
    >
      Wii {title} channel
      {useTag}
    </a>
  ) : (
    useTag
  );

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
            href={resolvedImage}
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
};

export default Channel;
