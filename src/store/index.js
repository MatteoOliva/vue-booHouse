import axios from "axios";
import { reactive } from "vue";

export const api = {
    baseUrl: "http://127.0.0.1:8000/api/apartments/",
    urlSponsor: "http://127.0.0.1:8000/api/apartments/sponsored/all",
};

export const store = reactive({
    apartments: [],

    //   chiamata ricerca appartamenti
    fetchApartments(searchTerm) {
        axios.get(`${api.baseUrl}search/${searchTerm}`).then((response) => {
            this.apartments = response.data.data;
            console.log(this.apartments);
        });
    },

    //   chiamata per appartamenti sponsorizzati
    fetchApartmentsSponsor() {
        axios.get(`${api.urlSponsor}`).then((response) => {
            this.apartments = response.data;
            console.log(this.apartments);
        });
    },
});

/*      fecthApartment() {
            axios.get(fetchApartments()).then(response => {
                console.log(response);
            });

        }*/
