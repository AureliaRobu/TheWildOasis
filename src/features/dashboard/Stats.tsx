import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from 'react-icons/hi2';
import Stat from './Stat.tsx';
import { formatCurrency } from '../../utils/helpers.ts';

function Stats({ bookings, confirmedStays, numDays, numCabins }) {
  const numBookings = bookings.length;
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const checkins = confirmedStays.length;

  const occupation = confirmedStays.reduce(
    (acc, cur) => acc + cur.numNights,
    0
  );
  const occupancyRate = occupation / (numDays * numCabins);
  const occupancyPercent = `${Math.round(occupancyRate * 100)}%`;
  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check-ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={occupancyPercent}
      />
    </>
  );
}

export default Stats;
