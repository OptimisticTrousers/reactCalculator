import React, {Component} from 'react';
import './App.css'
import {Body} from './components/Body'
import {Panel} from './components/Panel'
import {Wrapper} from './components/Wrapper'



function App() {



   return (
     <><p >Hello there</p><div>
       <Wrapper>
        <Panel/>
        <Body />
         
       </Wrapper>  
      </div></>
   );
 }
 

export default App;