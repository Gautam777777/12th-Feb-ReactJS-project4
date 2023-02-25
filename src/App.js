//1.Import Area

import './App.css';
import AComp1 from './Components/AComp1';
import BComp2 from './Components/BComp2';

//2.Function Defination Area

function App() {
  return (
    <div>
      <AComp1 surname="SHARMA"/>
      <AComp1 surname="SHARMA"/> 
      <BComp2 /> 
    </div>
  );
}

//3.Export Area
export default App;
