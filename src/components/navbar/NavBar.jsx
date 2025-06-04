import Historico from "../../assets/Header/Botão - Histórico.png";
import Home from "../../assets/Header/botão - Home.png";
import Pesquisa from "../../assets/Header/Botão - Pesquisa.png";
import Reembolso from "../../assets/Header/Botão - Reembolso.png";
import Sair from "../../assets/Header/Botão - Sair.png";
import Perfil from "../../assets/Header/image.png";
import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.scss";

function NavBar() {
    const navigate = useNavigate();

    return (
        <nav className={styles.navBarEstilo}>
			<button className={styles.buttonNavBar}>
                <span> ≡ </span>
			</button>

            <section>
                <img className={styles.perfil} src={Perfil} alt="Foto do perfil" />

                <div>
                    <button className={styles.buttonNavBar} title="Página inicial" onClick={() => {navigate("/reembolsos"); }}>
                        <img src={Home} alt="Botão Home" />
                    </button>

                    <button onClick={()=>{navigate("/solicitacao")}} title="Solicitação de Reembolsos" className={styles.buttonNavBar}>
                        <img src={Reembolso} alt="Botão Reembolso" />
                    </button>

                    <button onClick={()=>{navigate("/pesquisa")}} title="Consulta de Reembolsos" className={styles.buttonNavBar}>
                        <img src={Pesquisa} alt="Botão Pesquisa" />
                    </button>

                    <button onClick={()=>{navigate("/historico")}} title="Histórico de reembolsos" className={styles.buttonNavBar}>
                        <img src={Historico} alt="Botão histórico" />
                    </button>
                </div>
            </section>

            <button className={styles.buttonSair} title="Sair" onClick={()=>{navigate("/")}} >
                <img src={Sair} alt="Botão sair" />
            </button>
        </nav>
    );
}

export default NavBar;
