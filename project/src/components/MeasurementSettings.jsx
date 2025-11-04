import { useState } from 'react'
import ScreenSelector from './ScreenSelector'
import ProfileList from './ProfileList'
import SideForm from './SideForm'
import ConfirmModal from './ConfirmModal'
import SuccessModal from './SuccessModal'

export default function MeasurementSettings() {
  // sample profiles
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'Me', gender: 'male', clothingSize: 'S', height: "5'10\"", bodySize: 'Chest/Bust, Arm, Waist, Hips, Thighs', notes: '' },
  ])

  const [editing, setEditing] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [deletingProfile, setDeletingProfile] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const [selectedScreen, setSelectedScreen] = useState(1)

  function handleAdd() {
    setEditing(null)
    setShowForm(true)
  }

  function handleEdit(profile) {
    setEditing(profile)
    setShowForm(true)
  }

  function handleDeleteRequest(profile) {
    // open confirmation modal
    setDeletingProfile(profile)
  }

  function confirmDelete() {
    if (!deletingProfile) return
    setProfiles((s) => s.filter((p) => p.id !== deletingProfile.id))
    setSuccessMessage('Profile has been deleted successfully')
    setShowSuccess(true)
    setDeletingProfile(null)
  }

  function handleSave(profile) {
    if (profile.id) {
      setProfiles((s) => s.map((p) => (p.id === profile.id ? profile : p)))
    } else {
      profile.id = Date.now()
      setProfiles((s) => [...s, profile])
    }
    setShowForm(false)
    setSuccessMessage('Your profile has been saved successfully')
    setShowSuccess(true)
  }

  return (
    <div className="relative">
      {/* positioned pencil near the column boundary (md+) to match screenshot */}
      <button aria-label="edit" className="hidden md:inline-flex absolute top-6 left-[42%] -translate-x-1/2 w-10 h-10 rounded-full border p-2 text-gray-400 hover:text-gray-600 bg-white shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 000-1.42l-2.34-2.34a1.003 1.003 0 00-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
        </svg>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="md:col-span-5 col-span-1">
        <h2 className="text-2xl font-semibold mb-4">Measurement Settings</h2>

        <ProfileList
          profiles={profiles}
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDeleteRequest={handleDeleteRequest}
        />
      </div>

      <div className="md:col-span-7 col-span-1">
        {showForm ? (
          <SideForm
            profile={editing}
            onCancel={() => setShowForm(false)}
            onSave={handleSave}
          />
        ) : (
          <>
            

            <div className="bg-white rounded-lg shadow p-6 min-h-[320px] md:min-h-[560px] flex items-start justify-center">
              {/* Main page preview — centered pencil icon like design */}
              <div className="w-full max-w-md h-[220px] md:h-[420px] flex items-center justify-center">
                {/* preview area intentionally left blank to match design */}
              </div>
            </div>
          </>
        )}
      </div>

      {deletingProfile && (
        <ConfirmModal
          title="Measurement Settings"
          message={`Are you sure you want to delete "<strong>${deletingProfile.name}</strong>" measurement profile?<br/><br/>All your data will be permanently removed<br/>kindly confirm`}
          onCancel={() => setDeletingProfile(null)}
          onConfirm={confirmDelete}
        />
      )}

      {showSuccess && (
        <SuccessModal
          title="Measurement Settings"
          message={successMessage || 'Your profile has been saved successfully'}
          buttonText="Back To Settings"
          onClose={() => setShowSuccess(false)}
        />
      )}
      </div>
    </div>
  )
}
