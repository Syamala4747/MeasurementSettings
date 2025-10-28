import { useState, useEffect } from 'react'

export default function SideForm({ profile = null, onCancel, onSave }) {
  const [form, setForm] = useState({ name: '', gender: 'male', clothingSize: '', height: '', bodySize: '', notes: '' })

  useEffect(() => {
    if (profile) setForm(profile)
    else setForm({ name: '', gender: 'male', clothingSize: '', notes: '' })
  }, [profile])

  function update(k, v) {
    setForm((s) => ({ ...s, [k]: v }))
  }

  function submit(e) {
    e.preventDefault()
    onSave(form)
  }

  return (
  <div className="bg-white rounded-lg shadow p-4 md:p-6 w-full">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">{profile ? 'Edit Measurement' : 'Add new Measurement'}</h3>
          <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.</p>
        </div>
        <button onClick={onCancel} className="text-gray-400 hover:text-gray-600">✕</button>
      </div>

  <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Measurement Profile Name</label>
          <input value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Enter profile name (e.g., Dad)" className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
          <div className="flex items-center space-x-2">
            <button type="button" onClick={() => update('gender', 'male')} className={`px-3 py-1 rounded-full ${form.gender === 'male' ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}>♂ Male</button>
            <button type="button" onClick={() => update('gender', 'female')} className={`px-3 py-1 rounded-full ${form.gender === 'female' ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}>♀ Female</button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Height</label>
          <input value={form.height} onChange={(e) => update('height', e.target.value)} placeholder={"e.g. 5'10\" or 178 cm"} className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Clothing Size</label>
          <select value={form.clothingSize} onChange={(e) => update('clothingSize', e.target.value)} className="w-full border rounded px-3 py-2">
            <option value="">Select size</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Body Size</label>
          <input value={form.bodySize} onChange={(e) => update('bodySize', e.target.value)} placeholder="e.g. Chest/Bust, Arm, Waist, Hips, Thighs" className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Custom Field <span className="text-gray-400">(optional)</span></label>
          <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} className="w-full border rounded px-3 py-2" rows={4} placeholder="Write something..." />
        </div>

        <div className="mt-6">
          <button type="submit" className="w-full py-3 rounded-full bg-red-600 text-white">Save Measurement</button>
        </div>
      </form>
    </div>
  )
}
