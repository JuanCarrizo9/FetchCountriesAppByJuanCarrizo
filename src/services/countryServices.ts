
import type { Country } from "../types/types"; 

const BASE_URL = 'https://restcountries.com/v3.1';

export const getAllCountries = async (): Promise<Country[]> => {
    try {
        
        const response = await fetch(`${BASE_URL}/all?fields=name,flags,population,region,capital,cca3`);
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        
        
        return Array.isArray(data) ? data : [];
    }
    catch (error) {
        console.error("Error en la búsqueda: ", error);
        return [];
    }
}