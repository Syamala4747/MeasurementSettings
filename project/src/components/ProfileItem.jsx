export default function ProfileItem({ profile, onEdit, onDeleteRequest }) {
  return (
    <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">{profile.name.charAt(0)}</div>
        <div>
          <div className="font-medium">{profile.name}</div>
          <div className="text-xs text-gray-500">{profile.gender} • {profile.clothingSize}{profile.height ? ' • ' + profile.height : ''}</div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={() => onEdit(profile)} className="p-2 rounded-full hover:bg-gray-100" aria-label="edit">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path d="M2 15a1 1 0 011-1h3v2H3a1 1 0 01-1-1z" />
          </svg>
        </button>
        <button onClick={() => onDeleteRequest(profile)} className="p-2 rounded-full hover:bg-gray-100" aria-label="delete">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H3a1 1 0 100 2h14a1 1 0 100-2h-2V3a1 1 0 00-1-1H6zm2 6a1 1 0 011 1v6a1 1 0 11-2 0V9a1 1 0 011-1zm4 1a1 1 0 10-2 0v6a1 1 0 102 0V9z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  )
}
