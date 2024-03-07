import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteBooking as deleteBookingApi } from '../../services/apiBookings';

export default function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['bookings'],
      });
      toast.success('Booking successfully deleted!');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return {isDeleting, deleteBooking}
}
