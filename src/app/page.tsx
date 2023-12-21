import { HomePage } from "@/components/HomePage";
import Navbar from "@/components/Navbar";

export default function BasicDemo() {


  return (
    <div className="card flex justify-content-center align-items-center h-screen bg-white">
      <Navbar/>
      <HomePage/>
    </div>
  );
}
