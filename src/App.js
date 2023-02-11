import './App.css';
import HomePage from "./Component/diaryHomePage";
import SignUp from './Component/signUp';
import Note from './Component/notePage';
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

const App = () => {
  return (

    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
