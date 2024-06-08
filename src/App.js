import React, { useEffect, useState } from "react"
import { MyModal } from "./MyModal"
import { STRIP_COST, koeffsArr } from "./data"

export const App = () => {
  const [plotLength, setPlotLength] = useState(0)
  const [stripCount, setStripCount] = useState(0)

  const [isActive, setIsActive] = useState(false)

  const [koeffs, setKoeffs] = useState({})

  useEffect(() => {
    koeffsArr.forEach(k => setKoeffs(prev => ({ ...prev, [k.id]: k.defaultValue })))
  }, [])

  const [result, setResult] = useState(0)

  const submitHandler = e => {
    e.preventDefault()

    let result = plotLength * stripCount * STRIP_COST

    const layersK6 = koeffs["layer"]

    let otherKoeffs = 0

    koeffsArr.forEach(k => {
      if (k.id === "layer") {
      } else {
        otherKoeffs += koeffs[k.id] / 100
      }
    })

    console.log("otherKoeffs", otherKoeffs)
    console.log("layersK6", layersK6)

    setResult(result * (1 - layersK6) * (1 - otherKoeffs))
  }

  const resetHandler = () => {
    setPlotLength(0)
    setStripCount(0)
    setKoeffs({})
  }

  return (
    <div className="wrapper">
      <form onSubmit={e => submitHandler(e)}>
        <label>
          Длина участка
          <input type="number" value={plotLength} onChange={e => setPlotLength(e.target.value)} />
        </label>
        {/* <label>
          Стоимость полосы
          <input type="number" value={stripCost} onChange={e => setStripCost(e.target.value)} />
        </label> */}

        <label>
          Кол-во полос
          <input type="number" value={stripCount} onChange={e => setStripCount(e.target.value)} />
        </label>
        <label>Стоимость полосы: {STRIP_COST}</label>
        <button>Посчитать</button>
      </form>
      {result && <h1>Результат: {result} миллионов</h1>}

      <MyModal setK={setKoeffs} kData={koeffs} isActive={isActive} setIsActive={setIsActive} />

      <button onClick={resetHandler}>Сбросить все пока не работает кнопка</button>
    </div>
  )
}
