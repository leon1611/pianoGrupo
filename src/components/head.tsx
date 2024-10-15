
import { Link } from 'react-router-dom'; // Usamos react-router-dom para navegar entre las páginas

export default function Head() {
  return (
    <header style={{ padding: '1em', backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6' }}>
      <h1>Título del Sitio</h1>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1em' }}>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/game">Jugar</Link></li>
        </ul>
      </nav>
    </header>
  );
}