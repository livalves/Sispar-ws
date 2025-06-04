import { useState } from "react"; 
import styles from "./Analises.module.scss";
import NavBar from "../navbar/NavBar.jsx";
import Home from "../../assets/Dashboard/home header.png";
import Seta from "../../assets/Dashboard/Vector.png";
import Motivo from "../../assets/Solicitacao/motivo.png";
import ModalMotivo from "../motivo/Motivo.jsx"; 
import api from "../../Services/Api.jsx";

function Analises() {

    const [numPrestacao, setNumPrestacao] = useState("");
    const [dadosPesquisados, setDadosPesquisados] = useState([]);

    const [modalMotivoAberto, setModalMotivoAberto] = useState(false);
    const [indexMotivoAberto, setIndexMotivoAberto] = useState(null);

    const handleBuscar = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            alert("Token de autenticação não encontrado. Por favor, faça login novamente.");
            return;
        }

        try {
            const response = await api.get(`/reembolsos/solicitacao/${numPrestacao}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.data.length === 0) {
                alert("Nenhum reembolso encontrado com esse número de prestação de contas.");
            }

            setDadosPesquisados(response.data);
            } catch (error) {
                console.error("Erro na busca:", error);
                alert("Solicitação de reembolso não encontrada!");
            }
    };

    return (
        <div className={styles.layoutAnalises}>
            <NavBar />

            <div className={styles.containerPrincipalSolicitacao}>
                <header className={styles.headerAnalises}>
                    <img src={Home} alt="Vetor da casinha" />
                    <img src={Seta} alt="Vetor da setinha" />
                    <p> Reembolsos </p>
                    <img src={Seta} alt="Vetor da setinha" />
                    <p> Consulta de Reembolsos </p>
                </header>

                <div className={styles.containerBusca}>
                    <input
                        type="number"
                        placeholder="Informe o número de prestação de contas"
                        value={numPrestacao}
                        onChange={(e) => setNumPrestacao(e.target.value)}
                    />
                    <button onClick={handleBuscar}>Pesquisar</button>
                </div>

                <div className={styles.containerAnalises}>
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

export default Analises;