import {create} from "zustand";
import axios from "axios";

export const usePokemonStore = create((set) => ({
    loading: false,
    message: null,
    error: null,
    success: false,
    randomPokemon: [],
    singlePokemon: [],

    getRandomPokemon: async () => {
        set({loading: true, error: null});
        try {
            const response = await axios.get("http://localhost:3000/api/pokemon");
            const random = response.data.sort(() => Math.random() - Math.random()).slice(0, 3);
            set(() => ({randomPokemon: random, loading: false, success: true}));
        } catch (error) {
            set({error: error.message, loading: false});
        }
    },

    getSinglePokemon: async (name) => {
        set({loading: true, error: null});
        try {
            const response = await axios.get(`http://localhost:3000/api/pokemon/${name}`);
            set(() => ({singlePokemon: response.data, loading: false, success: true}));
        } catch (error) {
            set({error: error.message, loading: false});
        }
    }
}));