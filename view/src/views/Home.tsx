import { useEvents } from '../hooks/useEvents';
import { useState } from 'react';

export const Home = () => {
  const [newName, setNewName] = useState('');
  const {
    events,
    loading,
    error,
    deleteEvent,
    createEvent,
  } = useEvents();

  return (
    <div className="p-4 text-black">
      <h1 className="text-xl font-bold mb-4">Eventos</h1>

      {loading && <p>Carregando...</p>}
      {error && <p className="text-red-600">Erro: {error}</p>}
      {events && <ul className="border border-black">
        {events.map((event, i) => (
          <li key={i} className="p-2 border-b">
            <span>{event.title} — {event.status}</span>
          </li>
        ))}
      </ul>}
    </div>
  );
}
