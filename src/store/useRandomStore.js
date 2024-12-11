import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "axios";

export const useRandomStore = create((set, get) => ({
  randomUsers: [],
  randomNumber: 6,
  isRandomUsersLoading: false,

  // Define setRandomNumber as an action
  setRandomNumber: (number) => set({ randomNumber: number }),

  getRandomUsers: async () => {
    set({ isRandomUsersLoading: true });
    const { randomNumber } = get(); // Access randomNumber from store's state
    try {
      const res = await axios.get(`https://randomuser.me/api?results=${randomNumber}`);
      set({ randomUsers: res.data.results });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch Random Users");
    } finally {
      set({ isRandomUsersLoading: false });
    }
  },
}));
