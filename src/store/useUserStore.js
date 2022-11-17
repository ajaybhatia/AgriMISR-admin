import create from "zustand";
import createVanilla from "zustand/vanilla";
import { persist } from "zustand/middleware";

export const userStore = createVanilla(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
      resetUser: () => set({ user: null, token: null }),
    }),
    {
      name: "agrimisr-user",
      getStorage: () => localStorage,
    }
  )
);

const useUserStore = create(userStore);

export default useUserStore;
