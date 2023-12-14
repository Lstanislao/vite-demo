import React from 'react';
import Card from './shared/Card';

const Receiver = ({ responses }: { responses: string[] }) => {
  return (
    <Card className="p-4">
      <div className="flex w-full border-b border-neutral-200 mb-5">
        <span className="font-semibold text-xl">Receiver</span>
      </div>
      <ul className="bg-white rounded-md p-5 border border-neutral-300 h-[20rem] flex flex-col items-start justify-start overflow-y-auto text-start">
        {responses.map((item: any) => (
          <>
            <p>Response</p>
            <li className="text-gray-800 mb-2 ">{item}</li>
          </>
        ))}
      </ul>
    </Card>
  );
};

export default Receiver;
