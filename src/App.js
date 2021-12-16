import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  const { authIsReady } = useAuth();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<PrivateHome />}>
              <Route element={<Home />} />
            </Route>
			<Route path="/login" element={<PrivateLogin />}>
              <Route element={<Login />} />
            </Route>
            <Route path="/signup" element={<PrivateRegister />}>
              <Route element={<Signup />} />
            </Route>
            
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

function PrivateHome() {
  const { user } = useAuth();
  return user ? <Home /> : <Navigate to="/login" />;
}

function PrivateRegister() {
  const { user } = useAuth();
  return user && user.displayName ? <Navigate to="/" /> : <Signup />;
}

function PrivateLogin() {
  const { user } = useAuth();
  return user ? <Navigate to="/" /> : <Login />;
}
