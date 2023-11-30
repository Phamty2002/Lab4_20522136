import React, { Suspense } from 'react';
import { BounceLoader } from 'react-spinners'; // Assuming you're using react-spinners

// This is the component you are loading, for example, a lazy-loaded component.
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading... <BounceLoader /></div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
