import { create } from "zustand";

import toast from "react-hot-toast";
import axios from "axios";
export const useRandomStore = create((set) => ({
  randomUsers: [],

  isRandomUsersLoading: false,

  getRandomUsers: async () => {
      set({ isRandomUsersLoading: true });
      try {
          const res = await axios.get("https://randomuser.me/api?results=6");
          set({ randomUsers: res.data.results });
      } catch (error) {
          toast.error(error.response?.data?.message || "Failed to fetch Random Users");
      } finally {
          set({ isRandomUsersLoading: false });
      }
  },

  

}));
