import { useEffect, useRef, useState } from "react"
import { koeffsArr, layersArr, layersData } from "./data"
import useOnClickOutside from "./utils/useClickOutside"

export const MyModal = ({ setIsActive, isActive, kData, setK }) => {
  const [activeLayer, setActiveLayer] = useState(null)

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
      <button onClick={() => setIsActive(true)}>Редактировать коэффициенты</button>
      {isActive && (
        <div className="modal-wrapper">
          <div ref={modalRef} className="modal-container" onClick={e => e.stopPropagation()}>
            {koeffsArr.map(k => (
              <div key={k.id}>
                <label>
                  Учитывать
                  <input
                    type="checkbox"
                    checked={!!kData[k.id]}
                    onChange={e => {
                      const newObj = { ...kData }
                      if (e.target.checked) {
                        setK(newObj)
                      } else {
                        delete newObj[k.id]
                        setK(newObj)
                      }
                    }}
                  />
                </label>
                <label>
                  {k.label}
                  <input type="number" value={kData[k.id]} onChange={e => setK({ ...kData, [k.id]: e.target.value })} />
                </label>
              </div>
            ))}
            <p>Выберите кол-во слоев, это 6 kэф:</p>
            {layersArr.map(layer => (
              <label key={layer.value}>
                {layer.label}
                <input type="radio" checked={activeLayer === layer.value} onChange={() => setActiveLayer(layer.value)} />
              </label>
            ))}
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
