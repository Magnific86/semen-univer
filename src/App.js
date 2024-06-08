import React, { useState } from "react"

export const App = () => {
  const [plotLength, setPlotLength] = useState(0)
  const [stripCost, setStripCost] = useState(0)
  const [stripCount, setStripCount] = useState(0)

  const [k1, setK1] = useState(0)
  const [k2, setK2] = useState(0)

  const [result, setResult] = useState(0)

  const submitHandler = e => {
    e.preventDefault()

    setResult(plotLength * stripCost * stripCount)
  }

  const resetHandler = () => {
    setPlotLength(0)
    setStripCost(0)
    setStripCount(0)
    setK1(0)
    setK2(0)
  }

  return (
    <div className="wrapper">
      <form onSubmit={e => submitHandler(e)}>
        <label>
          Длина участка
          <input type="text" value={plotLength} onChange={e => setPlotLength(e.target.value)} />
        </label>
        <label>
          Стоимость полосы
          <input type="text" value={stripCost} onChange={e => setStripCost(e.target.value)} />
        </label>
        <label>
          Кол-во полос
          <input type="text" value={stripCount} onChange={e => setStripCount(e.target.value)} />
        </label>
        <label>
          Кэф1
          <input type="text" value={k1} onChange={e => setK1(e.target.value)} />
        </label>
        <label>
          Кэф2
          <input type="text" value={k2} onChange={e => setK2(e.target.value)} />
        </label>

        <button>Посчитать</button>
      </form>
      {result && <h1>Результат: {result}</h1>}

      <button onClick={resetHandler}>Сбросить все</button>
    </div>
  )
}
