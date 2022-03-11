import React, {useState, useEffect} from "react";

function useLogger(value) {
  useEffect(() => {
    console.log(value);
  }, [value]);
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = event => {
    setValue(event.target.value);
  }

  const clear = () => setValue('');

  return {
    bind: {value, onChange},
    value,
    clear
  }
}

function App() {
  const input = useInput('');
  const lastName = useInput('');

  useLogger(input.value);

  return (
      <div className="container pt-3">   
      {/* одинаковые названия ключей => spread {...input} */}
        <input type="text" {...input.bind} /> 
        <input type="text" {...lastName} /> 
        {/* <input type="text" value={input.value} onChange={input.onChange} />     */}
        <button className="btn btn-warning" onClick={() => input.clear()}>Очистить</button>
        <hr />   
        
        <h1>{input.value}</h1>        
      </div>  
  );
}

export default App;
