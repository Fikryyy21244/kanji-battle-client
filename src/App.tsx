import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* GLOBAL BACKGROUND (always visible di semua halaman) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-100 h-100 bg-blue-500/20 blur-3xl rounded-full -top-40 -left-40" />
        <div className="absolute w-87.5 h-87.5 bg-pink-400/20 blur-3xl rounded-full -bottom-40 -right-40" />
      </div>

      {/* CONTENT */}
      <main className="relative z-10 min-h-screen w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
