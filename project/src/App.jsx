import { useState } from 'react'
import './App.css'
import MeasurementSettings from './components/MeasurementSettings'

function App() {
  return (
    // full-viewport white background so the Measurement Settings UI occupies the entire page
    <div className="min-h-screen bg-white text-gray-900">
      <div className="w-full px-6 md:px-12 py-10">
        <MeasurementSettings />
      </div>
    </div>
  )
}

export default App
