import { useFormik } from "formik";

import { useNavigate } from "react-router-dom";

const useLoginForm = () => {
  const navigate = useNavigate();
  const form = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    onSubmit: (values) => {
      if (values.user === "") {
        form.setErrors({
          user: "Campo requerido",
        });
        return;
      }
      if (values.password === "") {
        form.setErrors({ password: "Campo requerido" });
        return;
      }
      return navigate('/clients', { replace: true });
    },
  });

  return { form };
};
export default useLoginForm;
