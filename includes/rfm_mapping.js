// payment.method [Confirmado, Cancelado, Outros]
function rfm_mapping (rf_score){
  return `
  case
    when ${rf_score} in ('45','55') then 'Campeões'
    when ${rf_score} in ('53','54','43','44') then 'Leais'
    when ${rf_score} in ('51','52') then 'Não posso perdê-los'
    when ${rf_score} in ('41','42','31','32') then 'Leais em risco'
    when ${rf_score} in ('33') then 'Quase dormingo'
    when ${rf_score} in ('24','25','34','35') then 'Potencialmente leais'
    when ${rf_score} in ('11','12','21','22') then 'Hibernando'
    when ${rf_score} in ('13','23') then 'Precisa de atenção'
    when ${rf_score} in ('14') then 'Promissores'
    when ${rf_score} in ('15') then 'Novatos'
    else '-'
  end`; }

module.exports = {
   rfm_mapping
}
