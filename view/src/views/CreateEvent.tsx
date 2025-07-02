import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { validateDates } from '../utils';
import { useEvents } from '../hooks/useEvents';
import {
  Card,
  Button,
  PriceInput,
  DropdownSelect,
  Datepicker,
  Input,
  Loader,
  Wrapper,
  NavBar
} from "../components";


export const CreateEvent = () => {
  const navigate = useNavigate();
  const {
    loading,
    error,
    createEvent,
  } = useEvents();

  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>('');
  const [price, setPrice] = useState<string>('0.00');

  const options = [
    { value: "STARTED", label: "Started" },
    { value: "COMPLETED", label: "Completed" },
    { value: "PAUSED", label: "Paused" }
  ]

  const handleCreate = () => {
    if (!title) {
      return toast.error("Title field can't be empty")
    }
    if (!status) {
      return toast.error("Status field can't be empty")
    }
    if (!validateDates) {
      return toast.error("End date can't be before the start")
    }

    const event = {
      title,
      startDate,
      endDate,
      price,
      status
    }
    createEvent(event).then(() => {
      if (!error) {
        toast.success("Event created")
        navigate("/");
      }
    })
    return

  }

  useEffect(() => {
    if (error) {
      toast.error(error)
    }
  }, [error])

  return (
    <div>
      <NavBar />
      <Wrapper>
        <Card>
          <div className="p-4 text-black h-full">
            <h1 className="text-xl font-bold mb-4 text-custom-dark-blue">New Event</h1>
            {loading && <Loader />}
            {error && <p className="text-red-600">Erro: {error}</p>}
            {!loading &&
              <Card style="!bg-blue-50 !h-3/4">
                <div className="grid grid-cols-1 content-start h-full">
                  <Input label="Event title" value={title} setValue={setTitle} />
                  <div className="grid grid-cols-1">
                    <Datepicker label={"Start date"} value={startDate} setValue={setStartDate} />
                    <Datepicker label={"End date"} value={endDate} setValue={setEndDate} />
                    <PriceInput label="Price" value={price} setValue={setPrice} />
                    <DropdownSelect label="Status" setValue={setStatus} options={options} />
                  </div>
                  <div className="flex justify-center">
                    <Button text="Confirm" onClick={handleCreate} />
                  </div>
                </div>
              </Card>
            }
          </div>
        </Card>
        <ToastContainer
          autoClose={4000}
          pauseOnHover={true}
          position="bottom-right"
        />
      </Wrapper>
    </div>
  );
}
