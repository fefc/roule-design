import React, { Suspense } from 'react';

import RootPage from './pages/root';

const App = () => {
  return (
    <Suspense fallback={null}>
      <RootPage/>
    </Suspense>
  );
}

export default App;
