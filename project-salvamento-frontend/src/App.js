import { createContext } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import ProcessContext from "./context/process.context";
import MainScreen from "./pages/MainScreen";
//import ErrorScreen from './pages/ErrorScreen';
import AddScreen from "./pages/AddScreen";
import EditScreen from './pages/EditScreen';
import ViewScreen from './pages/ViewScreen';

export const UserContext = createContext()

function App() {
  return (
    //<ProcessContext>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/add" element={<AddScreen />} />
        <Route path='/view' element={<ViewScreen />} />
        <Route path='/edit' element={<EditScreen />} />
      </Routes>
    </BrowserRouter>
    //</ProcessContext>
  );
}

export default App;
//<Route path='*' element={<ErrorScreen />} />