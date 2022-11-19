import {useReducer, useState, useEffect} from "react"
import { projectFirestore, timestamp } from "../firebase/config"

let initialState ={
    document: null,
    isPending: false,
    error: null,
    success: null
}

const firestoreReducer = (state, action)=>{
switch(action.type){
    case "IS_PENDING":
        return{isPending: true, document: null, success: false, error: null}
        case 'ADDED_DOCUMENT':
            return{ isPending: false, document: action.paylaod, success: true, error: null}
            case "DELETED_DOCUMENT":
                return{isPending: false, document: action.payload, success: true, error: null}
            case  'Error':
                return{isPending: false, document: null, success: false, error: action.payload}
    default:
        return state
}
}

export const useFirestore =(collection)=>{
const [response, dispatch]= useReducer(firestoreReducer, initialState)
const [isCancelled, setIscancelled] = useState(false)

//collection ref
const ref= projectFirestore.collection(collection)

//only dsipatch if not cancelled
const dispatchIfNotCancelled = (action)=>{
    if(!isCancelled){
        dispatch(action)
    }
}

//add document
const addDocument = async(doc)=>{
dispatch({type: "IS_PENDING"})

try{
    const createdAt = timestamp.fromDate(new Date())
 const addedDocument= await ref.add({...doc, createdAt})
 dispatchIfNotCancelled({type: 'ADDED_DOCUMENT', payload: addedDocument})
}
catch(err){
dispatchIfNotCancelled({type: 'ERROR', payload: err.message})
}
}

//delete document
const deleteDocument = async (id)=>{
    dispatch({type: 'IS_PENDING'})
    try{
        const deleteDocument= await ref.doc(id).delete()
        dispatchIfNotCancelled({type: 'DELETED_DOCUMENT', payload: deleteDocument})
    }
    catch(err){
        dispatchIfNotCancelled({type:'ERROR', payload: 'could not delete'})
    }

}

useEffect(()=>{
    return ()=> setIscancelled(true)
},[])

return{addDocument, deleteDocument, response}
}