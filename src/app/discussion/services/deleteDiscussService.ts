import FirebaseConfiguration from "@/firebase/FirebaseConfiguration";
import { FieldValue, doc, runTransaction } from "firebase/firestore";

export default async function (docId: string) {
  if (!FirebaseConfiguration.auth.currentUser) return;
  await runTransaction(FirebaseConfiguration.db, async (transaction) => {
    const docRef = doc(FirebaseConfiguration.db, "discussions", docId);
    transaction.delete(docRef);
  });
}
