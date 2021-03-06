import React, {useState, useEffect} from "react";

//Хук эффекта даёт вам возможность выполнять побочные эффекты в функциональном компоненте (загрузка данных, оформление подписки и изменение DOM вручную)

function App() {
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0, y: 0
  });

  // useEffect(() => { //без второго параметра вызывается каждый раз, когда происходит рендер компонента
  //   console.log(123);
  // });

  useEffect(() => {
    // console.log('type checnge', type);
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(response => response.json())
        .then(json => setData(json))
  }, [type]); //[] - dependencies, от чего должен зависеть. срабатывай, если type изменился

  const mouseMoveHandler = event => {
      setPos({
        x: event.clientX,
        y: event.clientY
      });
  }

  useEffect(() => {
    console.log('Component did mount');

    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    }
  }, []);

  return (
    <div>
      <h1>Ресурс: {type}</h1>

      <button onClick={() => setType('users')}>Пользователи</button>
      <button onClick={() => setType('todos')}>Todos</button>
      <button onClick={() => setType('posts')}>Посты</button>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}

export default App;
