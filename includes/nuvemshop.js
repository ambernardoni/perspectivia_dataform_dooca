// status_type [Confirmado, Cancelado, Outros]
function status_type_group(status){
  return `
  case
    when ${status} in ('closed') then 'Confirmado'
    when ${status} in ('cancelled') then 'Cancelado'
    when ${status} in ('open') then 'Aberto'
    else 'Outros'
  end`; }
// O que fazer com "Aguradando pagamento"?

module.exports = {
  status_type_group
};
