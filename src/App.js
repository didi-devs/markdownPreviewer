import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>Convert your Markdown</h1>
      <div className="row"></div>
      <div className="col-6">
        <textarea id='editor'/>
      </div>
      <div className="col-6"></div>
    </div>
  );
}


export default App;
