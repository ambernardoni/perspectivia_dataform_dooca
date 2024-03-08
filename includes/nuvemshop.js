//-----------------------------------------------
// status_type [Confirmado, Cancelado, Outros]
function order_status_type(status){
  return `
  case
    when ${status} in ('closed') then 'Confirmado'
    when ${status} in ('cancelled') then 'Cancelado'
    when ${status} in ('open') then 'Pendente'
    else 'Outros'
  end`; }
// O que fazer com "Aguradando pagamento"?


//-----------------------------------------------
// status_type [Confirmado, Cancelado, Pendente, Outros]
function payment_status_type(status){
  return `
  case
    when ${status} in ('paid') then 'Confirmado'
    when ${status} in ('refunded') then 'Cancelado'
    when ${status} in ('pending') then 'Pendente'
    else 'Outros'
  end`; }


module.exports = {
  order_status_type, 
  payment_status_type
};
