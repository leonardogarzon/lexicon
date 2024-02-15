import GridControl from "@components/formControls/Grid.control";
import TitleControl from "@components/formControls/Title.control";

const ClientsPage = () => {
  const columns = [
    {
      id: "name",
      name: "Name",
    },
    {
      id: "files",
      name: "Files",
    },
    {
      id: "type",
      name: "Type",
    },
  ];

  const rows = [
    { id: 1, files: 1, name: "Games", type: "File folder" },
    { id: 2, files: 2, name: "Program Files", type: "File folder" },
    { id: 3, files: 3, name: "Program Files", type: "File folder" },
    { id: 4, files: 4, name: "Program Files", type: "File folder" },
    { id: 5, files: 5, name: "Program Files", type: "File folder" },
    { id: 6, files: 6, name: "Program Files", type: "File folder" },
    { id: 7, files: 7, name: "Program Files", type: "File folder" },
    { id: 8, files: 8, name: "Program Files", type: "File folder" },
    { id: 9, files: 9, name: "Program Files", type: "File folder" },
    { id: 10, files: 10, name: "Program Files", type: "File folder" },
    { id: 11, files: 11, name: "Program Files", type: "File folder" },
    { id: 12, files: 12, name: "Program Files", type: "File folder" },

  ];
  return (
    <>
      <TitleControl level={1}>Clients Page</TitleControl>
      <GridControl columns={columns} rows={rows} offset={5} />
    </>
  );
};

export default ClientsPage;
