import { useDispatch, useSelector } from "react-redux/es/exports";
import type { AppDispatch, RootState } from './store'
import type { TypedUseSelectorHook } from "react-redux/es/exports";

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector