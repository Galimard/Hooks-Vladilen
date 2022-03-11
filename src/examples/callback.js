import React, {useState, useCallback} from "react";
import ItemsList from "./ItemsList";

function App() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? 'darkred' : 'black'
  }; 

  const generateItemsFromAPI = useCallback(() => { //useMemo, только для функций, не для объектовю Метод возвращает саму функцию, а не ее результат
    return new Array(count).fill('').map((_, i) => `Элемент ${i + 1}`);
  }, [count]);

  return (
    <div>
      <h1 style={styles}>Количество элементов: {count}</h1>
      <button className="btn btn-success" onClick={() => setCount(prev => prev + 1)}>Добавить</button>
      <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Изменить</button>

      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  );
}

export default App;
