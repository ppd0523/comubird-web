import React from 'react';
import comubirdsImg from './resources/comubird_home.jpeg';

function App() {
  return (
    <>
      <div style={{margin: '50px auto', textAlign: "center"}}>
        <h1 style={{fontSize: 20}}>껄무버드 6월 31일 출시 예정!</h1>
        <img src={comubirdsImg} alt="home page" width="80%" />
        <p>emma415g@gmail.com</p>
      </div>
    </>
  );
}

export default App;
