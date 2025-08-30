import { iticket } from "@/components/form";
import { create } from "zustand";

type ticketStore = {
  ticket: iticket | null;
  setTicket: (obj: iticket) => void;
};

export const useTicketStore = create<ticketStore>((set) => ({
  ticket: null,
  setTicket: (ticket) => set({ ticket }),
}));
