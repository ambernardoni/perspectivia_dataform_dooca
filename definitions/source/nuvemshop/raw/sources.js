/* -------------------------------------------------------------------
NESSE ARQUIVO ESTÃO DECLARADAS TODAS AS ORIGENS DA PLATAFORMA NUVEMSHOP
---------------------------------------------------------------------*/


declare({
  schema: dataform.projectConfig.vars.rawDataset,
  name: "raw_nuvemshop_Categories",
  description: "Tabela de categorias da plataforma Nuvemshop"
});

declare({
  schema: dataform.projectConfig.vars.rawDataset,
  name: "raw_nuvemshop_Orders",
  description: "Tabela de pedidos da plataforma Nuvemshop"
});

declare({
  schema: dataform.projectConfig.vars.rawDataset,
  name: "raw_nuvemshop_Orders_hist",
  description: "Tabela de pedidos históricos da plataforma Nuvemshop"
});

declare({
  schema: dataform.projectConfig.vars.rawDataset,
  name: "raw_nuvemshop_Products",
  description: "Tabela de produtos da plataforma Dooca"
});