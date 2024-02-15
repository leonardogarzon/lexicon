import TitleControl from "@components/formControls/Title.control";
import LayoutControl from "@components/formControls/Layout.control";
import TextBoxControl from "@components/formControls/TextBoxControl.control";

const FormPage = () => {
  return (
    <>
      <TitleControl level={1}>Form Demo</TitleControl>
      <TitleControl level={2}>Personal Information</TitleControl>
      <LayoutControl justify="start">
        <TextBoxControl id="FirstName" label="First Name" sm={12} md={6} xl={3} />
        <TextBoxControl id="LastName" label="Last Name" sm={12} md={6} xl={3} />
        <TextBoxControl id="IdNumber" label="Id Number" type="number" sm={12} md={6} xl={3} />
      </LayoutControl>
    </>
  );
};

export default FormPage;
