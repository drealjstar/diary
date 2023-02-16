import "./App.css";
import HomePage from "./Component/diaryHomePage";
import SignUp from "./Component/signUp";
import Note from "./Component/notePage";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import {store, persistor} from "./Redux/store";
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';


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
    
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

       <RouterProvider router={router} />
 
      </PersistGate>
    </Provider>

  );
}

export default App;
