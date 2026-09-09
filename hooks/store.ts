import { create } from "zustand";

export const playstore = create<{ clicked : boolean, setClicked : (clicked : boolean) => void}>((set) => ({
    clicked: false,
    setClicked: (clicked) => set({ clicked })
}))