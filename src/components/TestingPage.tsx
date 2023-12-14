import React from 'react';
import Publisher from './Publisher';
import Receiver from './Receiver';
import axios from 'axios';

const endpoint = 'http://localhost:3000/api';

function TestingPage() {
  const [responses, setResponses] = React.useState<any[]>([]);

  const postTemplate = async (
    method: string,
    id: string,
    token: string,
    payload: string
  ) => {
    const resp = await axios.post(endpoint + '/newpos/template/v1', {
      methodName: method,
      id,
      token,
      payload,
    });

    setResponses((prev) => [...prev, resp.data]);
  };

  const postText = async (value: string) => {
    const resp = await axios.post(endpoint + '/newpos/custom/v1', {
      xmlText: value,
    });

    setResponses((prev) => [...prev, resp.data]);
  };

  return (
    <div className="p-5 flex flex-col space-y-5">
      <Publisher postTemplate={postTemplate} postText={postText} />
      <Receiver responses={responses} />
    </div>
  );
}

export default TestingPage;
