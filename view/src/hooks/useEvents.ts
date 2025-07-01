import { useEffect, useState } from 'react';
import ky from 'ky';
import { Event } from '../types/interfaces';

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_URL = import.meta.env.VITE_API_URL;

  const getEventById = async (id: string) => {
    try {
      setLoading(true);
      const response = await ky.get(`${API_URL}/${id}`).json<Event>();
      return response;
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Error on fetching the event');
      }
      return null;
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

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
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  const createEvent = async (newEvent: Omit<Event, 'id'>) => {
    try {
      setLoading(true)
      await ky.post(API_URL, {
        json: newEvent,
      });
      await getEvents();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Error on fetching events');
      }
      setLoading(false)
      return true
    } finally {
      //Again just to simulate real usage
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      setError(null)
    }
  };

  const updateEvent = async (id: number, updatedEvent: Partial<Event>) => {
    try {
      setLoading(true);
      await ky.put(`${API_URL}/${id}`, {
        json: updatedEvent,
      });
      await getEvents();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Erro ao atualizar evento');
      }
    } finally {
      setLoading(false);
    }
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

  return { events, loading, error, createEvent, deleteEvent, getEvents, getEventById, updateEvent };
}
