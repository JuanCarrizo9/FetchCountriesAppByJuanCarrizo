import type { Country } from "../types/types";

interface Props {
    country: Country;
}

const CountryCard = ({ country }: Props) => {
    const { name, flags, population, region, capital} = country;

    return (
        <div className="card h-100 shadow-sm hover-shadow border-0 p-2">
            <div style={{ height: "160px", overflow: "hidden", cursor: "default"}}>
                <img 
                    src={flags.svg} 
                    alt={flags.alt}
                    className="card-img-top w-100 h-100"
                    style={{ objectFit: "contain"}} 
                />
            </div>

            <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title fw-bold text-dark">
                    {name.common}
                </h5>
            </div>

            <div className="card-text small text-secondary d-flex flex-column align-items-center">
                <p className="mb-1">
                    <span className="fw-bold text-dark">Poblacion: </span>{population.toLocaleString()}
                </p>
                
                <p className="mb-1">
                    <span className="fw-bold text-dark">Region: </span>{region}
                </p>

                <p className="mb-1">
                    <span className="fw-bold text-dark">Capital: </span> 
                    {capital && capital.length > 0 ? capital[0] : "Unknown"}
                </p>

                
            </div>
        </div>
    );
};

export default CountryCard