import { useDispatch, useSelector } from "react-redux";
import {
  callCreator,
  deleteCreator,
  dialedCreator,
} from "../../reducer/actioncreator";
import { AppDispatch, RootState } from "../store/store";

export function usePhone() {
  const phone = useSelector((state: RootState) => state.phone);
  const dispatch = useDispatch<AppDispatch>();

  const dialedNumber = (num: string) => {
    dispatch(dialedCreator(num));
  };

  const phoneCall = () => {
    dispatch(callCreator());
  };

  const deleteNumber = () => {
    dispatch(deleteCreator());
  };

  return {
    phone,
    phoneCall,
    dialedNumber,
    deleteNumber,
  };
}
