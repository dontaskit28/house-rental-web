import "../styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/NavBar";
import { AuthContextProvider } from "../context/AuthContext";
import "../config/firebase";
import { useRouter } from "next/router";
import ProtectedRoute from "./components/ProtectedRoute";
import { SignedIn } from "./components/ProtectedRoute";
import {ToastContainer} from 'react-toastify'

function MyApp({ Component, pageProps }) {
  const signNotRequired = ["/login", "/signup"];
  const signRequired = ["/checkout", "/profile"];
  const router = useRouter();
  if (router.pathname == "/") {
    return (
      <AuthContextProvider>
        <ToastContainer />
        <SignedIn>
          <Component {...pageProps} />
        </SignedIn>
      </AuthContextProvider>
    );
  }
  return (
    <AuthContextProvider>
      <ToastContainer />
      <Navbar />
      {router.pathname.includes("/components") ? (
        <div className="flex items-center justify-center mt-10 text-2xl font-bold">
          You Don't Have Permission To Be Here
        </div>
      ) : signRequired.includes(router.pathname) ? (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      ) : signNotRequired.includes(router.pathname) ? (
        <SignedIn>
          <Component {...pageProps} />
        </SignedIn>
      ) : (
        <Component {...pageProps} />
      )}
    </AuthContextProvider>
  );
}

export default MyApp;
