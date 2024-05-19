import axios from "axios";
import "./Login.css";
import { useState, ChangeEvent} from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

interface LoginData {
    email: string;
    password: string;
  }

const Login = () => {
  const navigate = useNavigate();
  const {handleSubmit} = useForm();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };



  const onSubmit = async (data: LoginData) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("token", response.data.access_token);
      if (response.status === 200) {
        navigate("/dashboard");
      } else {
        setError("failed login");
        navigate("/login");
      }
    } catch (error) {
      console.log("error happened", error);
      setError("Error , please, Try again..");
    }
  };

  const handleLogin = async () => {
    await onSubmit({ email, password });
  };

  return (
    <div className="HJ_Login">
      <form  onSubmit={handleSubmit(handleLogin)}>
        <div className="container-fluid">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
              <div className=" HJ_ColorForm rounded p-4 p-sm-5 my-4 mx-3">
                <div className="d-flex align-items-center justify-content-between mb-3 ">
                  <h3 className="text-light">DarkPen</h3>
                  <h3>Sign In</h3>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    value={email}
                    required
                    onChange={handleEmailChange}
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="password"
                    value={password}
                    required
                    onChange={handlePasswordChange}
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary py-3 w-100 mb-4"
                >
                  Login
                </button>
                {(error !== "") && <p style={{ color: "red" }}>{error}</p>}

              </div>

            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
