import React, { useEffect, useState } from "react"
import { MyModal } from "./MyModal"
import { koeffsArr } from "./data"

export const App = () => {
  const [plotLength, setPlotLength] = useState(0)
  const [stripCost, setStripCost] = useState(0)
  const [stripCount, setStripCount] = useState(0)

  const [isActive, setIsActive] = useState(false)

  const [koeffs, setKoeffs] = useState({})

  useEffect(() => {
    koeffsArr.forEach(k => setKoeffs(prev => ({ ...prev, [k.id]: k.defaultValue })))
  }, [])

  const [result, setResult] = useState(0)

  const submitHandler = e => {
    e.preventDefault()

    let result = plotLength * stripCost * stripCount

    koeffsArr.forEach(k => {
      result *= koeffs[k.id]
    })

    setResult(result)
  }

  const resetHandler = () => {
    setPlotLength(0)
    setStripCost(0)
    setStripCount(0)
    setKoeffs({})
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

        <button>Посчитать</button>
      </form>
      {result && <h1>Результат: {result}</h1>}

      <MyModal setK={setKoeffs} kData={koeffs} isActive={isActive} setIsActive={setIsActive} />

      <button onClick={resetHandler}>Сбросить все</button>
    </div>
  )
}
