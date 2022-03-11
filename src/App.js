import React, {useState, useEffect, useRef, useMemo} from "react";

function App() {

  return (
    <div>
      <h1>Вычисляемое свойство: </h1>
      <button className="btn btn-success" onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
      <button className="btn btn-danger" onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
      <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Изменить</button>
    </div>
  );
}

export default App;
