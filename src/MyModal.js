import React, { useEffect, useRef, useState } from "react"
import { koeffsArr, layersData } from "./data"
import useOnClickOutside from "./utils/useClickOutside"

export const MyModal = ({ setIsActive, isActive, kData, setK }) => {
  const modalRef = useRef(null)

  useOnClickOutside(modalRef, () => setIsActive(false))

  const [activeLayer, setActiveLayer] = useState(-1)

  useEffect(() => {
    setK({ ...kData, layer: layersData[activeLayer] })
  }, [activeLayer])

  return (
    <>
      <button onClick={() => setIsActive(true)}>Редактировать коэффициенты</button>
      <div ref={modalRef}>
        {isActive && (
          <div
            className="modal-container"
            onClick={e => {
              e.stopPropagation()
              console.log("тыккк")
            }}
          >
            {koeffsArr.map(k => (
              <label key={k.id}>
                {k.label}
                <input type="number" value={kData[k.id]} onChange={e => setK({ ...kData, [k.id]: e.target.value })} />
              </label>
            ))}

            <p>Выберите колво слоев, это 6 kэф:</p>

            <label>
              0 слоев
              <input type="radio" checked={activeLayer === "zero"} onChange={() => setActiveLayer("zero")} />
            </label>
            <label>
              1 слой
              <input type="radio" checked={activeLayer === "one"} onChange={() => setActiveLayer("one")} />
            </label>
            <label>
              2 слоя
              <input type="radio" checked={activeLayer === "two"} onChange={() => setActiveLayer("two")} />
            </label>

            <button
              onClick={e => {
                e.stopPropagation()
                setIsActive(false)
              }}
            >
              Сохранить
            </button>
          </div>
        )}
      </div>
    </>
  )
}
