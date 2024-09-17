import { create } from 'zustand'

interface TopBarCupomStore {
  isTopBarCupomVisible: boolean
  setIsTopBarCupomVisible: (isVisible: boolean) => void
}

export const useTopBarCupomStore = create<TopBarCupomStore>((set) => ({
  isTopBarCupomVisible: true,
  setIsTopBarCupomVisible: (isVisible) =>
    set({ isTopBarCupomVisible: isVisible }),
}))
