import { useEffect, useState } from 'react';
import ky from 'ky';
import { Event } from '../types/interfaces';

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_URL = import.meta.env.VITE_API_URL;

  const getEvents = async () => {
    try {
      setLoading(true)
      const response = await ky.get(API_URL).json<Event[]>();
      setEvents(response);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Error on fetching events');
      }
    } finally {
      //Added timeout just to simulate real usage
      // setTimeout(() => {
      setLoading(false);
      // }, 5000);
    }
  };

  const createEvent = async (newEvent: Omit<Event, 'id'>) => {
    await ky.post(API_URL, {
      json: newEvent,
    });
    await getEvents();
  };

  const deleteEvent = async (id: number) => {
    await ky.delete(`${API_URL}/${id}`);
    await getEvents();
  };

  //fetch on render to have a list ready to return.
  useEffect(() => {
    getEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { events, loading, error, createEvent, deleteEvent, getEvents };
}
