import { useState } from 'react';
import { Card } from '../components/Card';
import { NavBar } from '../components/NavBar';
import { useEvents } from '../hooks/useEvents';
import { Wrapper } from '../components/Wrapper';
import { Loader } from '../components/Loader/Loader';
import { Input } from '../components/Input';
import { Datepicker } from '../components/Datepicker';

export const CreateEvent = () => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());


  const {
    loading,
    error,
    // createEvent,
  } = useEvents();

  return (
    <div>
      <NavBar />
      <Wrapper>
        <Card>
          <div className="p-4 text-black">
            <h1 className="text-xl font-bold mb-4 text-custom-dark-blue">New Event</h1>
            {loading && <Loader />}
            {error && <p className="text-red-600">Erro: {error}</p>}
            {!loading &&
              <Card style="!bg-blue-50">
                <Input label="Event title" value={title} setValue={setTitle} />
                {/* <div className="grid gap-6 mb-6 grid-cols-2 pt-10 w-2/4"> */}
                <Datepicker label={'Start date'} value={startDate} setValue={setStartDate} />
                <Datepicker label={'End date'} value={endDate} setValue={setEndDate} />
                {/* </div> */}
              </Card>
            }
          </div>
        </Card>
      </Wrapper>
    </div>
  );
}
