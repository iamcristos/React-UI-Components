import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer'
import CardContainer from './components/CardComponents/CardContainer'



const content = {
  title: 'Lambda School',
  handle: '@LambdaSchool',
  time: '26 jan',
  text: `Let’s learn React by building simple interfaces with components, Don’t to overthink it,
  just keep it simple and have fun. Once you are comfortable using components you are well on
  your way mastering React`
}
const image = {
  url: 'https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png',
  alt: 'logo'
}

const cardContent = {
  url: `https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png`,
  alt: 'card image',
  text: `React makes it painless to create interactive UIs. Design simple views
        or each state in your application`,
  header: 'Get started with react'
}
const App = () => {
  
  return (
    <div className='body-container'>
      <HeaderContainer content={content} image={image}/>
      <CardContainer cardContent={cardContent}/>
    </div>
  );
};

export default App;
