import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StoreState {
    email: string;
    isRegistered: boolean;
    isSubmitted: boolean;
    setEmail: (email: string) => void;
    setIsRegistered: (isRegistered: boolean) => void;
    setIsSubmitted: (isSubmitted: boolean) => void;
}

export const useStore = create(
    persist<StoreState>(
        (set) => ({
            email: '',
            isRegistered: false,
            isSubmitted: false,
            setEmail: (email: string) => set({ email }),
            setIsRegistered: (isRegistered: boolean) => set({ isRegistered }),
            setIsSubmitted: (isSubmitted: boolean) => set({ isSubmitted }),
        }),
        {
            name: 'user-storage', // Unique name for the storage
        }
    )
);

