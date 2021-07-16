import PropTypes from "prop-types";
const SelectBox = ({
  name,
  options,
  onChange,
  className,
  selectDescription,
}) => {
  return (
    <select onChange={onChange} className={className ?? ""} name={name}>
      <option value="">{selectDescription}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};
SelectBox.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  selectDescription: PropTypes.string.isRequired,
  className: PropTypes.string,
};
export default SelectBox;
