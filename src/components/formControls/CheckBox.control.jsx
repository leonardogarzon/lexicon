import ClayForm, { ClayToggle } from "@clayui/form";
import ClayLayout from "@clayui/layout";

const CheckBoxControl = ({
  id,
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
        <ClayToggle label={label} onToggle={onChange} toggled={value} />
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

export default CheckBoxControl;
