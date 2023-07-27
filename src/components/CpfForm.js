import React, { useState } from 'react';

const CpfForm = () => {
    const [cnpj, setCnpj] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');
    const [input5, setInput5] = useState('');

    const handleSubmit = async (url, tipochamada) => {
        try {
            debugger;

            const xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    console.log(this.responseText);

                    const formattedData = JSON.stringify(this.responseText, null, 2);
                    document.getElementById('resultado').innerText = formattedData;
                }
            });

            switch (tipochamada) {
                case "get":
                    xhr.open("GET", url);
                    xhr.setRequestHeader("accept", "text/plain");
                    xhr.send();
                    break;

                case "put":
                    const data = JSON.stringify({
                        "id": 0,
                        "cnpj": "string",
                        "resultado": "string"
                    });

                    xhr.open("PUT", url);
                    xhr.setRequestHeader("accept", "*/*");
                    xhr.setRequestHeader("Content-Type", "application/json");
                    xhr.send(data);
                    break;

                case "delete":
                    xhr.open("DELETE", url);
                    xhr.setRequestHeader("accept", "*/*");
                    xhr.send();
                    break;

                default:
                    console.error("Tipo de chamada inválido!");
            }
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    return (
        <div className="container">
            <h2>Api Retorna Dados Serasa e Insere na Base</h2>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="cnpj"
                    value={cnpj}
                    onChange={(e) => setCnpj(e.target.value)}
                />
                <button
                    type="button"
                    className="btn btn-primary mt-2"
                    onClick={() => handleSubmit(`https://localhost:44370/api/Pedidos/${cnpj}`,"put")}
                >
                    Enviar CPF
                </button>
            </div>
            <h2>Api Deleta Pedido por Id</h2>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="id "
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                />
                <button
                    type="button"
                    className="btn btn-primary mt-2"
                    onClick={() => handleSubmit(`https://localhost:44370/api/Pedidos/${input2}`, "delete")}
                >
                    Deletar Por id 
                </button>
            </div>
            <h2>Api altera ou atualiza Pedido</h2>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder='{"id": 0, "cnpj": "string", "resultado": "string"}'
                    value={input3}
                    onChange={(e) => setInput3(e.target.value)}
                />
                <button
                    type="button"
                    className="btn btn-primary mt-2"
                    onClick={() => handleSubmit(`https://sua-api.com/requisicao3/${input3}`)}
                >
                    Enviar Post
                </button>
            </div>
            <h2>Api Retorna Pedido Por Id</h2>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="id"
                    value={input4}
                    onChange={(e) => setInput4(e.target.value)}
                />
                <button
                    type="button"
                    className="btn btn-primary mt-2"
                    onClick={() => handleSubmit(`https://localhost:44370/api/Pedidos/${input4}`,"get")}
                >
                    Retorna por Id
                </button>
            </div>
            <h2>Api Retorna Pedido Por Cpnj</h2>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="cnpj"
                    value={input5}
                    onChange={(e) => setInput5(e.target.value)}
                />
                <button
                    type="button"
                    className="btn btn-primary mt-2"
                    onClick={() => handleSubmit(`https://localhost:44370/api/Pedidos/PedidosPorCnpj?cnpj=${input5}`, "get")}
                >
                    Retorna  Pedido por Cnpj
                </button>
            </div>
            <h2>Retorna Todos os Pedidos</h2>
            <div className="mb-3">
                <button
                    type="button"
                    className="btn btn-primary mt-2"
                    onClick={() => handleSubmit(`https://localhost:44370/api/Pedidos`,"get")}
                >
                  Retorna os Pedidos
                </button>
            </div>
            <div>
                <h1 >Resultado da Requisicao:</h1>
                <pre id="resultado"></pre>
            </div>
        </div>
    );
};

export default CpfForm;
