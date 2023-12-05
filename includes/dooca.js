
// status_type [Confirmado, Cancelado, Outros]
function status_type_group(status){
  return `
  case
    when ${status} in ('open') then 'Confirmado'
    when ${status} in ('canceled', 'archived') then 'Cancelado'
    else 'Outros'
  end`; }


// payment.method DEPRECATED - Não mais usado
function payment_method_group(method){
  return `
  case
    when ${method} in ('pix') then 'Pix'
    when ${method} in ('paypal') then 'Paypal'
    when ${method} in ('marketplace') then 'Marketplace'
    when ${method} in ('billet') then 'Boleto'
    when ${method} in ('creditcard') then 'Cartão de crédito'
    when ${method} in ('app') then 'Aplicativo'
    else 'Outros'
  end`; }

module.exports = {
  status_type_group
};
