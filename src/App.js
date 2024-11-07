import React, { useState } from 'react';
import InteractiveGlobe from './components/InteractiveGlobe';

function App() {
  const [action, setAction] = useState(null);

  return (
    <div className='flex h-screen'>
      {/* Control panel for actions */}
      <div className='w-1/3 p-6 bg-gray-800 text-white'>
        <h2 className='text-3xl font-semibold mb-6'>Control Panel</h2>
        <button
          className='p-2 bg-blue-500 rounded mb-2'
          onClick={() => setAction('rotate')}
        >
          Start Rotation
        </button>
        <button
          className='p-2 bg-blue-500 rounded mb-2'
          onClick={() => setAction('stopRotation')}
        >
          Stop Rotation
        </button>
        <button
          className='p-2 bg-blue-500 rounded mb-2'
          onClick={() => setAction('zoomIn')}
        >
          Zoom In
        </button>
        <button
          className='p-2 bg-blue-500 rounded mb-2'
          onClick={() => setAction('zoomOut')}
        >
          Zoom Out
        </button>
      </div>

      {/* Interactive globe section */}
      <div className='w-2/3 bg-gray-900'>
        <InteractiveGlobe triggerAction={action} />
      </div>
    </div>
  );
}

export default App;
