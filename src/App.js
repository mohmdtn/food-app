import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome, Register, Home, Search, ProfileIndex, ProfileInfo } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />

        <Route path="/profile">
          <Route index element={<ProfileIndex />} />
          <Route path="info" element={<ProfileInfo />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
