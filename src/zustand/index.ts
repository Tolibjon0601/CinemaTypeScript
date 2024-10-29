import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Ticket {
  id: string;
  title: string;
  image: string;
  description: string;
}

interface StoreState {
  tickets: Ticket[];
  setTicket: (ticket: Ticket) => void;
  count: number;
  increaseCount: () => void;
  addNumber: (number: number) => void;
  language: string;
  setLanguage: (lang: string) => void;
}

const useStore = create<StoreState>()(
  devtools(
    persist((set) => ({
      tickets: [],
      setTicket: (ticket: Ticket) => set((state) => ({ tickets: [...state.tickets, ticket] })),
      count: 0,
      language: localStorage.getItem("language") || "uz",
      setLanguage: (lang: string) => {
        localStorage.setItem("language", lang);
        set(() => ({ language: lang }));
      },
      increaseCount: () => set((state) => ({ count: state.count + 1 })),
      addNumber: (number: number) => set((state) => ({ count: state.count + number })),
    }), { name: "settings" })
  )
);

export default useStore;
