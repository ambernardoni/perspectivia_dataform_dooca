
// Essa informação é usada para definir o status geral do pedido na tabelas orders (orders.sqlx)
// rowConditions: [
//        'status_type IN ("Aprovado", "Cancelado", "Pendente", "Outros")',
//        'payment.status_type IN ("Aprovado", "Cancelado", "Pendente", "Outros")',
//        'status_type_category IN ("Aprovado", "Cancelado", "Pendente")'
// ]
// SQL
//    WHEN payment.status_type = "Cancelado" OR status_type = "Cancelado" THEN "Cancelado"
//    WHEN payment.status_type = "Aprovado" AND status_type <> "Cancelado" THEN "Aprovado"
//    ELSE "Pendente" 

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
