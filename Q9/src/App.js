import Props from './Props';
import './App.css';
import States from './States';

function App() {
  return (
    <div >
      <div style={{display:"flex",justifyContent:"center"}}>
      <Props train="Rajdhani" bst="Mumbai central" dest="Gurgaon" sclass="Two tier" />
      </div>
      <div style={{display:"flex",justifyContent:"center"}}>
      <States/>
      </div>
    </div>
  );
}

export default App;
