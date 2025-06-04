import { useNavigate } from "react-router-dom"
import styles from "./Reembolsos.module.scss";
import Home from "../../assets/Dashboard/home header.png";
import Seta from "../../assets/Dashboard/Vector.png";
import Analises from "../../assets/Dashboard/Análises.png";
import NumeroAnalises from "../../assets/Dashboard/N-Análises.png";
import NumeroAprovados from "../../assets/Dashboard/N-Aprovados.png";
import NumeroRejeitados from "../../assets/Dashboard/N-Rejeitados.png";
import NumeroSolicitados from "../../assets/Dashboard/N-Solicitados.png";
import Sistema from "../../assets/Dashboard/Sistema-atualizado.png";
import SolicitarHistorico from "../../assets/Dashboard/Solicitar - Histórico.png";
import SolicitarReembolso from "../../assets/Dashboard/Solicitar - Reembolso.png";
import NavBar from "../navbar/NavBar.jsx"  //importando a NavBar no Reembolsos

function Rembolsos() {
    const navigate = useNavigate()

    return (
        <div className={styles.body}>
            <NavBar />
            <div className={styles.main}>
                <header>
                    <img className={styles.casa} src={Home} alt="Casinha da header" />
                    <img className={styles.seta} src={Seta} alt="Setinha da header" />
                    <p>Reembolsos</p>
                </header>

                <main className={styles.mainReembolsos}>
                    <h1>Sistema de Reembolsos</h1>
                    <p>
                        Solicite novos pedidos de reembolso, visualize solicitações em análise
                        e todo o histórico.
                    </p>

                    <section className={styles.containerCards}>
                        <article className={styles.card}  onClick={()=>{navigate("/solicitacao")}} > 
                            <img src={SolicitarReembolso} alt="Icone de formulário" />
                            <p>Solicitar Reembolso</p>
                        </article>

                        <article className={styles.card} onClick={()=>{navigate("/pesquisa")}}>
                            <img src={Analises} alt="Icone de listagem" />
                            <p>Verificar análises</p>
                        </article>

                        <article className={styles.card} onClick={()=>{navigate("/historico")}}>
                            <img src={SolicitarHistorico} alt="Icone de histórico" />
                            <p>Histórico</p>
                        </article>
                    </section>

                    <section className={styles.containerDados}>
                        <div>
                            <img className={styles.imgSolicitados} src={NumeroSolicitados} alt="Icone para quantidade de solicitações"/>
                            <p> <span> 182 </span> Solicitados</p>
                        </div>

                        <div>
                            <img className={styles.imgAnalise} src={NumeroAnalises} alt="Icone para quantidade de pedidos em análise" />
                            <p> <span> 74 </span> Em análise</p>
                        </div>

                        <div>
                            <img className={styles.imgAprovados} src={NumeroAprovados} alt="Icone para quantidade de pedidos aprovados" />
                            <p> <span> 195 </span> Aprovados</p>
                        </div>

                        <div>
                            <img className={styles.imgRejeitados} src={NumeroRejeitados} alt="Icone para quantidade de pedidos rejeitados"/>
                            <p> <span> 41 </span> Rejeitados</p>
                        </div>
                    </section>

                    <section className={styles.containerSistema}>
                        <img src={Sistema} alt="Imagem que representa atualização no sistema" />
                        <a href="">Sistema atualizado.</a>
                    </section>
                </main>
            </div>
        </div>
    );
}
export default Rembolsos;
