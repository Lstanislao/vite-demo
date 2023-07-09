import React from 'react';
import { useVPOS } from '../lib/api/VPOS';
import Card from '../components/shared/Card';
import Button from '../components/shared/Button';

function VPOSPage() {
  const createMutation = useVPOS();

  const [response, setResponse] = React.useState("");
  const [value, setValue] = React.useState('{"key":"value"}');

  const [loading, setLoading] = React.useState(false);

  const onFinish =  async () => {
     executeMutation(value);
      //fetch post 
      // setLoading(true);
      // const resp = await fetch('http://localhost:3333/api/vpos', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: value
      // })
        // setLoading(false);
  };

  const executeMutation = async (_data:any) => {
    try {
      setLoading(true);
      const resp = await createMutation.mutateAsync(_data);
      console.log({ resp });
      setResponse(JSON.stringify(resp?.data));
    } catch (error) {
      console.log(error);
      setResponse(JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 flex flex-col space-y-5">
      <Card  className='p-5'>
        <div className='flex w-full border-b border-neutral-200 mb-5'>
          <span className='font-semibold text-xl'>Functions</span>
        </div>
        <div className='flex justify-evenly'>
          <Button
            onClick={() =>
              executeMutation({
                accion: 'tarjeta',
                montoTransaccion: "1000",
                cedula: '27769576',
              })
            }
          >
            Compra
          </Button>
          <Button
            onClick={() =>
              executeMutation({
                accion: 'cierre',
              })
            }
          >
            Cierre
          </Button>
          <Button
            onClick={() =>
              executeMutation({
                accion: 'imprimeUltimoVoucher',
              })
            }
          >
            Ultimo voucher
          </Button>
          <Button
            onClick={() =>
              executeMutation({
                accion: 'imprimeUltimoVoucherP',
              })
            }
          >
            Ultimo voucher procesado
          </Button>
        </div>
      </Card>
      <Card className='p-5'>
        <div className='flex w-full border-b border-neutral-200 mb-5'>
          <span className='font-semibold text-xl'>Custom payload</span>
        </div>
        <textarea 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
          className="block p-2.5 w-full h-[300px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          >
        </textarea>
        <div className='flex justify-evenly mt-5'>
          <Button onClick={() => {
            onFinish();
          }}>Submit</Button>
      
        </div>
      </Card>
      <Card className='p-4 space-y-5'>
        <div className='flex w-full border-b border-neutral-200 mb-5'>
          <span className='font-semibold text-xl'>Response</span>
        </div>
        <textarea 
          value={loading ? 'Cargando...' : response}
          onChange={() => {}}
          className="block p-2.5 w-full h-[300px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          >
        </textarea>
      </Card>
    </div>
  );
}

export default VPOSPage;
