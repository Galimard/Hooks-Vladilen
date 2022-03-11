import React, {useState} from "react";

function computeInitilCounter() {
  // console.log(123);
  return Math.trunc(Math.random() * 20);
}

function App() {
  // const counterState = useState(0); //counterState - array, деструктурируем
  // const [counter, setCounter] = useState(computeInitilCounter()); //напрямую лучше не передавать, теряется производительность
  const [counter, setCounter] = useState(() => { //передать в колбэк функцию, которая отработает один раз
    return computeInitilCounter();
  }); //напрямую лучше не передавать, теряется производительность

  const [state, setState] = useState({
    title: 'счетчик',
    date: Date.now()
  });

  function increment() {
    // setCounter(counter + 1);
    setCounter((prevCounter) => { //через коллбэк, используя предыдущее состояние
      return prevCounter + 1
    });
    // setCounter(prev => prev + 1); //сокращенный вариант
  }

  function decrement() {
    setCounter(counter - 1);
  }

  //взаимодействие с объектами в стейте const [state, setState]
  function updateTitle() { 
    setState(prev => {
      return {
        ...prev,
        title: 'New title'
      }
    });
  }

  return (
    <div>
      <h1>Счетчик: {counter}</h1>
      <button className="btn btn-success" onClick={increment}>Добавить</button>
      <button className="btn btn-danger" onClick={decrement}>Убрать</button>
      <button className="btn btn-default" onClick={updateTitle}>Изменить название</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
