import ClientsProvider from "@providers/Clients.provider";
import { useEffect, useState } from "react";

const useClients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  const getClients = async () => {
    setLoading(false);
    const response = ClientsProvider();
    setClients(response);
    setLoading(true);
  };
  const createClient = async (client) => {
    setClients([...clients, client]);
  };

  const updateClient = async (client) => {
    setClients(
      clients.map((c) => {
        if (c.id === client.id) {
          return client;
        }
        return c;
      })
    );
  };

  const deleteClient = async (client) => {
    setClients(clients.filter((c) => c.id !== client.id));
  };

  useEffect(() => {
    getClients();
  }, []);

  return {
    clients,
    loading,
    getClients,
    updateClient,
    createClient,
    deleteClient,
  };
};

export default useClients;
