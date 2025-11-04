import ProfileItem from './ProfileItem'

export default function ProfileList({ profiles, onAdd, onEdit, onDeleteRequest }) {
  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-14 h-14 rounded-full border-2 border-red-400 flex items-center justify-center text-red-600 font-bold text-lg">JD</div>
          <div>
            <div className="font-medium">Me <span className="text-gray-500 text-sm">♂</span></div>
            <div className="text-sm text-gray-500">(optional) 5 profiles can be saved</div>
          </div>
        </div>

        <div>
          <button onClick={onAdd} className="w-full md:w-64 mx-auto text-center px-6 py-3 rounded-full border-2 border-red-300 text-red-600 hover:bg-red-50">+ Add New</button>
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
