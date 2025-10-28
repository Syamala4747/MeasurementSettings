import ProfileItem from './ProfileItem'

export default function ProfileList({ profiles, onAdd, onEdit, onDeleteRequest }) {
  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-12 h-12 rounded-full border-2 border-red-300 flex items-center justify-center text-red-600 font-bold">JD</div>
          <div>
            <div className="font-medium">Me <span className="text-gray-500 text-sm">♂</span></div>
            <div className="text-sm text-gray-500">(optional) 5 profiles can be saved</div>
          </div>
        </div>

        <div>
          <button onClick={onAdd} className="w-full md:w-56 text-center px-4 py-3 rounded-full border border-red-300 text-red-600">+ Add New</button>
        </div>
      </div>

      <div className="space-y-3">
        {profiles.map((p) => (
          <ProfileItem key={p.id} profile={p} onEdit={onEdit} onDeleteRequest={onDeleteRequest} />
        ))}
      </div>
    </div>
  )
}
