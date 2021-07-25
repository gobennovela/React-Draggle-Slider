import React from 'react';
import './App.css';
import { SliderData } from './components/SliderData';
import ImageSlider from './ImageSlider';

function App() {
  return (
    <div className="App">
      <ImageSlider slides={SliderData}/>
    </div>
  );
}

export default App;
