import socket from '../../lib/socket';
import Card from '../shared/Card';
import Button from '../shared/Button';

const Connection = () => {

  function connect() {
    socket.connect();
  }

  function disconnect() {
    socket.disconnect();
  }

  return (
    <Card
      className='flex flex-col space-y-5 p-5'
    >
      <div className='flex w-full border-b border-neutral-200 '>
        <span className='font-semibold text-xl'>Connection</span>
      </div>
      <p className='text-xl font-semibold text-neutral-700'> 
        <span>State: </span>
        {`${socket.connected}`}</p>
      <div className='flex justify-evenly'>
        <Button
          onClick={() => {
            connect();
          }}>
          Connect
        </Button>
          <Button
          onClick={() => {
            disconnect();
          }}
        >
          Disconnect
        </Button>
      </div>
    </Card>
  );
};

export default Connection;
