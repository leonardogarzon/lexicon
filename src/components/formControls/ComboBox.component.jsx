import { Option, Picker } from "@clayui/core";
import ClayForm from "@clayui/form";
import ClayLayout from "@clayui/layout";

const ComboBoxControl = ({
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
  items,
}) => {
  return (
    <ClayLayout.Col sm={sm} md={md} xl={xl}>
      <ClayForm.Group className={error && "has-error"}>
        <label htmlFor={id}>{label}</label>
        <Picker
          aria-labelledby={label}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        >
          {(item) => <Option key={item}>{item}</Option>}
          {items.map((item) => (
            <Option key={item} value={item}>
              {item}
            </Option>
          ))}
        </Picker>
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

export default ComboBoxControl;
