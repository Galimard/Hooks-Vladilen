import React, {useState, useCallback} from "react";

function App() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? 'darkred' : 'black'
  }; 

  return (
    <div>
      <h1 style={styles}>Количество элементов: {count}</h1>
      <button className="btn btn-success" onClick={() => setCount(prev => prev + 1)}>Добавить</button>
      <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Изменить</button>

    </div>
  );
}

export default App;
