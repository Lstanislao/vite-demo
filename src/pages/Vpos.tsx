import React from 'react';
import { useVPOS } from '../lib/api/VPOS';
import Card from '../components/shared/Card';
import Button from '../components/shared/Button';

function VPOSPage() {
  const createMutation = useVPOS();

  const [response, setResponse] = React.useState('');
  const [response2, setResponse2] = React.useState('');
  const [value, setValue] = React.useState('{"key":"value"}');


  const [loading, setLoading] = React.useState(false);

  const onFinish = () => {
    executeMutation(value);
  };

  async function handleSubmitToApi(_data:any) {
    try {
      const postData = async () => {
        const resp = await fetch('/api/vpos', {
          method: 'POST',
          body: JSON.stringify(_data),
        });
        return resp.json();
      };
      const _resp = await postData();

      console.log(_resp);
      setResponse(JSON.stringify(_resp?.data));
      setResponse2(JSON.stringify(_resp?.data?.body) ?? '');
    } catch (error) {
      console.log(error);
      setResponse(JSON.stringify(error));
    }
  }

  const executeMutation = async (_data:any) => {
    try {
      setLoading(true);
      const resp = await createMutation.mutateAsync(_data);
      console.log({ resp });
      setResponse(JSON.stringify(resp?.data));
      setResponse2(JSON.stringify(resp?.data?.body) ?? '');
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
                montoTransaccion: 1000,
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
          <span className='font-semibold text-xl'>CUSTOM PAYLOAD</span>
        </div>
       <input 
          value={value} onChange={(e) => setValue(e.target.value)} 
          type="textarea" className='w-full h-56  border border-neutral-300 rounded'
        />
        <div className='flex justify-evenly mt-5'>
          <Button onClick={() => {
            onFinish();
          }}>Submit</Button>
          <Button
            onClick={() =>
              handleSubmitToApi(value)
            }
          >
            Submit by api
          </Button>
        </div>
      </Card>
      <Card className='p-4 space-y-5'>
        <div className='flex w-full border-b border-neutral-200 mb-5'>
          <span className='font-semibold text-xl'>Response</span>
        </div>
        <input
          className="w-full h-32 border rounded"
          type="textarea"
          value={loading ? 'Cargando...' : response}
          onChange={() => {}}
        />
        <input
          type="textarea"
          className="w-full h-32 border rounded"
          value={loading ? 'Cargando...' : response2}
          onChange={() => {}}
        />
      </Card>
    </div>
  );
}

export default VPOSPage;
