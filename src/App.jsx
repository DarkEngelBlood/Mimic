import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido" />}></Route>
        <Route path="/category/:id" element={<ItemListContainer greeting="Manga" />}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer greeting="Item" />}></Route>
        <Route path="*" element={404}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
