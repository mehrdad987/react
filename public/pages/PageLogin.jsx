import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X, PhoneCall } from "lucide-react";

export default function PageLogin() {
  const [user, setUser] = useState(null);
  const [view, setView] = useState("login");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = { username: formData.get("username"), password: formData.get("password") };
    setUser(userData);
    setView("info");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Signup successful! Now login.");
    setView("login");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 relative" style={{ backgroundImage: "url('/path-to-your-image.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      {/* Hamburger Menu */}
      <button className="absolute top-4 right-4 text-white bg-gray-800 p-2 rounded-lg" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {menuOpen && (
        <div className="absolute top-12 right-4 bg-white shadow-lg rounded-lg p-4 w-48">
          <ul className="text-black">
            <li className="py-2 border-b cursor-pointer">Home</li>
            <li className="py-2 border-b cursor-pointer">Services</li>
            <li className="py-2 border-b cursor-pointer">Product</li>
            <li className="py-2 cursor-pointer">Info</li>
          </ul>
        </div>
      )}

      {/* Main Card */}
      <Card className="bg-white shadow-lg rounded-xl w-full max-w-md text-center">
        <CardContent className="p-10">
          {view === "login" && (
            <>
              <h2 className="text-2xl mb-4 text-blue-500">Login</h2>
              <form onSubmit={handleLogin}>
                <input type="text" name="username" placeholder="Username" className="block w-full p-2 mb-2 border rounded text-black" required />
                <input type="password" name="password" placeholder="Password" className="block w-full p-2 mb-4 border rounded text-black" required />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Login</button>
              </form>
            </>
          )}
          {view === "signup" && (
            <>
              <h2 className="text-2xl mb-4 text-green-500">Signup</h2>
              <form onSubmit={handleSignup}>
                <input type="email" name="email" placeholder="Email" className="block w-full p-2 mb-2 border rounded text-black" required />
                <input type="password" name="password" placeholder="Password" className="block w-full p-2 mb-4 border rounded text-black" required />
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Signup</button>
              </form>
            </>
          )}
          {view === "info" && user && (
            <>
              <h2 className="text-2xl mb-4 text-yellow-500">User Info</h2>
              <p>Username: {user.username}</p>
              <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg" onClick={() => setView("login")}>
                Logout
              </button>
            </>
          )}
        </CardContent>
      </Card>
      
      {/* Login & Signup Buttons */}
      <div className="flex justify-around mt-4 w-full max-w-md">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full mx-2" onClick={() => setView("login")}>
          Login
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg w-full mx-2" onClick={() => setView("signup")}>
          Signup
        </button>
      </div>
      
      {/* Floating Call Button */}
      <div className="fixed bottom-16 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer">
        <PhoneCall size={24} />
      </div>
      
      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-center p-4 bg-gray-800 text-white">
        © 2025 Your Company. All rights reserved.
      </footer>
    </div>
  );
}
