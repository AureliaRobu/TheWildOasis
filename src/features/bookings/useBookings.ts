import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getBookings } from '../../services/apiBookings';

export default function useBookings() {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get('status');
  console.log(filterValue);
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue };
  console.log(filter);
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ['bookings', filter],
    queryFn: () => getBookings({ filter }),
  });
  return { isLoading, bookings, error };
}
