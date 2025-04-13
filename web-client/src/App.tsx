// import { Button } from "@/components/ui/button";
import { Outlet } from "react-router-dom";
import { Header } from "./components/ui/Header";
import { Button } from "./components/ui/button";
import { Footer } from "./components/ui/Footer";
import { Toaster } from "@/components/ui/sonner";
function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background ">
      <Header />

      <main className="flex-grow">
        <Outlet />
      </main>
      <Toaster />
      <Footer />
    </div>
  );
}

export default App;
