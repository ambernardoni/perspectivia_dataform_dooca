/* -------------------------------------------------------------------
NESSE ARQUIVO ESTÃO DECLARADAS TODAS AS ORIGENS DA PLATAFORMA NUVEMSHOP
---------------------------------------------------------------------*/


declare({
  schema: dataform.projectConfig.vars.rawDataset,
  name: "raw_wake_Categories",
  description: "Tabela de categorias da plataforma Nuvemshop"
});

declare({
  schema: dataform.projectConfig.vars.rawDataset,
  name: "raw_wake_Orders",
  description: "Tabela de pedidos da plataforma Nuvemshop"
});

declare({
  schema: dataform.projectConfig.vars.rawDataset,
  name: "raw_wake_Products",
  description: "Tabela de produtos da plataforma Dooca"
});