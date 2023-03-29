import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface MailState {
    mailSent: boolean,
    recentSender: string,
    setRecentSender: (recentSender: string) => void,
    setMailSent: (mailSent: boolean) => void,
    resetMailState: () => void
}

export const useMailStore = create<MailState>()(
    devtools(
        persist(
            (set) => ({
                mailSent: false,
                recentSender: '',
                setMailSent: (mailSent: boolean) => set({ mailSent: mailSent }),
                setRecentSender: (recentSender: string) => set({ recentSender: recentSender }),
                resetMailState: () => set({ mailSent: false, recentSender: '' })
            }),
            {
                name: 'mail-state-storage',
            }
        )
    )
);