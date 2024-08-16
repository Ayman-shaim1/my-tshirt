import { collection, getDocs, query, where, limit } from "firebase/firestore";
import db from "../config/firebase";

export const select = async ({ from, whereColumn, value, maxResults }) => {
  let data = [];
  let q = null;
  if (whereColumn && value) {
    if (!maxResults)
      q = query(collection(db, from), where(whereColumn, "==", value));
    else
      q = query(
        collection(db, from),
        where(whereColumn, "==", value),
        limit(maxResults)
      );
  } else {
    if (!maxResults) q = query(collection(db, from));
    else q = query(collection(db, from), limit(maxResults));
  }
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));
  return data;
};
