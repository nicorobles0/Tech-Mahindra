import React, { FormEvent } from "react";
import style from "./styles/login.module.css";
import { useState } from "react";
import { sendLoginForm } from "./services/login.service";

export const LoginTemplate = () => {
  const [respMessage, setRespMessage] = useState<string>(
    "Digite sus datos personales para ingresar."
  );
  const [emailInput, setmailInput] = useState<string>("");
  const [passInput, setPassInput] = useState<string>("");
  const [loadingForm, setloading] = useState<boolean>(false);
  const [isResponse, setIsResponse] = useState<boolean>(false);
  const [succesResp, setSuccesResp] = useState<boolean | null>(null);
  const [validEmail, setValidEmail] = useState<boolean>(true);
  const emailExpression: RegExp =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)/;
        
  const onSetForm = async (event: FormEvent) => {
    if (!loadingForm) {
        event.preventDefault();
        setValidEmail(emailExpression.test(emailInput));
        if (emailExpression.test(emailInput)) {
            setIsResponse(false);
            setloading(true);
            sendLoginForm(emailInput, passInput)
                .then((sus: any) => {
                    if (sus?.status !== 200) {
                        return Promise.reject(new Error("Invalid response"));
                    } else {
                        setmailInput("");
                        setPassInput("")
                        setSuccesResp(true);
                        setloading(false);
                        setIsResponse(true);
                    }
                })
                .catch(() => {
                    setSuccesResp(false);
                    setloading(false);
                    setIsResponse(true);
                });
        }
    }
};
  return (
    <section className={style.container}>
      <div className={style.img}>
        <img src="/assets/img/login.jpg" alt="Imagen Login" />
      </div>
      <div className={style.loginContent}>
        <form className={style.form} action="#">
          <div className={style.titleContainer}>
            <h1>Ingreso</h1>
            <h2>Hola!</h2>
            <p> {respMessage} </p>
          </div>
          <div className={style.loginInnerContent}>
            <div className={style.inputDiv}>
              <input
                placeholder="Correo"
                type="text"
                className={style.input}
                value={emailInput}
                onChange={({ target }: any) => {
                    setmailInput(target.value);
                }}
              />
            </div>
            <div className={style.inputDiv}>
              <input
                placeholder="Contraseña"
                id="pswrd"
                type="password"
                className={style.input}
                value={passInput}
                onChange={({ target }: any) => {
                    setPassInput(target.value);
                }}
              />
            </div>
          </div>
          <input type="submit" className={style.btn} value="Login" />
        </form>
      </div>
    </section>
  );
};
