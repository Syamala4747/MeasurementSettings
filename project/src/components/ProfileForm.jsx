import { useState, useEffect } from 'react'

export default function ProfileForm({ profile = null, onCancel, onSave }) {
  const [form, setForm] = useState({ name: '', gender: 'male', clothingSize: '', notes: '' })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (profile) setForm(profile)
  }, [profile])

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 10)
    return () => clearTimeout(id)
  }, [])

  function update(k, v) {
    setForm((s) => ({ ...s, [k]: v }))
  }

  function submit(e) {
    e.preventDefault()
    // play exit animation, then call onSave
    setVisible(false)
    setTimeout(() => onSave(form), 180)
  }

  function handleCancel() {
    setVisible(false)
    setTimeout(() => onCancel && onCancel(), 180)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className={`absolute inset-0 bg-black/40 transition-opacity ${visible ? 'opacity-100' : 'opacity-0'}`} onClick={handleCancel}></div>

      <form onSubmit={submit} className={`relative bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 z-10 transform transition-all duration-200 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">{profile ? 'Edit Measurement' : 'Add Measurement'}</h3>
          <button type="button" onClick={handleCancel} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Measurement Profile Name</label>
            <input value={form.name} onChange={(e) => update('name', e.target.value)} className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <div className="flex items-center space-x-2">
              <button type="button" onClick={() => update('gender', 'male')} className={`px-3 py-1 rounded-full ${form.gender === 'male' ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}>♂ Male</button>
              <button type="button" onClick={() => update('gender', 'female')} className={`px-3 py-1 rounded-full ${form.gender === 'female' ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}>♀ Female</button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Clothing Size</label>
            <input value={form.clothingSize} onChange={(e) => update('clothingSize', e.target.value)} className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Custom Field (optional)</label>
            <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} className="w-full border rounded px-3 py-2" rows={4} />
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <button type="button" onClick={handleCancel} className="px-4 py-2 rounded border">Cancel</button>
          <button type="submit" className="px-6 py-2 rounded bg-red-600 text-white">Save Measurement</button>
        </div>
      </form>
    </div>
  )
}
