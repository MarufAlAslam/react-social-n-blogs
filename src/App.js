import { useState } from 'react';
import app from './utils/firebase/firebase.config'
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

function App() {

  const auth = getAuth(app);

  const [user, setUser] = useState(null)

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        setUser(result.user)
        console.log(user)
      }
      )
      .catch(error => {
        console.log(error)
      }
      )
  }
  return (
    <div className="App">
      <button onClick={loginWithGoogle}>Click me</button>
    </div>
  );
}

export default App;
