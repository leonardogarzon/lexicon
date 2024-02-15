import GridControl from "@components/formControls/Grid.control";
import TitleControl from "@components/formControls/Title.control";
import ModalControl from "@components/formControls/Modal.control";
import LayoutControl from "@components/formControls/Layout.control";
import TextBoxControl from "@components/formControls/TextBoxControl.control";
import DateControl from "@components/formControls/Date.control";
import ButtonGroupControl from "../components/formControls/ButtonGroup.control";
import ButtonControl from "../components/formControls/Button.control";

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
      <ButtonGroupControl>
        <ModalControl
          title="Create Client"
          buttonTitle="Crate Client"
          footer={
            <>
              <ButtonGroupControl>
                <ButtonControl onClick={() => console.log("Cancel")}>
                  {"Login"}
                </ButtonControl>
                <ButtonControl onClick={() => console.log("Cancel")}>
                  {"Login"}
                </ButtonControl>
              </ButtonGroupControl>
            </>
          }
        >
          <LayoutControl justify="start">
            <TextBoxControl
              id="FirstName"
              label="First Name"
              sm={12}
              md={6}
              xl={3}
            />
            <TextBoxControl
              id="LastName"
              label="Last Name"
              sm={12}
              md={6}
              xl={3}
            />
            <TextBoxControl
              id="IdNumber"
              label="Id Number"
              type="number"
              sm={12}
              md={6}
              xl={3}
            />
            <DateControl
              id="Birthdate"
              label="Birthdate"
              sm={12}
              md={6}
              xl={3}
            />
          </LayoutControl>
        </ModalControl>
      </ButtonGroupControl>
      <GridControl columns={columns} rows={rows} offset={5} />
    </>
  );
};

export default ClientsPage;
