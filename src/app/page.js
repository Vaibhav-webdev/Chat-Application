// import Navbar from "./components/navbar";
// import Footer from "./components/footer";
import Left from "./components/Left";
import Right from "./components/Right";
import { auth } from "./auth";

export default async function Home() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }
  return (
    <>
      <main className="min-h-screen flex items-center justify-center relative bg-[#017092] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-600 rounded-full blur-[180px] opacity-40"></div>

      {/* Glass Container */}
      <div className="relative w-[90%] max-w-6xl h-[80vh] rounded-2xl 
        bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl 
        flex overflow-hidden">

        {/* Sidebar */}
        <Left />

        {/* Chat Area */}
        <Right />

      </div>
    </main>
    </>
  );
}
