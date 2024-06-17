import { useEffect, useState } from "react"
import { STRIP_COST, koeffsArr } from "./const/data"
import { MyModal } from "./components/MyModal"
import { CalculateIcon } from "./components/icons/CalculateIcon"
import logo from "./assets/logo.png"

export const App = () => {
  const [plotLength, setPlotLength] = useState(0)
  const [stripCount, setStripCount] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [koeffs, setKoeffs] = useState({})
  const [result, setResult] = useState(0)

  const resetKoeffsToDefault = () => {
    koeffsArr.forEach(k => setKoeffs(prev => ({ ...prev, [k.id]: { value: k.defaultValue, active: true } })))
  }

  useEffect(() => {
    resetKoeffsToDefault()
  }, [])

  const submitHandler = e => {
    e.preventDefault()

    if (!plotLength || !stripCount) {
      alert("Значения должны быть больше нуля")
      return
    }

    const layersK6 = koeffs["layer"]

    if (layersK6 === undefined) {
      alert("Введите кол-во слоев")
      return
    }

    let result = plotLength * stripCount * STRIP_COST

    let otherKoeffs = 0

    koeffsArr.forEach(k => {
      if (k.id !== "layer" && koeffs[k.id].active) {
        otherKoeffs += koeffs[k.id].value / 100
      }
    })

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
      <header>
        <div className="header-title">
          <img src={logo} width={60} height={80} />
          <h1 className="my-h">Разработано в МФ МГТУ им Н.Э. Баумана</h1>
        </div>
        <div className="header-desc">
          <h1 className="my-h">Программа для расчёта стоимости строительства дорожного полотна</h1>
        </div>
      </header>
      <form onSubmit={e => submitHandler(e)}>
        <label>
          Длина участка:
          <input type="number" value={plotLength} onChange={e => setPlotLength(e.target.value)} />
        </label>
        <label>
          Кол-во полос:
          <input type="number" value={stripCount} onChange={e => setStripCount(e.target.value)} />
        </label>
        <label>
          <h1 className="my-h">Стоимость полосы: {STRIP_COST}</h1>
        </label>
        <button className="icon-container">
          Посчитать
          <div className="icon">
            <CalculateIcon />
          </div>
        </button>
      </form>
      {result ? <h1>Результат: {result} миллионов</h1> : null}
      <MyModal setK={setKoeffs} kData={koeffs} isActive={isActive} setIsActive={setIsActive} />
      <button onClick={resetHandler}>Сбросить все</button>
    </div>
  )
}
