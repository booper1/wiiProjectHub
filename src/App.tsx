import "./App.scss";
import Channel from "./Channel";
import Clock from "./Clock";

// REFERENCE
// https://www.youtube.com/watch?v=k4Za0tkFQq8
// https://www.youtube.com/watch?v=UldvTh4BJc0

function App() {
  return (
    <>
      <div className='content'>
        <div className='channels'>
          <Channel
            title='Booper1_Website'
            bgColor='#333'
            link='https://booper1.github.io/'
            innerContentType='icon'
            innerContent='c_logo'
          />
          <Channel
            title='Mii_Channel'
            image='https://tinyurl.com/y3wjcxks'
            link='https://nintendo.fandom.com/wiki/Mii_Channel'
          />
          <Channel
            title='Wii_Photo_Channel'
            image='https://tinyurl.com/yzkpyd7x'
            par='xMidYMin slice'
            link='https://nintendo.fandom.com/wiki/Photo_Channel'
          />
          <Channel
            title='Wii_Shop'
            image='https://tinyurl.com/r454yswc'
            link='https://www.nintendo.co.uk/Support/Wii/Wii-Channels/Wii-Shop-Channel/Wii-Shop-Channel/Wii-Shop-Channel-244563.html'
          />
          <Channel
            title='Homebrew_Channel'
            image='https://tinyurl.com/nhhresxp'
            link='https://wiibrew.org/wiki/Homebrew_Channel'
          />
          <Channel
            title='TFletch_Website'
            bgColor='#eceae7'
            link='https://tfletch.tech/'
            innerContentType='text'
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
        <Clock />
      </div>
    </>
  );
}

export default App;
