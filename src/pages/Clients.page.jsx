import GridControl from "@components/formControls/Grid.control";
import TitleControl from "@components/formControls/Title.control";
import ModalControl from "@components/formControls/Modal.control";
import LayoutControl from "@components/formControls/Layout.control";
import TextBoxControl from "@components/formControls/TextBoxControl.control";
import DateControl from "@components/formControls/Date.control";
import ButtonGroupControl from "@components/formControls/ButtonGroup.control";
import ButtonControl from "@components/formControls/Button.control";
import clients from "@common/mocks/clients";

const ClientsPage = () => {
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
  ];
  return (
    <>
      <TitleControl level={1}>Clients Page</TitleControl>
      <h3 className="autofit-row sheet-subtitle">
			<span className="autofit-col autofit-col-expand">
				<span className="heading-text">Registered Customers in the application</span>
			</span>
			<span className="autofit-col">
				<span className="heading-end">
        <ModalControl
            title="Create"
            buttonTitle="Create"
            footer={
              <>
                <ButtonGroupControl>
                  <ButtonControl onClick={() => console.log("Cancel")}>
                    {"Create"}
                  </ButtonControl>
                  <ButtonControl
                    type="secondary"
                    onClick={() => console.log("Cancel")}
                  >
                    {"Cancel"}
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
				</span>
			</span>
		</h3>

      <GridControl columns={columns} rows={clients} offset={5} />
    </>
  );
};

export default ClientsPage;
