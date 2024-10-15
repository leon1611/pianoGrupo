
import { useNavigate } from 'react-router-dom';

export default function Window() {
  const navigate = useNavigate();

  return (
    <div style={{ border: '1px solid #ccc', padding: '1em', textAlign: 'center', width: '200px' }}>
      <img src="https://via.placeholder.com/150" alt="Juego" style={{ display: 'block', margin: '0 auto 1em' }} />
      <button onClick={() => navigate('/game')}>Jugar</button>
    </div>
  );
}