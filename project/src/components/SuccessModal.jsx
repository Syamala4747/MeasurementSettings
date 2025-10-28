import { useEffect, useState } from 'react'

export default function SuccessModal({ title = 'Measurement Settings', message = 'Your profile has been saved successfully', buttonText = 'Back To Settings', onClose }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 10)
    return () => clearTimeout(id)
  }, [])

  function handleClose() {
    setVisible(false)
    setTimeout(() => onClose && onClose(), 200)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className={`absolute inset-0 bg-black/30 transition-opacity ${visible ? 'opacity-100' : 'opacity-0'}`} onClick={handleClose}></div>

      <div className={`relative bg-white rounded-lg shadow-lg w-full max-w-sm p-6 z-10 text-center transform transition-all duration-200 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-6">{message}</p>

        <button onClick={handleClose} className="w-full px-4 py-2 rounded-full bg-red-600 text-white">{buttonText}</button>
      </div>
    </div>
  )
}
