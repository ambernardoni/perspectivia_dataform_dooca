
// status_type [Confirmado, Cancelado, Outros]
function status_type_group(status){
  return `
  case
    when ${status} in ('Liberado Financeiro', 'Na Expedição', 'Nota Fiscal Emitida', 'Pedido Entregue') then 'Confirmado'
    when ${status} in ('O pagamento não foi finalizado', 'Pedido cancelado', 'Problema no Boleto', 'Problemas com o Cartão') then 'Cancelado'
    else 'Outros'
  end`; }
// O que fazer com "Aguradando pagamento"?

module.exports = {
  status_type_group
};
