import { SignIn } from './components/SignIn';
import './App.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { AuthProvider } from './components/AuthProvider';
import { PrivateRoute } from './components/PrivateRoute';


function App() {

  const user = useAuthState(auth);

  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
         <Routes>
           <Route path='/signin' element={<SignIn/>}/>
           <Route path='/line' element={<PrivateRoute/>}/>
         </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
