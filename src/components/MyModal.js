import { useEffect, useRef, useState } from "react"
import { kefDesc6, koeffsArr, layersArr, layersData } from "../const/data"
import useOnClickOutside from "../utils/useClickOutside"
import { QuestionIcon } from "./icons/QuestionIcon"
import { EditIcon } from "./icons/EditIcon"

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

  return (
    <>
      <button className="icon-container" onClick={() => setIsActive(true)}>
        Редактировать коэффициенты
        <div className="icon">
          <EditIcon />
        </div>
      </button>
      {isActive && (
        <div className="modal-wrapper">
          <p className="my-h">Редактирование коэффициентов</p>
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
                  <label className="tooltip-label">
                    <span className="my-h" onMouseOver={() => setActiveTooltip(k.id)} onMouseLeave={() => setActiveTooltip("")}>
                      {k.label}
                      <QuestionIcon />
                    </span>
                    <span className="limit-label">{"от " + k.min + " до " + k.max}</span>
                    <input
                      type="number"
                      value={kData[k.id].value}
                      onChange={e => {
                        const value = e.target.value

                        if (value <= k.max && value >= k.min) {
                          setK({ ...kData, [k.id]: { ...kData[k.id], value } })
                        } else {
                          alert("Значения должны быть а рамках указанных")
                        }
                      }}
                    />
                  </label>
                  {activeTooltip === k.id && <p className="tooltip">{k.desc}</p>}
                </div>
              </div>
            ))}
            <div className="tooltip-container">
              <label className="tooltip-label">
                <span className="my-h" onMouseOver={() => setActiveTooltip("6kef")} onMouseLeave={() => setActiveTooltip("")}>
                  <p className="my-h">Коэффициент капитальности: </p>
                  <QuestionIcon />
                </span>
              </label>

              {activeTooltip === "6kef" && <p className="tooltip">{kefDesc6}</p>}
            </div>
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
