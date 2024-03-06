//-----------------------------------------------
// status_type [Confirmado, Cancelado, Outros]
function order_status_type(status){
  return `
  case
    when ${status} in ('open') then 'Confirmado'
    when ${status} in ('canceled', 'archived') then 'Cancelado'
    else 'Outros'
  end`; }

//-----------------------------------------------
// payment_status_type [Confirmado, Cancelado, Pendente, Outros]
function payment_status_type(status){
  return `
  case
    when ${status} in ('approved') then 'Confirmado'
    when ${status} in ('canceled', 'refunded', 'denied', 'expired') then 'Cancelado'
    when ${status} in ('pending') then 'Pendente'
    else 'Outros'
  end`; }


module.exports = {
  order_status_type,
  payment_status_type
};
