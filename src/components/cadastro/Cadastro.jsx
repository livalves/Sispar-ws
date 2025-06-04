import {useNavigate} from "react-router-dom"
import Logo from "../../assets/Tela Login/logo-ws.png";
import styles from "./Cadastro.module.scss"
import api from "../../Services/Api"
import {useState} from "react" 


function Cadastro() {

    const navigate = useNavigate() //Iniciando o hook useNavigate

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("") 
    const [cargo, setCargo] = useState("")
    const [salario, setSalario] = useState("")
    const [senha, setSenha] = useState("") 

    const handleCadastro = async (e) => {
        e.preventDefault(); 

        try {
            const response = await api.post("/colaborador/cadastrar", {
                nome,
                email,
                cargo,
                salario,
                senha
            });

            alert("Cadastro realizado com sucesso!");
            navigate("/"); 
        } catch (error) {
            console.error("Erro ao cadastrar:", error);
            alert("Erro ao cadastrar. Verifique os dados e tente novamente.");
        }
    };

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
                    <label htmlFor=""> Nome Completo </label>
                    <input type="text" name="nome" id="nome" placeholder="Informe o seu nome completo" value={nome} onChange={(e) => setNome(e.target.value)}/>
                    <label htmlFor=""> Email </label>
                    <input type="email" name="email" id="email" placeholder="Informe o seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor=""> Cargo </label>
                    <input type="text" name="cargo" id="cargo" placeholder="Informe o seu cargo" value={cargo} onChange={(e) => setCargo(e.target.value)}/>
                    <label htmlFor=""> Salário </label>
                    <input type="number" name="salario" id="salario" placeholder="Informe o seu alário" value={salario} onChange={(e) => setSalario(e.target.value)}/>
                    <label htmlFor=""> Senha </label>
                    <input type="password" name="password" id="password" placeholder="Informe uma senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>

                    <div className={styles.boxButton}>
                        <button type="submit" className={styles.btnSignUp}  onClick={handleCadastro}> 
                            <span> Criar conta </span> 
                        </button>
                    </div>
                    <button className={styles.btnSignIn} onClick={()=>{navigate("/")}}> Fazer login </button>
                </form>
            </section>
        </main>
    );
}

export default Cadastro;
