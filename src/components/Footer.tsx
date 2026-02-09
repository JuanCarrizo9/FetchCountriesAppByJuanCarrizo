const Footer = () => {
    return(
        <footer className="bg-white border-top py-4 mt-5">
            <div className="container text-center">
                <p className="text-secondary mb-1">
                    © {new Date().getFullYear()} <span className="fw-bold text-dark">FetchCountries App</span>
                </p>
                <p className="small text-muted mb-0">
                    Hecho por {" "}
                    <a 
                        href="https://github.com/JuanCarrizo9" 
                        className="text-decoration-none fw-bold"
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: "#dc3545" }} // El color 'danger' de Bootstrap
                    >
                        Juan Carrizo
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer;