import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

export default function App() {
  console.log(import.meta.env.VITE_REACT_APP_COINGEKO_BASE_URL);
  return (
    <main className="h-screen w-screen">
      <Header />
      <Dashboard />
    </main>
  );
}
