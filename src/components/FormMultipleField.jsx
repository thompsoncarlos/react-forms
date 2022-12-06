import { useState } from "react";
import "./Form.css";

const FormMultipleField = () => {
  const [inputs, setInputs] = useState({});
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );
  const [myCar, setMyCar] = useState("audi");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleTextarea = (event) => {
    setTextarea(event.target.value);
  };

  const handleSelect = (event) => {
    setMyCar(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`${inputs.username} - ${inputs.age}`);
  };

  return (
    <div>
      <h2>Form with multiple fields</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your age:
          <input
            type="number"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>
        <textarea value={textarea} onChange={handleTextarea} />
        <select value={myCar} onChange={handleSelect}>
          <option value="ferrari">Ferrari</option>
          <option value="volvo">Volvo</option>
          <option value="audi">Audi</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormMultipleField;
