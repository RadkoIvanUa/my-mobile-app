// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBV1vGfWzOhgKpQFgfUvVAWVn7ui0fJML4",
  authDomain: "my-mobile-app-393212.firebaseapp.com",
  projectId: "my-mobile-app-393212",
  storageBucket: "my-mobile-app-393212.appspot.com",
  messagingSenderId: "447559223206",
  appId: "1:447559223206:web:0abd2ecfa45a95b276b167",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const storageRef = ref(storage);
