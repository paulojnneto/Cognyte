import { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { NavBar } from '../components/NavBar';
import { useEvents } from '../hooks/useEvents';
import { Wrapper } from '../components/Wrapper';
import { Loader } from '../components/Loader/Loader';
import { Input } from '../components/Input';
import { Datepicker } from '../components/Datepicker';
import { DropdownSelect } from '../components/DropdownSelect';
import { PriceInput } from '../components/PriceInput';
import { Button } from '../components/Button';
import { ToastContainer, toast } from 'react-toastify';
import { validateDates } from '../utils';
import { useNavigate, useParams } from 'react-router-dom';
import { Modal } from '../components/Modal';


export const EditEvent = () => {
  const navigate = useNavigate();

  const { id } = useParams()

  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>('');
  const [price, setPrice] = useState<string>('0.00');

  const [toggleModal, setToggleModal] = useState<boolean>(false)

  const {
    loading,
    error,
    getEventById,
    updateEvent,
    deleteEvent
  } = useEvents();

  const handleDelete = () => {
    deleteEvent(id).then(() => {
      if (!error) {
        setToggleModal(false)
        toast.success("Event deleted")
        navigate('/');
      }
    })
  }


  useEffect(() => {
    getEventById(id).then((data) => {
      setTitle(data?.title);
      setStartDate(new Date(data?.startDate));
      setEndDate(new Date(data?.endDate));
      setStatus(data?.status);
      setPrice(data?.price)
    })

  }, [id]);


  const options = [
    { value: 'STARTED', label: 'Started' },
    { value: 'COMPLETED', label: 'Completed' },
    { value: 'PAUSED', label: 'Paused' }
  ]

  const handleUpdate = () => {
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

    updateEvent(id, event).then(() => {
      if (!error) {
        toast.success("Event updated")
        navigate('/');
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
        <Card style="">
          <div className="p-4 text-black h-full">
            <h1 className="text-xl font-bold mb-4 text-custom-dark-blue">Edit Existing Event</h1>
            {loading && <Loader />}
            {error && <p className="text-red-600">Erro: {error}</p>}
            {!loading &&
              <Card style="!bg-blue-50 !h-3/4">
                <div className='grid grid-cols-1 content-around h-full'>
                  <div>
                    <Input label="Event title" value={title} setValue={setTitle} />
                    <Datepicker label={'Start date'} value={startDate} setValue={setStartDate} />
                    <Datepicker label={'End date'} value={endDate} setValue={setEndDate} />
                    <PriceInput label='Price' value={price} setValue={setPrice} />
                    <DropdownSelect label="Status" value={status} setValue={setStatus} options={options} />
                  </div>
                  <div className="flex justify-center">
                    <div className='p-6'>
                      <Button className='!bg-red-600' text="Delete event" onClick={() => setToggleModal(true)} />
                    </div>
                    <div className='p-6'>
                      <Button text="Confirm changes" onClick={handleUpdate} />
                    </div>
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
        <Modal isOpen={toggleModal} title={`Deleting event '${title}'`} cancelHandler={() => setToggleModal(false)} confirmHandler={() => handleDelete()} />
      </Wrapper>
    </div>
  );
}
