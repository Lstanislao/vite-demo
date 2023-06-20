import React from 'react';
import socket from '../../lib/socket';
import Card from '../shared/Card';
import Button from '../shared/Button';

const Publisher = () => {
  const [value, setValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = () => {
    setIsLoading(true);
    console.log(value)
    socket.emit('testEvent', value, () => {
      setIsLoading(false);
    });
  };

  return <Card className='p-4'>
   <div className='flex w-full border-b border-neutral-200 mb-5'>
      <span className='font-semibold text-xl'>Publisher</span>
    </div>
    <input 
      value={value} onChange={(e) => setValue(e.target.value)} 
      type="textarea" className='w-full h-56  border border-neutral-300 rounded'
    />
    <div className='flex justify-end mt-2'>
      <Button onClick={onSubmit} disabled={isLoading}>
        Publish
      </Button>
    </div>
  </Card>;
};

export default Publisher;
