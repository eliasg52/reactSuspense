import './App.css';
import User from './User';
import { Suspense } from 'react';

function App() {
  return (
    <div className="App">
      <h1>My suspense App</h1>
      <Suspense fallback={<p>LOADING</p>}>
        <User />
      </Suspense>
    </div>
  );
}

export default App;
