import React from 'react';
import Button from './shared/Button';
import Card from './shared/Card';
import { Input } from './shared/Input';

interface PublisherProps {
  postTemplate: (
    method: string,
    id: string,
    token: string,
    payload: string
  ) => Promise<void>;
  postText: (value: string) => Promise<void>;
}

const Publisher = ({ postTemplate, postText }: PublisherProps) => {
  const [method, setMethod] = React.useState('');
  const [payload, setPayload] = React.useState('');
  const [token, setToken] = React.useState('');
  const [id, setId] = React.useState('');

  const onPostTemplate = async (e: any) => {
    e.preventDefault();
    try {
      await postTemplate(method, id, token, payload);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="p-4">
      <div className="flex w-full border-b border-neutral-200 mb-5">
        <span className="font-semibold text-xl">Publisher</span>
      </div>
      <div className="flex gap-5 my-5">
        <Input
          label="Método"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />
        <Input label="ID" value={id} onChange={(e) => setId(e.target.value)} />
        <Input
          label="Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
      </div>
      <div>
        <textarea
          value={payload}
          onChange={(e) => setPayload(e.target.value)}
          className="block p-2.5 w-full h-[300px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
      focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></textarea>
      </div>
      <div className="flex justify-end mt-2">
        <Button onClick={onPostTemplate}>Publish text</Button>
      </div>
    </Card>
  );
};

export default Publisher;
