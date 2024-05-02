import { Trash } from 'lucide-react';
import { Button } from '../ui/button';

const Delete = () => {
  return (
    <Button className="bg-red-1 text-white">
      <Trash className="h-4 w-4" />
    </Button>
  );
};

export default Delete;
