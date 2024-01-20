import { useState , useEffect } from "react";
import {projectFirestore} from '../firebase/config';
import {collection , getDocs} from 'firebase/firestore'


const useFirestore = (name)=>{
    const [docs , setDocs] = useState([]);

    useEffect(() => {
        const fetchDocs = async () => {
          const collectionRef = collection(projectFirestore, name);
          const querySnapshot = await getDocs(collectionRef);
    
          const documents = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
    
          setDocs(documents);
        };
    
        fetchDocs();
      }, [name]);

    return docs
}

export default useFirestore