// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBwbeRcjnqTFKhaBIzAucpghY9LfiHnB1I",
  authDomain: "my-homework-457ce.firebaseapp.com",
  projectId: "my-homework-457ce",
  storageBucket: "my-homework-457ce.appspot.com",
  messagingSenderId: "890864899599",
  appId: "1:890864899599:web:679813d09a337fedeff57a",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
