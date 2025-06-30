import { useEffect, useState } from 'react';
import type { Event } from '../types';
import ky from 'ky';

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
    } catch (err: any) {
      setError(err.message || 'Erro ao buscar eventos');
    } finally {
      //Added timeout just to simulate real usage
      setTimeout(() => {
        setLoading(false);
      }, 5000);
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
  }, []);

  return { events, loading, error, createEvent, deleteEvent, getEvents };
}
