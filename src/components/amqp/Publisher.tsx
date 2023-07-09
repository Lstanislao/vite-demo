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
    socket.emit('testEvent', value);
    setIsLoading(false);
  };

  return <Card className='p-4'>
   <div className='flex w-full border-b border-neutral-200 mb-5'>
      <span className='font-semibold text-xl'>Publisher</span>
    </div>
    <div>
    <textarea 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
      className="block p-2.5 w-full h-[300px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
      focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      >
    </textarea>
    </div>
    <div className='flex justify-end mt-2'>
      <Button onClick={onSubmit} disabled={isLoading}>
        Publish
      </Button>
    </div>
  </Card>;
};

export default Publisher;
