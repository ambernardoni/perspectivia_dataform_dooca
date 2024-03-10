//-----------------------------------------------
// status_type [Aprovado, Cancelado, Pendente Outros]
function order_status_type(status){
  return `
  case
    when ${status} in ('Liberado Financeiro', 'Na Expedição', 'Nota Fiscal Emitida', 'Pedido Entregue', 'Disponível para retirada', 'Em Transporte') then 'Aprovado'

    when ${status} in ('O pagamento não foi finalizado', 'Pedido cancelado', 'Problema no Boleto', 
      'Problemas com o Cartão', 'Cancelamento Confirmado', 'Pedido Estornado Boleto', 'Pedido Estornado Cartão') then 'Cancelado'
    when ${status} in ('Aguardando Pagamento', 'Transação em Andamento') then 'Pendente'
    else 'Outros'
  end`; }
// O que fazer com "Aguradando pagamento"?

//-----------------------------------------------
// paymet.status_type [Confirmado, Cancelado, Pendente, Outros]
function payment_status_type(status){
  return `
  case
    when ${status} in ('Autorizado', 'Capturado/Confirmado') then 'Aprovado'
    when ${status} in ('Erro', 'Cancelado') then 'Cancelado'
    else 'Outros'
  end`; }



module.exports = {
  order_status_type,
  payment_status_type
};
