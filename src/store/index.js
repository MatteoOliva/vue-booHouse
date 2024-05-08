import axios from 'axios';
import { reactive } from 'vue';

export const api = {
    baseUrl: 'http://127.0.0.1:8000/api/apartments/'
};

export const store = reactive({
    apartments: [],


    fetchApartments() {
        axios.get(`${api.baseUrl}search/castello`).then(response => {
            this.apartments = response.data;
            console.log(this.apartments);
        });
    }

});

/*      fecthApartment() {
            axios.get(fetchApartments()).then(response => {
                console.log(response);
            });

        }*/