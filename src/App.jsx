import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import { Provider } from "./contexts/ItemsContext";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Bienvenido" />}
          ></Route>
          <Route
            path="/category/:id"
            element={<ItemListContainer greeting="Manga" />}
          ></Route>
          <Route
            path="/item/:id"
            element={<ItemDetailContainer greeting="Item" />}
          ></Route>
          <Route path="*" element={404}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
