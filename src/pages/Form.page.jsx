import TitleControl from "@components/formControls/Title.control";
import LayoutControl from "@components/formControls/Layout.control";
import TextBoxControl from "@components/formControls/TextBoxControl.control";
import DateControl from "@components/formControls/Date.control";
import TextAreaControl from "@components/formControls/TextAreaControl.control";
import PanelControl from "@components/formControls/Panel.control";
import CheckBoxControl from "@components/formControls/CheckBox.control";
import ComboBoxControl from "@components/formControls/ComboBox.component";

const FormPage = () => {
  const items = ["C.C", "T.I", "C.E", "Pasaporte", "Nit"];
  return (
    <>
      <TitleControl level={1}>Form Demo</TitleControl>
      <h3 className="autofit-row sheet-subtitle">
			<span className="autofit-col autofit-col-expand">
				<span className="heading-text">Enter your personal details</span>
			</span>
			<span className="autofit-col">
				<span className="heading-end">
					{/* <button class="btn btn-secondary btn-sm" type="button">
						Add
					</button> */}
				</span>
			</span>
		</h3>
      <PanelControl title="Personal Information" expanded={true}>
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
          <ComboBoxControl
            id="Type"
            label="Id Type"
            items={items}
            sm={12}
            md={6}
            xl={3}
          />
          <DateControl id="Birthdate" label="Birthdate" sm={12} md={6} xl={3} />
        </LayoutControl>
      </PanelControl>
      <PanelControl title="Aditional Information" expanded={true}>
        <LayoutControl justify="start">
          <CheckBoxControl
            id="CheckBox"
            label="CheckBox"
            sm={12}
            md={6}
            xl={3}
          />
          <TextAreaControl id="Details" label="Details" sm={12} />
        </LayoutControl>
      </PanelControl>
    </>
  );
};

export default FormPage;
