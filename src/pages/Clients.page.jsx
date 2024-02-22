import GridControl from "@components/formControls/Grid.control";
import TitleControl from "@components/formControls/Title.control";
import {
  ModalBodyControl,
  ModalControl,
  ModalFooterControl,
} from "@components/formControls/Modal.control";
import LayoutControl from "@components/formControls/Layout.control";
import TextBoxControl from "@components/formControls/TextBoxControl.control";
import DateControl from "@components/formControls/Date.control";
import ButtonGroupControl from "@components/formControls/ButtonGroup.control";
import ButtonControl from "@components/formControls/Button.control";
import useClients from "@hooks/Clients.hook";
import IconButtonControl from "@components/formControls/IconButton.control";
import Subtitlecontrol from "../components/formControls/Subtitle.control";
import { useState } from "react";

const ClientsPage = () => {
  const { clients, loading, createClient, deleteClient } = useClients();
  const [modalState, setModalState] = useState(false);
  const columns = [
    {
      id: "id",
      name: "Id",
    },
    {
      id: "firstName",
      name: "First Name",
    },
    {
      id: "lastName",
      name: "Last Name",
    },
    {
      id: "email",
      name: "Email",
    },
    {
      id: "idNumber",
      name: "Id Number",
    },
    {
      id: "actions",
      name: "Actions",
    },
  ];

  const gridActions = (client) => {
    return (
      <>
        <IconButtonControl
          symbol="pencil"
          displayType={null}
          onClick={() => console.log("Edit")}
          ariaLabel="Edit"
        ></IconButtonControl>
        <IconButtonControl
          symbol="trash"
          displayType={null}
          onClick={() => deleteClient(client)}
          ariaLabel="Delete"
        ></IconButtonControl>
      </>
    );
  };

  return (
    <>
      <TitleControl level={1}>Clients Page</TitleControl>
      <Subtitlecontrol subtitle={"Registered Customers in the application"}>
        <ButtonControl
          ariaLabel="Create"
          type="secondary"
          onClick={() => setModalState(!modalState)}
        >
          {"Create"}
        </ButtonControl>
      </Subtitlecontrol>
      <GridControl
        columns={columns}
        rows={clients.map((client) => ({
          ...client,
          actions: gridActions(client),
        }))}
        offset={8}
        loading={loading}
      />
      <ModalControl title="Create" buttonTitle="Create" openState={modalState}>
        <ModalBodyControl>
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
        </ModalBodyControl>
        <ModalFooterControl>
          <ButtonGroupControl>
            <ButtonControl
              ariaLabel="Create"
              onClick={() => {
                createClient({
                  id: new Date().getTime(),
                  firstName: "Tandy",
                  lastName: "Kingsford",
                  email: "tkingsford0@blogspot.com",
                  idNumber: "5824623376",
                });
                setModalState(false);
              }}
            >
              {"Create"}
            </ButtonControl>
            <ButtonControl
              ariaLabel="Cancel"
              type="secondary"
              onClick={() => setModalState(false)}
            >
              {"Cancel"}
            </ButtonControl>
          </ButtonGroupControl>
        </ModalFooterControl>
      </ModalControl>
    </>
  );
};

export default ClientsPage;
