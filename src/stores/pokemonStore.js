import {create} from "zustand";
import axios from "axios";

export const usePokemonStore = create((set) => ({
    loading: false,
    message: null,
    error: null,
    success: false,
    randomPokemon: [],
    pokemons: [],
    singlePokemon: null,
    pokemonById: null,

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

    getPokemons: async () => {
        set({loading: true, error: null});
        try {
            const response = await axios.get(`http://localhost:3000/api/pokemon`);
            set(() => ({pokemons: response.data, loading: false, success: true}));
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
    },

    getPokemonById: async (id) => {
        set({loading: true, error: null});
        try {
            const response = await axios.get(`http://localhost:3000/api/pokemon/single/${id}`);
            set(() => ({pokemonById: response.data, loading: false, success: true}));
        } catch (error) {
            set({error: error.message, loading: false});
        }
    },

    editPokemon: async (id, data) => {
        set({loading: true, error: null});
        try {
            const response = await axios.put(`http://localhost:3000/api/pokemon/${id}`, data);
            set(() => ({message: response.data, loading: false, success: true}));
        } catch (error) {
            set({error: error.message, loading: false});
        }
    },

    deletePokemon: async (id) => {
        set({loading: true, error: null});
        try {
            const response = await axios.delete(`http://localhost:3000/api/pokemon/${id}`);
            set((state) => ({
                pokemons: state.pokemons.filter((poke) => poke._id !== id)
            }))
            set(() => ({message: response.data, loading: false, success: true}));
        } catch (error) {
            set({error: error.message, loading: false});
        }
    }
}));