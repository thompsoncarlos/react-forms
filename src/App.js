import './App.css';
import FormMultipleField from './components/FormMultipleField';
import FormSingleFiled from './components/FormSingleFiled';

function App() {
  return (
    <div className="App">
      <h1>React Forms</h1>
      <p>Reference: <a href="https://www.w3schools.com/react/react_forms.asp"> W3Schools Tutorial</a></p>
      <FormSingleFiled />
      <br/>
      <hr />
      <FormMultipleField />
    </div>
  );
}

export default App;
