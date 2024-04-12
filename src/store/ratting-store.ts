import { create } from 'zustand'

interface RattingStore {
  ratting: number
  setRatting: (ratting: number) => void
}

export const useRattingStore = create<RattingStore>((set) => ({
  ratting: 1.9,
  setRatting: (ratting) => set({ ratting }),
}))
