const FormItem = ({ field, value, handleChange }) => {
    return (
      <div className="mb-3">
        <label htmlFor={field} className="form-label text-capitalize">{field}</label>
        <input
          className="form-control"
          id={field}
          type={field === "password" ? "password": "text"}
          name={field}
          value={value}
          onChange={handleChange}
        />
      </div>
    );
  };
  
  export default FormItem;