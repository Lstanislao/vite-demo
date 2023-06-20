import React from 'react'
import socket from '../lib/socket';
import Connection from '../components/amqp/Connection';
import Receiver from '../components/amqp/Receiver';
import Publisher from '../components/amqp/Publisher';

function AmqpPage() {
  const [fooEvents, setFooEvents] = React.useState<any>([]);
  const [isConnected, setIsConnected] = React.useState(socket.connected);

  React.useEffect(() => {
       function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }
    
    function onFooEvent(value:any) {
      console.log('foo', value);
      setFooEvents((previous:any) => [...previous, value]);
    }
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    };
  }, []);

  React.useEffect(() => {
    function onFooEvent(value:any) {
      setFooEvents(fooEvents.concat(value));
    }

    socket.on('foo', onFooEvent);

    return () => {
      socket.off('foo', onFooEvent);
    };
  }, [fooEvents]);
  return (
    <div className="p-5 flex flex-col space-y-5">
      <Connection />
      {/* <Subscriber /> */}
      <Publisher />
      <Receiver payload={fooEvents} /> 
    </div>
  )
}

export default AmqpPage;