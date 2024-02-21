import ClayForm, { ClayInput } from "@clayui/form";
import { ClayIconSpriteContext } from "@clayui/icon";
import ClayLayout from "@clayui/layout";

const spritemap = "/images/icons/icons.svg";

const TextBoxControl = ({
  id,
  type = "text",
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
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
        />
        {error && (
          <ClayForm.FeedbackGroup>
            <ClayForm.FeedbackItem id={id}>
              <ClayIconSpriteContext.Provider value={spritemap}>
                <ClayForm.FeedbackIndicator symbol="exclamation-full" />
                {errorMessage}
              </ClayIconSpriteContext.Provider>
            </ClayForm.FeedbackItem>
          </ClayForm.FeedbackGroup>
        )}
      </ClayForm.Group>
    </ClayLayout.Col>
  );
};

export default TextBoxControl;
