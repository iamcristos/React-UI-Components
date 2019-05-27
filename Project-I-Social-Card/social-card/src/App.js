import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer'



const content = {
  title: 'Lambda School',
  handle: '@LambdaSchool',
  time: '26 jan'
}
const image = {
  url: 'https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png',
  alt: 'logo'
}
const App = () => {
  
  return (
    <div>
      <HeaderContainer content={content} image={image}/>
    </div>
  );
};

export default App;
