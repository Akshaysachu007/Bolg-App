import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Toast from "./components/Toast";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";
import NotFound from "./pages/NotFound";
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen lg:flex">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="min-w-0 flex-1">
        <Header onMenu={() => setMenuOpen(true)} />
        <main className="px-4 py-7 sm:px-8 lg:px-10 lg:py-9">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/blog/:id" element={<DetailPage />} />
            <Route path="/edit/:id" element={<EditPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer className="px-6 pb-7 text-center text-xs text-[#a3a196]">
          © {new Date().getFullYear()} Inkspire · Made for meaningful stories
        </footer>
      </div>
      <Toast />
    </div>
  );
}
