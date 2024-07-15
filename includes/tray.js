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

/*
A ENVIAR VINDI             Pendente
AGUARDANDO PAGAMENTO       Pendente
AGUARDANDO VINDI           Pendente
CANCELADO                  Cancelado
CANCELADO AUT              Cancelado
ENVIADO                    Aprovado
FINALIZADO                 Aprovado
PROBLEMAS NA ENTREGA       Aprovado
*/

//-----------------------------------------------
// status_type [Aprovado, Cancelado, Pendente Outros]
function order_status_type(status){
  return `
  CASE 
    WHEN REGEXP_CONTAINS(${status}, r'(AGUARDANDO|A ENVIAR)') THEN 'Pendente'
    WHEN REGEXP_CONTAINS(${status}, r'(CANCELADO)') THEN 'Cancelado'
    WHEN REGEXP_CONTAINS(${status}, r'(ENVIADO|FINALIZADO|PROBLEMAS NA ENTREGA)') THEN 'Aprovado'
    ELSE 'Outros'  -- Optional: to categorize any other statuses
  END`; }

//-----------------------------------------------
// paymet.status_type [Confirmado, Cancelado, Pendente, Outros]
// a Tray não tem fácil o estado do pagamento. Usaremos o estado do pedido, usamos o mesmo status acima
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

