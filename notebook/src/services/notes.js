import { db } from '../firebase/config';
import { collection, getDocs, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';

const notesCollection = collection(db, 'notes');

const getAll = async () => {
  const snapshot = await getDocs(notesCollection);
  const notes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return notes;
};

const create = async (newObject) => {
  const docRef = await addDoc(notesCollection, newObject);
  const docSnap = await getDoc(docRef);
  return { id: docRef.id, ...docSnap.data() };
};

const update = async (id, newObject) => {
  const noteDoc = doc(db, 'notes', id);
  await updateDoc(noteDoc, newObject);
  const updatedDoc = await getDoc(noteDoc);
  return { id: updatedDoc.id, ...updatedDoc.data() };
};

export default { getAll, create, update };
