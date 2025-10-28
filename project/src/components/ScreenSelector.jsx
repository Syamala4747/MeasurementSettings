export default function ScreenSelector({ selected = 1, onSelect = () => {} }) {
  return (
    <div className="flex items-center space-x-2">
      {[1, 2, 3, 4].map((n) => (
        <button
          key={n}
          onClick={() => onSelect(n)}
          className={`px-3 py-1 rounded-full border transition-colors text-sm font-medium ${
            selected === n
              ? 'bg-red-600 text-white border-red-600'
              : 'bg-white text-gray-700 border-gray-200'
          }`}
        >
          Screen {n}
        </button>
      ))}
    </div>
  )
}
