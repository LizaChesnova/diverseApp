import { create } from 'zustand';
import { removeJWT, setJWT,getJWT,getMe } from '../data/data-utils';
import { endpoints } from '../data/config';

export const useStore = create((set) => ({
  
  isAuth: false,
  user: [],
  token: null,
  login: (user, token) => {
    set({ isAuth: true, user, token });
    setJWT(token);
  },
  logout: (user, token) => {
    set({ isAuth: false, user:null, token:null });
    removeJWT(token);
  },
  checkAuth: async () => {
    const jwt = getJWT();
    if (jwt) {
      const userdata = await getMe(endpoints.users, jwt);
      if (userdata) {
        set({ isAuth: true, user:userdata, token: jwt });
        setJWT(jwt);
      } else {
        set({ isAuth: false, user: [], token: null });
        removeJWT();
      }
    } else {
      set({ isAuth: false, user: [], token: null });
    }
    
  },

}));
