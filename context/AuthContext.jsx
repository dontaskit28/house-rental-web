import { createContext, useContext, useEffect, useState } from "react";
import { v4 } from "uuid";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { db } from "../config/firebase";
import { storage } from "../config/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { collection, getDocs, addDoc, updateDoc } from "firebase/firestore";
import {useCollectionData} from 'react-firebase-hooks/firestore'

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const users = collection(db, "users");
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        afterLogin(user.email);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const signup = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const createUser = async (data) => {
    setUser({
      email: data.email,
      name: data.name,
      isSeller: data.role == "landloard",
    });
    return await addDoc(users, {
      email: data.email,
      name: data.name,
      wishlist: [],
      isSeller: data.role == "landloard",
    });
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const afterLogin = async (email) => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      if (doc.data().email === email) {
        return setUser(doc.data());
      }
    });
  };
  const uploadHome = async (data) => {
    if (user && user.isSeller) {
      try {
        const house_id = v4();
        const storageRef = ref(
          storage,
          `houses/${data.image.name + "_" + house_id}`
        );
        const houses = collection(db, "houses");
        const uploadTask = uploadBytesResumable(storageRef, data.image);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            console.log(snapshot);
          },
          (error) => {
            alert(error);
          },
          async () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                await addDoc(houses, {
                  ...data,
                  _id: house_id,
                  image: downloadURL,
                  owner: user.email,
                });
                return alert("Uploaded Succesfully...");
              }
            );
          }
        );
      } catch (err) {
        alert("Home not uploaded...");
      }
    }
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        login,
        logout,
        createUser,
        afterLogin,
        uploadHome,
      }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
