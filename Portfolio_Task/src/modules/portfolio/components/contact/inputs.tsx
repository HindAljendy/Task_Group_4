import { InputProps } from "../../configs/global";

const Inputs = ({
  textarea,
  type,
  required,
  value,
  setValue,
  errorRequest,
  field,
  style,
}: InputProps) => {
  return (
    <div className="main-input">
      {textarea ? (
        required ? (
          <textarea
            value={value}
            name={field}
            className={style}
            autoFocus={errorRequest?.hasOwnProperty(field)}
            onChange={(e) => setValue(e.target.value)}
            required
          ></textarea>
        ) : (
          <textarea
            value={value}
            name={field}
            className={style}
            autoFocus={errorRequest?.hasOwnProperty(field)}
            onChange={(e) => setValue(e.target.value)}
          ></textarea>
        )
      ) : required ? (
        <input
          type={type}
          name={field}
          value={value}
          className={style}
          autoFocus={errorRequest?.hasOwnProperty(field)}
          onChange={(e) => setValue(e.target.value)}
          required
        />
      ) : (
        <input
          type={type}
          name={field}
          className={style}
          value={value}
          autoFocus={errorRequest?.hasOwnProperty(field)}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </div>
  );
};

export default Inputs;
