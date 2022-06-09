import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

export const useDocument = (collection, id) => {

    const [document, setDocument] = useState(null);
    const [error, setError] = useState(null);

    // Realtime data for the document
    useEffect(() => {

        const ref = projectFirestore.collection(collection).doc(id);

        // Every data change will be present on the snapshot object
        const unsubscribe = ref.onSnapshot((snapshot) => {
            
            // Check if there is data in the document reference
            if (snapshot.data()) {
            setDocument({...snapshot.data(), id: snapshot.id })
            setError(null);
            }
            else {
                setError('No such document exists');
            }
            
        }, (err) => {
            console.log(err.message);
            setError('Failed to get document');
        })

        // Cleanup function
        return () => unsubscribe();

    }, [collection, id])

    return { document, error };

}