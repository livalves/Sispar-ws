import { useState, useEffect } from "react"; 
import styles from "./Historico.module.scss";
import NavBar from "../navbar/NavBar.jsx";
import Home from "../../assets/Dashboard/home header.png";
import Seta from "../../assets/Dashboard/Vector.png";
import Motivo from "../../assets/Solicitacao/motivo.png";
import ModalMotivo from "../motivo/Motivo.jsx"; 
import api from "../../Services/Api.jsx";

function Historico() {

    const [dadosPesquisados, setDadosPesquisados] = useState([]);

    const [modalMotivoAberto, setModalMotivoAberto] = useState(false);
    const [indexMotivoAberto, setIndexMotivoAberto] = useState(null);

    useEffect(() => {
        const fetchHistorico = async () => {
            try {
                const token = localStorage.getItem("token");

                const response = await api.get("/reembolsos/solicitacao/todos", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.data.length === 0) {
                    alert("Nenhum reembolso encontrado.");
                }

                setDadosPesquisados(response.data);
            } catch (error) {
                console.error("Erro ao buscar histórico:", error);
                alert("Não foi possível carregar o histórico de reembolsos. Tente novamente mais tarde.");
            }
        };

        fetchHistorico();
    }, []);

    return (
        <div className={styles.layoutHistorico}>
            <NavBar />

            <div className={styles.containerPrincipalSolicitacao}>
                <header className={styles.headerHistorico}>
                    <img src={Home} alt="Vetor da casinha" />
                    <img src={Seta} alt="Vetor da setinha" />
                    <p> Reembolsos </p>
                    <img src={Seta} alt="Vetor da setinha" />
                    <p> Histórico de Reembolsos </p>
                </header>

                <div className={styles.containerHistorico}>
                    <table>
                        <thead>
                            <tr>
                                <th>Colaborador(a)</th>
                                <th>Empresa</th>
                                <th>Nº Prest.</th>
                                <th>Data</th>
                                <th>Motivo</th>
                                <th>Tipo de despesa</th>
                                <th>Ctr. Custo</th>
                                <th>Ord. Int.</th>
                                <th>Div.</th>
                                <th>PEP</th>
                                <th>Moeda</th>
                                <th>Dist. Km</th>
                                <th>Val. Km</th>
                                <th>Val. Faturado</th>
                                <th>Despesa</th>
                            </tr>
                        </thead>

                        <tbody>
                            {dadosPesquisados.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.colaborador}</td>
                                    <td>{item.empresa}</td>
                                    <td>{item.num_prestacao}</td>
                                    <td>{item.data}</td>

                                    <td>
                                        <button className={styles.btnMotivo} 
                                            onClick={() => {
                                                setIndexMotivoAberto(index); 
                                                setModalMotivoAberto(true);   
                                            }}>
                                            <img src={Motivo} alt="Icone para acesso ao Motivo"/>
                                        </button>
                                    </td>

                                    <td>{item.tipo_reembolso}</td>
                                    <td>{item.centro_custo}</td>
                                    <td>{item.ordem_interna}</td>
                                    <td>{item.divisao}</td>
                                    <td>{item.pep}</td>
                                    <td>{item.moeda}</td>
                                    <td>{item.distancia_km}</td>
                                    <td>{item.valor_km}</td>
                                    <td>{item.valor_faturado}</td>
                                    <td>{item.despesa}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <ModalMotivo
                    isOpen={modalMotivoAberto}
                    texto={dadosPesquisados[indexMotivoAberto]?.descricao || "Sem motivo informado."}
                    onClose={() => {
                        setModalMotivoAberto(false);
                        setIndexMotivoAberto(null);
                    }}
                />
            </div>
        </div>
    );
}

export default Historico;