import { useEffect, useState } from 'react'

export default function ConfirmModal({ title = 'Confirm', message, onCancel, onConfirm }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // trigger enter animation
    const id = setTimeout(() => setVisible(true), 10)
    return () => clearTimeout(id)
  }, [])

  function handleCancel() {
    // play exit animation then call parent onCancel
    setVisible(false)
    setTimeout(() => onCancel && onCancel(), 200)
  }

  function handleConfirm() {
    setVisible(false)
    setTimeout(() => onConfirm && onConfirm(), 200)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className={`absolute inset-0 bg-black/40 transition-opacity ${visible ? 'opacity-100' : 'opacity-0'}`}></div>

      <div className={`relative bg-white rounded-xl shadow-2xl w-full max-w-sm p-6 z-10 transform transition-all duration-200 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-6 text-center" dangerouslySetInnerHTML={{ __html: message }} />

        <div className="space-y-3">
          <button onClick={handleCancel} className="w-full px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition">Cancel</button>
          <button onClick={handleConfirm} className="w-full px-4 py-2 rounded-full border-2 border-red-600 text-red-600 bg-white hover:bg-red-50 transition">Delete</button>
        </div>
      </div>
    </div>
  )
}
