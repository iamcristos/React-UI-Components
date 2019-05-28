import React from 'react';
import './App.css';
import './fonts';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import TopButton from './components/CalculatorComponent/TopButton'
import MainButton from './components/CalculatorComponent/MainButton'
const content = {
  number: 'Clear',
  action: '÷'
}

const lastContent = {
  number: 0,
  action: '='
}

const mainData =[
  {id:1,num1:7, num2:8, num3:9, action:'x'},
  {id:2,num1:4, num2:5, num3:6, action:'-'},
  {id:3,num1:1, num2:2, num3:3, action:'+'}
]
const App = () => {
  return (
    <div className='calculator-container'>
      <CalculatorDisplay />
      <TopButton content={content}/>
      {mainData.map(item=>(
        <MainButton content={item} />
      ))}
      <TopButton content={lastContent}/>
    </div>
  );
};

export default App;
