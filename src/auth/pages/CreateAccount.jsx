import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const initForm = {
  email: "",
  displayName: "",
  password: "",
};

export const CreateAccount = () => {
  const navigate = useNavigate();

  const {
    authState: { errorMessage },
    signUpUser,
  } = useContext(AuthContext);

  const { email, password, displayName, onInputChange } = useForm(initForm);

  const onRegister = async (event) => {
    event.preventDefault();

    const isValidLogin = await signUpUser(email, password, displayName);

    if (isValidLogin) {
      navigate("/events", { replace: true });
    }
  };

  return (
    <>
      <div className='container vh-100 d-flex justify-content-center align-items-center'>
        <div className='row w-100'>
          <div className='col-md-6 mx-auto'>
            <div className='card animate__animated animate__jackInTheBox'>
              <div className='card-body'>
                <h5 className='card-title text-center'>
                  Registrar usuario nuevo
                </h5>
                <form>
                  <div className='form-group'>
                    <label htmlFor='email'>Correo Electrónico</label>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      name='email'
                      value={email}
                      onChange={onInputChange}
                      placeholder='Ingrese su correo electrónico'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='email'>Nombre Completo</label>
                    <input
                      type='text'
                      className='form-control'
                      id='displayName'
                      name='displayName'
                      value={displayName}
                      onChange={onInputChange}
                      placeholder='LLene con un nombre completo'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='password'>Contraseña</label>
                    <input
                      type='password'
                      className='form-control'
                      id='password'
                      name='password'
                      value={password}
                      onChange={onInputChange}
                      placeholder='Ingrese su contraseña'
                    />
                  </div>
                  <br />
                  {errorMessage && (
                    <div className='alert alert-danger' role='alert'>
                      {errorMessage}
                    </div>
                  )}

                  <div className='form-group'>
                    <button
                      type='submit'
                      className='btn btn-primary btn-block'
                      onClick={onRegister}
                    >
                      Registrar
                    </button>
                  </div>
                  <div className='form-group'>
                    <Link to={"/login"} className=''>
                      Ya tienes cuenta? Logeate aqui.{" "}
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
