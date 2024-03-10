//-----------------------------------------------
// status_type [Aprovado, Cancelado, Pendente Outros]
function order_status_type(status){
  return `
  case
    when ${status} in ('closed') then 'Aprovado'
    when ${status} in ('cancelled') then 'Cancelado'
    when ${status} in ('open') then 'Pendente'
    else 'Outros'
  end`; }
// O que fazer com "Aguradando pagamento"?


//-----------------------------------------------
// paymet.status_type [Confirmado, Cancelado, Pendente, Outros]
function payment_status_type(status){
  return `
  case
    when ${status} in ('paid') then 'Aprovado'
    when ${status} in ('refunded') then 'Cancelado'
    when ${status} in ('pending') then 'Pendente'
    else 'Outros'
  end`; }


module.exports = {
  order_status_type, 
  payment_status_type
};
