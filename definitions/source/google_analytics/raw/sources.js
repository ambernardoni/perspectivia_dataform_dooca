/* -------------------------------------------------------------------
NESSE ARQUIVO ESTÃO DECLARADAS TODAS AS ORIGENS DO GOOGLE ANALYTICS
---------------------------------------------------------------------*/

declare({
  schema: dataform.projectConfig.vars.rawDataset,
  name: "raw_ga_custom_sessions",
  description: "Tabela de sessões do Google Analytics, agrupado por dia"
});

declare({
  schema: dataform.projectConfig.vars.rawDataset,
  name: "raw_ga_custom_events",
  description: "Tabela de eventos do Google Analytics, agrupado por dia"
});
