import Card from './component/Card2';
import './App.css';
import Front from './component/Front';
import Banner from './component/Banner';
import logo from './img/1.png'
import logo2 from './img/2.png'
import logo3 from './img/3.png'
import logo4 from './img/4.png'
import logo5 from './img/5.png'
import profile from './img/pp1.jpg'
import twitter from './img/twitter.png'
import socialIcon from './img/Social Icons.png'


function App() {
  
  return (
    <div className='display-flex'>
      <div className='front-profile'> 
        <Front img={profile}
          img1={twitter}
          img2={socialIcon}
          title1='dingaling.eth'
          subtitle='oxadgf....jkld'
          lvl='Lvl 2'
          percentage='12%'></Front>
      </div>
      <div className='banner-card'>
        <div>

          <Banner></Banner>

        </div>
        <div className="flex-container">

          <Card img={logo}
            title='Azuki #9839'
            bought='2.2' amount='1.2'
            floor='1.6'>

          </Card>
          <Card img={logo2}
            title='MAYC #9839'
            bought='2.2'
            floor='1.6'
            amount='1.2' />

          <Card img={logo3}
            title='MoonBirds #9839'
            bought='2.2'
            floor='1.6'
            amount='1.2' />

          <Card img={logo4}
            title='Otherdeed #9839'
            bought='2.2'
            floor='1.6'
            amount='1.2' />


          <Card
            img={logo5}
            title='Cryptoz #9839'
            bought='2.2'
            floor='1.6'
            amount='1.2' />

        </div>

      </div>





    </div>
  );
}

export default App;
