import { useEffect, useState } from "react"
import { MyModal } from "./MyModal"
import { STRIP_COST, koeffsArr } from "./data"

export const App = () => {
  const [plotLength, setPlotLength] = useState(0)
  const [stripCount, setStripCount] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [koeffs, setKoeffs] = useState({})
  const [result, setResult] = useState(0)

  const resetKoeffsToDefault = () => {
    koeffsArr.forEach(k => setKoeffs(prev => ({ ...prev, [k.id]: k.defaultValue })))
  }

  useEffect(() => {
    resetKoeffsToDefault()
  }, [])

  const submitHandler = e => {
    e.preventDefault()

    const layersK6 = koeffs["layer"]

    console.log("layersK6", layersK6)

    if (layersK6 === undefined) {
      alert("Введите кол-во слоев")
      return
    }

    let result = plotLength * stripCount * STRIP_COST

    let otherKoeffs = 0

    koeffsArr.forEach(k => {
      if (k.id !== "layer" && !!koeffs[k.id]) {
        otherKoeffs += koeffs[k.id] / 100
      }
    })

    console.log("result", result)
    console.log("1 - layersK6", 1 - layersK6)
    console.log("1 - otherKoeffs", 1 - otherKoeffs)

    setResult(result * (1 - layersK6) * (1 - otherKoeffs))
  }

  const resetHandler = () => {
    setPlotLength(0)
    setStripCount(0)
    resetKoeffsToDefault()
    setResult(0)
  }

  return (
    <div className="wrapper">
      <form onSubmit={e => submitHandler(e)}>
        <label>
          Длина участка
          <input type="number" value={plotLength} onChange={e => setPlotLength(e.target.value)} />
        </label>
        <label>
          Кол-во полос
          <input type="number" value={stripCount} onChange={e => setStripCount(e.target.value)} />
        </label>
        <label>Стоимость полосы: {STRIP_COST} (для упрощения пока 1 поставил, чтобы такие большие суммы не были потом верну)</label>
        <button>Посчитать</button>
      </form>
      {result && <h1>Результат: {result} миллионов</h1>}
      <MyModal setK={setKoeffs} kData={koeffs} isActive={isActive} setIsActive={setIsActive} />
      <button onClick={resetHandler}>Сбросить все</button>
    </div>
  )
}
