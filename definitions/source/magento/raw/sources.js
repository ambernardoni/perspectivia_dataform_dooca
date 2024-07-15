/* -------------------------------------------------------------------
NESSE ARQUIVO ESTÃO DECLARADAS TODAS AS ORIGENS DA PLATAFORMA DOOCA
---------------------------------------------------------------------*/

declare({
  schema: dataform.projectConfig.vars.rawDataset,
  name: "raw_magento_Categories",
  description: "Tabela de categorias da plataforma Magento"
});

declare({
  schema: dataform.projectConfig.vars.rawDataset,
  name: "raw_magento_Orders",
  description: "Tabela de pedidos da plataforma Magneto"
});

declare({
  schema: dataform.projectConfig.vars.rawDataset,
  name: "raw_magento_Products",
  description: "Tabela de produtos da plataforma Magento"
});