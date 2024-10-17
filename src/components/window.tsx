import { useNavigate } from 'react-router-dom';
import './window.css';

export default function Window() {
  const navigate = useNavigate();

  return (
    <div className="window-container">
      <img 
        src="https://via.placeholder.com/150" 
        alt="Juego" 
        className="window-image" 
      />
      <button className="window-button" onClick={() => navigate('/game')}>
        Jugar
      </button>
    </div>
  );
}
