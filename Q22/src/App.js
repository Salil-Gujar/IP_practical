

import './App.css';

function App() {
  const myStyle={
    backgroundColor:"aquamarine",
    color:"blue",
    border:"5px solid blue",
    borderRadius:"5px",
    padding:"20px"
  }
  return (
    <>
      <div className='class1'>
        <h1>This is the first partition.</h1>
        <p>You are insecure! Don't know what for, you are turning heads when you walk through the door. Don't need makeup, to coverup, Being the way that you are is enough, everyone else in the room could see it, everyone else but you ooh . BABY! you light up my world like nobody else, the way that you flip your hair gets me overwhelmed but when you smile at the ground it ain't hard to tell, you don
          t know oh oh you don't know you are beautiful if only you saw what i can see you will understand why I want you so desperately right now I am looking at you and I cant believe you dont know oh oh you dont know you're beautiful that's what makes you beautiful!
        </p>
      </div>
      <div className='class2' style={myStyle}>
        <h1>This is the second partition.</h1>
        <p>You are insecure! Don't know what for, you are turning heads when you walk through the door. Don't need makeup, to coverup, Being the way that you are is enough, everyone else in the room could see it, everyone else but you ooh . BABY! you light up my world like nobody else, the way that you flip your hair gets me overwhelmed but when you smile at the ground it ain't hard to tell, you don
          t know oh oh you don't know you are beautiful if only you saw what i can see you will understand why I want you so desperately right now I am looking at you and I cant believe you dont know oh oh you dont know you're beautiful that's what makes you beautiful!
        </p>
      </div>
      <div className='class3' style={{backgroundColor:"yellow",color:"red",border:"5px solid red",borderRadius:"5px",padding:"20px"}}>
        <h1>This is the third partition.</h1>
        <p>You are insecure! Don't know what for, you are turning heads when you walk through the door. Don't need makeup, to coverup, Being the way that you are is enough, everyone else in the room could see it, everyone else but you ooh . BABY! you light up my world like nobody else, the way that you flip your hair gets me overwhelmed but when you smile at the ground it ain't hard to tell, you don
          t know oh oh you don't know you are beautiful if only you saw what i can see you will understand why I want you so desperately right now I am looking at you and I cant believe you dont know oh oh you dont know you're beautiful that's what makes you beautiful!
        </p>
      </div>
    </>
  );
}

export default App;
