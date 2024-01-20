import { useState , useEffect } from "react";
import {projectStorage , projectFirestore , timestamp} from '../firebase/config';
import {getDownloadURL, ref, uploadBytes , uploadBytesResumable} from 'firebase/storage'
import {collection , setDoc ,addDoc} from 'firebase/firestore'

const useStorage = (file , tablename)=>{
    const [progress , setProgress] = useState(0)
    const [error , setError] = useState(null)
    const [url , setUrl] = useState(null)

    useEffect(()=>{
        const storageRef = ref(projectStorage , file.name)
        const collectionRef = collection(projectFirestore , tablename)
        const uploadTask = uploadBytesResumable(storageRef , file)
        uploadTask.on('state_changed' , (snapshot)=>{
            const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(prog)
        } ,(err)=>{
            setError(err);
        },async ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl)=>{
                addDoc(collectionRef ,{
                    url:downloadUrl,
                    createdAt:timestamp
                })
                setUrl(downloadUrl);
            })
        })
    } , [file])

    return {progress , url , error}
}

export default useStorage;