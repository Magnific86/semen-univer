import React, { useRef } from "react"
import { koeffsArr } from "./data"
import useOnClickOutside from "./utils/useClickOutside"

export const MyModal = ({ setIsActive, isActive, kData, setK }) => {
  const modalRef = useRef(null)

  useOnClickOutside(modalRef, () => setIsActive(false))

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
