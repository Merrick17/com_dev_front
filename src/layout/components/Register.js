import React ,{Fragment,useState}from 'react'
import axios from 'axios'
const Register = () => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const registerUser = async () => {
    try {
      let response = await axios.post("http://localhost:3000/users/add", {
        name: name,
        firstName: firstName,
        email: email,
        password: password,
        phone: phone,
      });
      console.log(response);
    } catch (error) {
      console.log("error",error)
    }
  };
  return (
    <Fragment>
    <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            id="name"
            value={name}
            onChange={(event) => {
              //changer l'evenemt input
              setName(event.target.value);
              console.log("The name is ", name);
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="FirstName"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(event) => {
              //changer l'evenemt input
              setFirstName(event.target.value);
              console.log("The firstName is ", firstName);
            }}
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            name="email"
            minLength="6"
            value={email}
            onChange={(event) => {
              //changer l'evenemt input
              setEmail(event.target.value);
              console.log("The name is ", email);
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            placeholder=" Password"
            name="password"
            minLength="6"
            value={password}
            onChange={(event) => {
              //changer l'evenemt input
              setPassword(event.target.value);
              console.log("The password is ", password);
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="phone"
            placeholder="phone "
            name="phone"
            minLength="6"
            value={phone}
            onChange={(event) => {
              //changer l'evenemt input
              setPhone(event.target.value);
              console.log("The phone is ", phone);
            }}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={registerUser}
        >
          ADDUSER
        </button>
      </form>
      <p className="my-1">
        Already have an account? <a href="login.html">Sign In</a>
      </p>
    </section>
  </Fragment>
);
};

export default Register;

