import { Receipt } from 'phosphor-react';

const TransactionVoucher = () => {
  return (
    <div>
      <div>
        <Receipt />
        <h2>Comprovante de transação</h2>
      </div>
      <div>
        <h2>Tipo: Transferência - Enviada</h2>
        <p>Data: {new Date().toLocaleDateString()}</p>
        <h2>Dados de destino:</h2>
        <p>Nome: João</p>
        <p>Agência: 1256-7</p>
        <p>Conta: 12345-6</p>
        <p>Valor: - R$ 100,00</p>
      </div>

    </div>
  );
};

export default TransactionVoucher;
