import { useState } from 'react';
import './App.css';
import FormExample from './FormExample';
import FormExample1 from './FormExample1';
import ShowData from './ShowData';

const onSubmit = (v) => {
  alert('Submit value: ' + JSON.stringify(v, null, 2))
}

function App() {
  const [formFields, setFormFields] = useState({})
  const [errors, setErrors] = useState({})
  const [valid, setValid] = useState()
  const [firstForm, setFirstForm] = useState(true)

  return (
    <div className="App">
      <select
        onChange={(evt) => 
          setFirstForm(evt.target.value === 'first')
        }
      >
        <option value="first">Single field</option>
        <option value="second">Multiple fields</option>
      </select>
      <main>
        {firstForm ? 
          <FormExample 
            onChange={(ff, v, e) => {
              setFormFields(ff)
              setValid(v)
              setErrors(e)
            }}
            onSubmit={onSubmit}
          /> :
          <FormExample1
            onChange={(ff, v, e) => {
              setFormFields(ff)
              setValid(v)
              setErrors(e)
            }}
            onSubmit={onSubmit}
          />
        }
        <ShowData 
          data={{formFields, valid, errors}}
        />
      </main>
    </div>
  );
}

export default App;
