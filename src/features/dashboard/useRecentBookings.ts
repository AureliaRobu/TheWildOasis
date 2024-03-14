import { useSearchParams } from 'react-router-dom';
import { subDays } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import { getBookingsAfterDate } from '../../services/apiBookings';

export default function useRecentBookings() {
  const [serachParams] = useSearchParams();
  const numDays = !serachParams.get('last')
    ? 7
    : Number(serachParams.get('last'));
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { data: bookings, isLoading } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ['bookings', `last-${numDays}`],
  });

  return { bookings, isLoading, numDays };
}
