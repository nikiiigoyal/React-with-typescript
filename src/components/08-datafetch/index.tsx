import { useState, useEffect } from 'react';
import { type Tour, tourScheme } from './types';

const url = 'https://www.course-api.com/react-tours-project';

function FetchingData
() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch tours... Status: ${response.status}`);
        }

        const rawData: Tour[] = await response.json();
        
        // Validate the data with Zod
        const result = tourScheme.array().safeParse(rawData);

        if (!result.success) {
          console.log('Validation error:', result.error.message);
          throw new Error(`Failed to parse tours`);
        }
        
        setTours(result.data);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : 'There was an error...';
        setIsError(message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <h3>Loading tours...</h3>;
  }

  if (isError) {
    return <h3>Error: {isError}</h3>;
  }

  return (
    <div>
      <h2 className='mb-1'>Tours ({tours.length})</h2>
      {tours.map((tour) => {
        return (
          <div key={tour.id} className='mb-1'>
            <h3>{tour.name}</h3>
            <p>Price: {tour.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default FetchingData
;