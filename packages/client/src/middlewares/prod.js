export default function createProdMiddlewares({
  apolloClient
}) {
  return [
    apolloClient.middleware()
  ];
}
