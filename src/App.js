import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome, Register, Home, Search, ProfileIndex, ProfileInfo, ProfileWallet, ProfileOrders, ContactUs, ProfileExit } from "./pages";

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
          <Route path="wallet" element={<ProfileWallet />} />
          <Route path="orders" element={<ProfileOrders />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="logout" element={<ProfileExit />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
