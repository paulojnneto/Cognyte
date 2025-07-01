import { useState } from 'react';
import { Card } from '../components/Card';
import { NavBar } from '../components/NavBar';
import { useEvents } from '../hooks/useEvents';
import { Wrapper } from '../components/Wrapper';
import { Loader } from '../components/Loader/Loader';
import { Input } from '../components/Input';
import { Datepicker } from '../components/Datepicker';
import { DropdownSelect } from '../components/DropdownSelect';
import { PriceInput } from '../components/PriceInput';

export const CreateEvent = () => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState();
  const [price, setPrice] = useState<string>('');

  const options = [
    { value: 'started', label: 'Started' },
    { value: 'completed', label: 'Completed' },
    { value: 'paused', label: 'Paused' }
  ]


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
                <Datepicker label={'Start date'} value={startDate} setValue={setStartDate} />
                <Datepicker label={'End date'} value={endDate} setValue={setEndDate} />
                <PriceInput label='Price' value={price} setValue={setPrice} />
                <DropdownSelect label="Status" setValue={setStatus} options={options} />
              </Card>
            }
          </div>
        </Card>
      </Wrapper>
    </div>
  );
}
