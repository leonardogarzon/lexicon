import ContainerControl from "@components/formControls/Container.control";
import CardControl from "@components/formControls/Card.control";
import ButtonControl from "@components/formControls/Button.control";
import LayoutControl from "@components/formControls/Layout.control";
import TextBoxControl from "@components/formControls/TextBoxControl.control";
import useLoginForm from "@hooks/LoginForm.hook";
import TitleControl from "@components/formControls/Title.control";
import styles from "./Login.module.scss";

const LoginPage = () => {
  const { form } = useLoginForm();
  return (
    <div className={styles.LoginLayout}>
      <ContainerControl>
        <LayoutControl justify="center">
          <CardControl
            footer={
              <>
                <ButtonControl onClick={form.handleSubmit}>
                  {"Login"}
                </ButtonControl>
              </>
            }
          >
            <LayoutControl>
              <TitleControl level={1}>Login</TitleControl>
              <TextBoxControl
                label="User"
                id="user"
                sm={12}
                placeholder="Leonardo..."
                value={form.values.user}
                onChange={form.handleChange}
                error={form.errors.user}
                errorMessage={form.errors.user}
              />
              <TextBoxControl
                type="password"
                label="Password"
                id="password"
                sm={12}
                value={form.values.password}
                onChange={form.handleChange}
                error={form.errors.password}
                errorMessage={form.errors.password}
              />
            </LayoutControl>
          </CardControl>
        </LayoutControl>
      </ContainerControl>
    </div>
  );
};

export default LoginPage;
