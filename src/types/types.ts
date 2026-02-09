
export interface Country {
    name: {
        common: string,
        official: string
    };

    flags: {
        svg: string,
        png: string,
        alt: string
    };

    population: number,
    region: string,
    capital?: string[],
    cca3: string;
}