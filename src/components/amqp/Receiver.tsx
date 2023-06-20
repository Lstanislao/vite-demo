import React  from 'react';
import Card from '../shared/Card';

const Receiver = ({ payload }:any) => {
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    console.log('payload recibido', payload);
    if (payload.length > 0) {
      setMessages(payload.map((data:any) => data));
    }
  }, [payload]);

  return (
    <Card className='p-4'>
      <div className='flex w-full border-b border-neutral-200 mb-5'>
        <span className='font-semibold text-xl'>Receiver</span>
      </div>
      <ul className="bg-white rounded-md p-5 border border-neutral-300 min-h-[20rem] flex">
        {
          messages.map((item:any) => (<li className="text-gray-800 mb-2 ">{JSON.stringify(item.data)}</li>))
        }
      </ul>
    </Card>
  );
};

export default Receiver;
