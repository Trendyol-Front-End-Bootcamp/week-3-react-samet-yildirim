import { useContext, createContext } from "react";
const LoadingContext=createContext(null);
export const LoadingProvider=LoadingContext.Provider;
export const useLoading=()=>useContext(LoadingContext)