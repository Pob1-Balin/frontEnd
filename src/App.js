import React, { Suspense } from 'react'
import { Triangle } from 'react-loader-spinner'
const Navigations = React.lazy(() => import("./Navigations"));
function App() {
  return (
    
    <>
      <Suspense fallback={<Triangle height="80" width="80" radius="9" color="#23AFCB" ariaLabel="loading" wrapperStyle={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} wrapperClass />}>
        <div className="App">
          <Navigations/>
        </div>
      </Suspense>
    </>
  );
}

export default App;
