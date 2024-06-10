import { useEffect, useRef, useState } from "react"
import { koeffsArr, layersArr, layersData } from "./data"
import useOnClickOutside from "./utils/useClickOutside"
import { QuestionIcon } from "./utils/QuestionIcon"

export const MyModal = ({ setIsActive, isActive, kData, setK }) => {
  const [activeLayer, setActiveLayer] = useState(null)

  const [activeTooltip, setActiveTooltip] = useState("")

  const modalRef = useRef(null)

  useOnClickOutside(modalRef, () => setIsActive(false))

  useEffect(() => {
    setK({ ...kData, layer: layersData[activeLayer] })
  }, [activeLayer])

  useEffect(() => {
    if (!!kData["layer"]) {
      setActiveLayer(kData["layer"])
    }

    return () => setActiveLayer(null)
  }, [])

  // console.log('kData', kData)

  return (
    <>
      <button onClick={() => setIsActive(true)}>Редактировать коэффициенты</button>
      {isActive && (
        <div className="modal-wrapper">
          {/* <p className="my-h">Редактирование коэффициентов</p> */}
          <div ref={modalRef} className="modal-container" onClick={e => e.stopPropagation()}>
            {koeffsArr.map(k => (
              <div className="koeff-container" key={k.id}>
                <label className="label-container">
                  <p className="my-h">Учитывать</p>
                  <input
                    id={k.id}
                    type="checkbox"
                    checked={kData[k.id].active}
                    onChange={e => {
                      if (e.target.checked) {
                        setK({ ...kData, [k.id]: { ...kData[k.id], active: true } })
                      } else {
                        setK({ ...kData, [k.id]: { ...kData[k.id], active: false } })
                      }
                    }}
                  />
                </label>
                <div className="tooltip-container">
                  <label>
                    <span className="my-h" onMouseOver={() => setActiveTooltip(k.id)} onMouseLeave={() => setActiveTooltip("")}>
                      <QuestionIcon />
                      {k.label}
                    </span>
                    <input
                      type="number"
                      value={kData[k.id].value}
                      onChange={e => setK({ ...kData, [k.id]: { ...kData[k.id], value: e.target.value } })}
                    />
                  </label>
                  {activeTooltip === k.id && <p className="tooltip">{k.desc}</p>}
                </div>
              </div>
            ))}
            <p className="my-h">Выберите кол-во слоев, это 6 kэф как назвать:</p>
            <div className="layer-container">
              {layersArr.map(layer => (
                <div className="form_radio" key={layer.value}>
                  <input id={layer.label} type="radio" checked={activeLayer === layer.value} onChange={() => setActiveLayer(layer.value)} />
                  <label htmlFor={layer.label} className="radio-label">
                    {layer.label}
                  </label>
                </div>
              ))}
            </div>
            <button
              onClick={e => {
                e.stopPropagation()
                setIsActive(false)
              }}
            >
              Сохранить
            </button>
          </div>
        </div>
      )}
    </>
  )
}
