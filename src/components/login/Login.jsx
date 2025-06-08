import {useNavigate} from "react-router-dom"
import Logo from "../../assets/Tela Login/logo-ws.png";
import styles from "./Login.module.scss"
import api from "../../Services/Api"
import {useState} from "react" 


function Login() {

    const navigate = useNavigate() 
    const irParaReembolsos = () => {
        navigate("/reembolsos") 
    }

    const [email, setEmail] = useState("") 
    const [senha, setSenha] = useState("") 

    const fazerLogin = async (e) => {   
        e.preventDefault() 

        try {
            const response = await api.post("/colaborador/login", {
                "email": email, 
                "senha": senha
            }) 

            const token = response.data.token; 
            localStorage.setItem("token", token); 

            irParaReembolsos() 
        } catch (error) {
            console.error("Erro ao fazer login:", error)
            alert("Email ou senha incorretos! Verifique e tente novamente.")
        }
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
                    <input type="email" name="email" id="email" placeholder="Email" value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" name="password" id="password" placeholder="Senha"
                    value={senha} onChange={(e) => setSenha(e.target.value)}/>

                    <button className={styles.btnRecoveryPass}> Esqueci minha senha</button>

                    <div className={styles.boxButton}>
                        <button className={styles.btnSignIn} onClick={fazerLogin}> 
                            <span> Entrar </span> 
                        </button>
                        <button className={styles.btnSignUp} onClick={()=>{navigate("/cadastro")}} > 
                            <span> Criar conta </span> 
                        </button>
                    </div>
                </form>
            </section>
        </main>
    );
}

export default Login;
