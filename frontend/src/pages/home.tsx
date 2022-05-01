import useWebSocket from 'react-use-websocket';
import { useEffect, useState } from 'react';
import { Layout } from 'src/components/layout';
import axios from 'axios';

const IndexPage = () => {
  const [numero, setNumero] = useState('');
  const [users, setUsers] = useState([]);


  const { lastJsonMessage, sendMessage } = useWebSocket('ws://localhost:3333', {
    onOpen: () => console.log(`Connected to App WS`),
    onMessage: () => {
      if (lastJsonMessage?.n) {
        setNumero(`${lastJsonMessage.n * 1000}`);
        setUsers(lastJsonMessage.users);
      }
    },
    queryParams: { token: '123456' },
    onError: (event) => {
      console.error(event);
    },
    shouldReconnect: (closeEvent) => true,
    reconnectInterval: 3000,
  });

  useEffect(() => {
    sendMessage('Recebi ai mano');
  }, [numero, sendMessage]);

  function fetchRemoveUser(id: string) {
    axios.delete(`http://127.0.0.1:3333/user/${id}`).then((res) => {
      console.log('Delete user');
    });
  }

  return (
    <Layout>
      <div className="grid grid-cols-2 gap-2 m-4">
        {users.map((post) => (
          <div
            className=" border-t-4 border-teal-500 shadow-xl px-3 py-8 relative"
            key={post.email}>
            <button
              type="button"
              onClick={() => fetchRemoveUser(post.id)}
              className="absolute -top-4 right-0 bg-red-500 text-xs text-white w-6 aspect-square rounded-full shadow-lg">
              X
            </button>
            <h3 className="text-2xl text-gray-700 font-bold">{post.name}</h3>
            <p className="text-lg text-gray-700">{post.email}</p>
          </div>
        ))}
      </div>

      {/* <h1>Hello Next.js 👋</h1>
      <p>Hello World {numero}</p> */}
    </Layout>
  );
};

export default IndexPage;
