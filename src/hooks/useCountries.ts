
import { useState, useEffect } from "react";
import type { Country } from "../types/types";
import { getAllCountries } from "../services/countryServices";

export const useCountries = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchCountries = async () => {
        try {
            setLoading(true);
            const data = await getAllCountries();
            console.log("Datos recibidos:",data)
            setCountries(data);
        } catch (err) {
            setError("No se pudo obtener la informacion. Intenta de nuevo.")
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
      fetchCountries();
    }, [])

    return { countries, loading, error, refresh: fetchCountries };
    
}