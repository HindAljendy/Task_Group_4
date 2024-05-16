import { InputProps } from "../../configs/global";

const Inputs = ({
  textarea,
  type,
  required,
  value,
  setValue,
  errorRequest,
  field,
}: InputProps) => {
  return (
    <div className="main-input">
      {textarea ? (
        required ? (
          <textarea
            value={value}
            name={field}
            autoFocus={errorRequest?.hasOwnProperty(field)}
            onChange={(e) => setValue(e.target.value)}
            required
          ></textarea>
        ) : (
          <textarea
            value={value}
            name={field}
            autoFocus={errorRequest?.hasOwnProperty(field)}
            onChange={(e) => setValue(e.target.value)}
          ></textarea>
        )
      ) : required ? (
        <input
          type={type}
          name={field}
          value={value}
          autoFocus={errorRequest?.hasOwnProperty(field)}
          onChange={(e) => setValue(e.target.value)}
          required
        />
      ) : (
        <input
          type={type}
          name={field}
          value={value}
          autoFocus={errorRequest?.hasOwnProperty(field)}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </div>
  );
};

export default Inputs;
