import { useSelector } from "react-redux";
import { AppState } from '@/reduxTypes';

export function useAuth() {
  const { email, token, id } = useSelector((state: AppState) => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
