import {useNavigate} from "react-router-dom"
import Logo from "../../assets/Tela Login/logo-ws.png";
import styles from "./Login.module.scss"

function Login() {

const navigate = useNavigate() //Iniciando o hook useNavigate

const irParaReembolsos = () => {
    navigate("/reembolsos")  //Redirecionando para a página de reembolsos
}

  return (
    <main className={styles.mainLogin}>
        <section className={styles.containerFoto}></section>

        <section className={styles.formWapper}>
            <div className={styles.boxLogo}>
                <img src={Logo} alt="Logo da wilson sons" />
                <h1>Boas vindas ao <br /> Novo Portal SISPAR </h1>
                <p>Sistema de Emissão de Boletos e Parcelamento</p>
            </div>

            <form action="">
                <input type="email" name="email" id="email" placeholder="Email" />
                <input type="password" name="password" id="password" placeholder="Senha"/>

                <button className={styles.btnRecoveryPass}> Esqueci minha senha</button>

                <div className={styles.boxButton}>
                    <button className={styles.btnSignIn} onClick={irParaReembolsos}> 
                        <span> Entrar </span> 
                    </button>
                    <button className={styles.btnSignUp}> 
                        <span> Criar conta </span> 
                    </button>
                </div>

            </form>
        </section>
    </main>
  );
}

export default Login;
