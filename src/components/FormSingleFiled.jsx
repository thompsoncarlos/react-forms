import { useState } from "react";
import './Form.css';

const FormSingleFiled = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  return (
    <>
      <h2>Form with a single field</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormSingleFiled;
