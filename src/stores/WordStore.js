import { create } from "zustand"

const useWordStore = create((set) => ({
    WordList : [],
    word : '',
    setWordList: (List) => {
        set((state) => {
            return {
                ...state,
                WordList: List
            }
        });
    },
    setWord: (newWord) => {
        set((state) => {
            return {
                ...state,
                word : newWord
            }
        });
    }
}));

export default useWordStore;