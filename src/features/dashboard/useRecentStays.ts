import { useSearchParams } from 'react-router-dom';
import { subDays } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import { getStaysAfterDate } from '../../services/apiBookings';

export default function useRecentStays() {
  const [serachParams] = useSearchParams();
  const numDays = !serachParams.get('last')
    ? 7
    : Number(serachParams.get('last'));
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { data: stays, isLoading } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ['stays', `last-${numDays}`],
  });

  const confirmedStays = stays?.filter(
    (stay) => stay.status === 'checked-in' || stay.status === 'checked-out'
  );

  return { stays, isLoading, confirmedStays, numDays };
}
