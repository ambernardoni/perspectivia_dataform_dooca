//-----------------------------------------------
// status_type [Confirmado, Cancelado, Outros]
function order_status_type(status){
  return `
  case
    when ${status} in ('Liberado Financeiro', 'Na Expedição', 'Nota Fiscal Emitida', 'Pedido Entregue') then 'Confirmado'
    when ${status} in ('O pagamento não foi finalizado', 'Pedido cancelado', 'Problema no Boleto', 'Problemas com o Cartão') then 'Cancelado'
    when ${status} in ('Aguardando Pagamento') then 'Pendente'
    else 'Outros'
  end`; }
// O que fazer com "Aguradando pagamento"?

//-----------------------------------------------
// payment_status_type [Confirmado, Cancelado, Pendente, Outros]
function payment_status_type(status){
  return `
  case
    when ${status} in ('Autorizado', 'Capturado/Confirmado') then 'Confirmado'
    when ${status} in ('Erro', 'Cancelado') then 'Cancelado'
    else 'Outros'
  end`; }



module.exports = {
  order_status_type,
  payment_status_type
};
