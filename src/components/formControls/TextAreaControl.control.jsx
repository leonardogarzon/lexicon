import ClayForm, { ClayInput } from "@clayui/form";
import ClayLayout from "@clayui/layout";

const TextAreaControl = ({
  id,
  placeholder,
  value,
  onChange,
  label,
  sm,
  md,
  xl,
  error,
  errorMessage,
}) => {
  return (
    <ClayLayout.Col sm={sm} md={md} xl={xl}>
      <ClayForm.Group className={error && "has-error"}>
        <label htmlFor={id}>{label}</label>
        <ClayInput
          id={id}
          component="textarea"
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={onChange}
        />
        {error && (
          <ClayForm.FeedbackGroup>
            <ClayForm.FeedbackItem id={id}>
              <ClayForm.FeedbackIndicator symbol="exclamation-full" />
              {errorMessage}
            </ClayForm.FeedbackItem>
          </ClayForm.FeedbackGroup>
        )}
      </ClayForm.Group>
    </ClayLayout.Col>
  );
};

export default TextAreaControl;
