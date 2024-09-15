import { create } from 'zustand'

type Store = {
  value: string,
  setValue: (value: string) => void
}

export  const useTableStore = create<Store>()((set) => ({
    value: "sick",
    setValue: (value: string) => set(() => ({ value })),
}))