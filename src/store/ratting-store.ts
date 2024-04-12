import { create } from 'zustand'

interface RattingStore {
  ratting: number
  setRatting: (ratting: number) => void
}

export const useRattingStore = create<RattingStore>((set) => ({
  ratting: 4.8,
  setRatting: (ratting) => set({ ratting }),
}))
