function Input(props) {
  return (
    <div className="form-group">
        <input type={props.type} placeholder={props.placeholder} />

    </div>
  );
}

export default Input;