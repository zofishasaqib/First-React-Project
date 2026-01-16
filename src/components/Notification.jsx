import React, { useEffect, useState } from 'react'

const Notification = ({ message, onClose }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => setShow(true), 10)

    const timer = setTimeout(() => {
      setShow(false)
      setTimeout(onClose, 300)
    }, 3000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div
      className={`fixed top-5 right-5 bg-[#28a745] text-white py-4 px-6 rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.3)] font-semibold text-base z-[9999] transition-all duration-300 ${
        show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-96'
      }`}
    >
      {message}
    </div>
  )
}

export default Notification
