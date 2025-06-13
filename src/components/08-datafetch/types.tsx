import { z } from 'zod';
import axios from 'axios';

const url = 'https://www.course-api.com/react-tours-project';

// Define the shape of your data using Zod
export const tourScheme = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  info: z.string(),
  price: z.string(),
});

// Create TypeScript type from Zod schema
export type Tour = z.infer<typeof tourScheme>;

// Function to fetch and validate data
export const fetchTours = async (): Promise<Tour[]> => {
  const response = await axios.get<Tour[]>(url);
  const result = tourScheme.array().safeParse(response.data);
  
  if (!result.success) {
    console.log('Validation errors:', result.error.message);
    throw new Error('Failed to parse tours data');
  }
  
  return result.data;
};