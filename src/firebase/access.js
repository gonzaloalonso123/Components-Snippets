// import db from "../firebaseinit";
import { deleteDoc, doc, query, setDoc, where } from "firebase/firestore";
import uuid4 from "uuid4";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebaseinit";

export const createSnippet = async (name, code, language, username, idParams) => {
  const id = idParams ? idParams : uuid4();
  await setDoc(doc(db, "snippets", id), {
    name: name,
    code: code,
    language: language,
    user: username,
  });
};

export const getAllSnippets = async () => {
  const querySnapshot = await getDocs(collection(db, "snippets"));
  const snippets = [];
  querySnapshot.forEach((doc) => {
    snippets.push({ ...doc.data(), id: doc.id });
  });
  return snippets;
};

export const getAllComponents = async () => {
  const querySnapshot = await getDocs(collection(db, "components"));
  const components = [];
  querySnapshot.forEach((doc) => {
    components.push({ ...doc.data(), id: doc.id });
  });
  return components;
};

export const createComponent = async (name, pages, username, idParams) => {
  const id = idParams ? idParams : uuid4();
  await setDoc(doc(db, "components", id), {
    name: name,
    pages: pages,
    user: username,
  });
};

export const getSnippetsByUserName = async (username) => {
  const snippets = collection(db, "snippets");
  const q = query(snippets, where("user", "==", username));
  const querySnapshot = await getDocs(q);
  const s = [];
  querySnapshot.forEach((doc) => {
    s.push({ ...doc.data(), id: doc.id });
  });
  return s;
};

export const getComponentsByUserName = async (username) => {
  const components = collection(db, "components");
  const q = query(components, where("user", "==", username));
  const querySnapshot = await getDocs(q);
  const c = [];
  querySnapshot.forEach((doc) => {
    c.push({ ...doc.data(), id: doc.id });
  });
  return c;
};

export const deleteComponent = async (id) => {
  await deleteDoc(doc(db, "components", id));
};

export const deleteSnippet = async (id) => {
  await deleteDoc(doc(db, "snippets", id));
};
