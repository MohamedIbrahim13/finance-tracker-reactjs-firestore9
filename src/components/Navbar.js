import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuth } from "../hooks/useAuth";
import { useSignout } from "../hooks/useSignout";

export default function Navbar() {
  const { signout } = useSignout();
  const { user } = useAuth();
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>Money Tracker</li>

        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li>hello, {user.displayName}</li>
            <li>
              <button className="btn" onClick={signout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
