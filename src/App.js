import './App.css';
import HomePage from "./Component/diary";
import SignUp from './Component/signUp';
import Note from './Component/note';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/sign",
    element: <SignUp />,
  },
  {
    path: "/note",
    element: <Note />,
  }


]);

const App = () =>{
  return (
    
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
