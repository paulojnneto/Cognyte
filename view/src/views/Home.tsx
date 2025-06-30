import { useState } from 'react';
import { Card } from '../components/Card';
import { NavBar } from '../components/NavBar';
import { Table } from '../components/Table/Table';
import { useEvents } from '../hooks/useEvents';
import { Wrapper } from '../components/Wrapper';
import { Loader } from '../components/Loader/Loader';

export const Home = () => {
  const [newName, setNewName] = useState('');
  const {
    events,
    loading,
    error,
    deleteEvent,
    createEvent,
  } = useEvents();

  console.log({ loading });

  return (
    <div>
      <NavBar />
      <Wrapper>
        <Card>
          <div className="p-4 text-black">
            <h1 className="text-xl font-bold mb-4 text-custom-dark-blue">Eventos</h1>

            {loading && <Loader />}
            {error && <p className="text-red-600">Erro: {error}</p>}
            {events && !loading &&
              <Table items={events} />
            }
          </div>
        </Card>
      </Wrapper>
    </div>
  );
}
