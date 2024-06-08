import React, { useRef } from "react"
import { koeffsArr } from "./data"
import useOnClickOutside from "./utils/useClickOutside"

export const MyModal = ({ setIsActive, isActive, kData, setK }) => {
  const modalRef = useRef(null)

  useOnClickOutside(modalRef, () => setIsActive(false))

  console.log("kData", kData)

  return (
    <>
      <button onClick={() => setIsActive(true)}>Редактировать коэффициенты</button>
      {/* <div className="modal-wrapper" ref={modalRef}> */}
      <div ref={modalRef}>
        {/* <div
          className="modal-wrapper"
          onClick={e => {
            setIsActive(false)
            console.log("wraapeer тыккк")
          }}
        > */}
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
                <input type="text" value={kData[k.id]} onChange={e => setK(e.target.value)} />
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
