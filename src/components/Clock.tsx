
import { useState, useEffect } from 'react';
import { Clock as ClockIcon } from 'lucide-react';
import { format } from 'date-fns';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 text-white mb-4">
      <ClockIcon className="h-5 w-5" />
      <div className="text-lg">
        <span className="font-bold">{format(currentTime, 'HH:mm:ss')}</span>
        <span className="ml-2 opacity-80">{format(currentTime, 'EEEE, MMM dd, yyyy')}</span>
      </div>
    </div>
  );
};

export default Clock;
