//-----------------------------------------------
// status_type [Aprovado, Cancelado, Pendente Outros]
function order_status_type(status){
  return `
  case
    when ${status} in ('archived', 'open') then 'Aprovado'
    when ${status} in ('canceled') then 'Cancelado'
    else 'Outros'
  end`; }

//-----------------------------------------------
// paymet.status_type [Confirmado, Cancelado, Pendente, Outros]
function payment_status_type(status){
  return `
  case
    when ${status} in ('approved') then 'Aprovado'
    when ${status} in ('canceled', 'refunded', 'denied', 'expired') then 'Cancelado'
    when ${status} in ('pending') then 'Pendente'
    else 'Outros'
  end`; }


module.exports = {
  order_status_type,
  payment_status_type
};
