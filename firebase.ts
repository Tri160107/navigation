import { storeDataObject } from './helper/mystorage';
import { FirebaseApp, initializeApp } from "firebase/app";
import {addDoc, collection, deleteDoc, doc, getDocs, getFirestore, QuerySnapshot} from "firebase/firestore";
import { Actor } from "./src/actor/ActorData";
import { Anime } from "./src/film/anime/AnimeData";
import { LiveAction } from "./src/film/live-action/LiveActionData";
import { Marvel } from "./src/film/marvel/MarvelData";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-toast-message";
import { getStorage } from "firebase/storage";
import { getMessaging, getToken } from "firebase/messaging";


const firebaseConfig = {
  apiKey: "AIzaSyC6qEFNbeHQWyQAJJRMXvBy7tPQjwxb_sU",
  authDomain: "myapp-faaa8.firebaseapp.com",
  projectId: "myapp-faaa8",
  storageBucket: "myapp-faaa8.appspot.com",
  messagingSenderId: "335205632515",
  appId: "1:335205632515:web:426239a59b25e018b05c36",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const storage = getStorage(app, "gs://myapp-faaa8.appspot.com");

export async function getListActor() {
  let arr: Actor[] = [];

  const collectionActor = await getDocs(collection(db, "Actor"));

  for (let i = 0; i < collectionActor.docs.length; i++) {
    let doc = collectionActor.docs[i];
    arr.push({
      id: doc.id,
      name: doc.data().name,
      image: doc.data().image,
      born: doc.data().born,
      movie: doc.data().movie,
      award: doc.data().award,
    });
  }
  return arr;
}

export async function getListAnime() {
  let arr: Anime[] = [];
  const collectionFilm = await getDocs(collection(db, "Anime"));
  for (let i = 0; i < collectionFilm.docs.length; i++) {
    let doc = collectionFilm.docs[i];
    arr.push({
      id: doc.id,
      title: doc.data().title,
      image: doc.data().image,
      year: doc.data().year,
      rate: doc.data().rate,
      description: doc.data().description,
    });
  }

  return arr;
}

export async function getListLiveAction() {
  let arr: LiveAction[] = [];
  const collectionFilm = await getDocs(collection(db, "LiveAction"));
  for (let i = 0; i < collectionFilm.docs.length; i++) {
    let doc = collectionFilm.docs[i];
    arr.push({
      id: doc.id,
      title: doc.data().title,
      image: doc.data().image,
      year: doc.data().year,
      rate: doc.data().rate,
      description: doc.data().description,
    });
  }

  return arr;
}

export async function getListMarvel() {
  let arr: Marvel[] = [];
  const collectionFilm = await getDocs(collection(db, "Marvel"));
  for (let i = 0; i < collectionFilm.docs.length; i++) {
    let doc = collectionFilm.docs[i];
    arr.push({
      id: doc.id,
      title: doc.data().title,
      image: doc.data().image,
      year: doc.data().year,
      rate: doc.data().rate,
      description: doc.data().description,
    });
  }

  return arr;
}

// add new film
export async function addFilm() {
  // add mock data
  await addDoc(collection(db, "Film"), {
    title: "Attack on Titan",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
    year: "2013",
    rate: "8.4",
    description:
      "Attack on Titan is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity lives within cities surrounded by enormous walls that protect them from gigantic",
  });
}

export async function addActor() {
  await addDoc(collection(db, "Actor"), {
    name: "Chris Hemsworth",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxCgUxxr_WRgrfE58S5lfp5UUgB5r_F-RGaNPLZh0lR2y2UNe",
    born: "1983",
    movie: "Thor, Rush, Avengers: Endgame",
    award: "People's Choice Award, MTV Movie Award, Teen Choice Award"
  })
  
}

export async function deleteActor(id: string) {
  await deleteDoc(doc(db, "Actor", id));
}

// add new film
export async function addAnime() {
  // add mock data
  let res = await addDoc(collection(db, "Anime"), {
    title: "Attack on Titan",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
    year: "2013",
    rate: 8.4,
    description:
      "Attack on Titan is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity lives within cities surrounded by enormous walls that protect them from gigantic",
  });
  return {
    id: res.id,
    title: "Attack on Titan",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
    year: "2013",
    rate: 8.4,
    description:
      "Attack on Titan is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity lives within cities surrounded by enormous walls that protect them from gigantic",
  };
}

export async function signIn(email: string, password: string, callback: (user: any)  => void) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      Toast.show({
        type: "success",
        text1: "Sign in complete",
        text2: "👋",
      });
      storeDataObject("user", userCredential.user)
      callback(userCredential.user)
    })
    .catch((error) => {
      Toast.show({
        type: "error",
        text1: error.code,
        text2: error.message
      });
    });
}

export async function signUp(email: string, password: string, callback: () => void) {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    Toast.show({
      type: "success",
      text1: "Sign up complete",
      text2: "👋"
    })
    storeDataObject("user", userCredential.user)
    callback()
  })
  .catch((error) => {
    Toast.show({
      type: "error",
      text1: error.code,
      text2: error.message
    })
    
  });
}

const messaging = getMessaging();
// Add the public key generated from the console here.
getToken(messaging, {vapidKey: "BKagOny0KF_2pCJQ3m....moL0ewzQ8rZu"});





