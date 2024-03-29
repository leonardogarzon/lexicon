import ClayForm, { ClayInput } from "@clayui/form";
import ClayLayout from "@clayui/layout";
import ClayDatePicker from "@clayui/date-picker";
const spritemap = "/images/icons/icons.svg";

const DateControl = ({
  id,
  value,
  placeholder="YYYY-MM-DD",
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
        <ClayDatePicker
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          spritemap={spritemap}
          value={value}
          years={{
            end: 2024,
            start: 1997,
          }}
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

export default DateControl;
