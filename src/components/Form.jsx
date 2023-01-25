import "./form.css";

function Form() {
  return (
    <>
      <form noValidate>
        <input className="email" type="email" name="email" placeholder="Your email address..." autoComplete="off" />
        <button className="btn" type="submit">
          Notify Me
        </button>
      </form>
    </>
  );
}

export default Form;
