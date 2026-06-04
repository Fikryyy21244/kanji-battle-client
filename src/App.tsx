import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <main className="w-full h-full">
        <Outlet />
      </main>
    </>
  );
}

export default App;
