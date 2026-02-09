import { useState } from 'react'
import { useCountries } from './hooks/useCountries'
import CountryCard from './components/CountryCard'


function App() {
  const { countries, loading, error} = useCountries();

  const [ searchTerm, setSearchTerm] = useState("");

  const [ visibleCount, setVisibleCount] = useState(10);

  const filteredCountries = countries.filter((country) => 
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) 
  )

  const sortedCountries = [ ...filteredCountries ].sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  )

  const countriesToShow = sortedCountries.slice(0, visibleCount);

  if (loading) return <div className="text-center mt-5"><h3>Cargando paises...</h3></div>;
  if (error) return <div className="alert alert-danger">{error}</div>;
  
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4"> FetchCountries App 🌎</h1>

      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <input 
            type="text" 
            className='form-control'
            placeholder='Escribe el nombre de un pais...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="row g-4">
        {countriesToShow.length > 0 ? (
          countriesToShow.map((country) => (
            <div key={country.cca3} className='col-12 col-md-6 col-lg-3'>
              <CountryCard country={country}/>
            </div>
          ))
        ) : (
          <p className='text-center'>No se encontraron resultados</p>
        )}
      </div>

      {visibleCount < sortedCountries.length && (
        <div className="text-center mt-5">
          <button
          className='btn btn-primary shadow-sm'
          onClick={() => setVisibleCount(prev => prev + 10)}
          >
            Ver más países ↓
          </button>
        </div>
      )}
    </div>
  )

  
    
}

export default App
