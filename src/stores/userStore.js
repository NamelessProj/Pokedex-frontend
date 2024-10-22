import {create} from "zustand";
import axios from "axios";

export const useUserStore = create((set) => ({
    message: "",
    user: null,
    userLoading: false,

    register: async (data) => {
        set((state) => ({userLoading: !state.userLoading}));
        const response = await axios.post("http://localhost:3000/api/user/register", data);
        if(response.status === 201){
            set(() => ({user: response.data}));
        }else{
            set(() => ({message: response.data}));
        }
        set((state) => ({userLoading: !state.userLoading}));
    }
}));