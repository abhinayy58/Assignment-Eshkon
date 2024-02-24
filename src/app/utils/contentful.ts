const contentful = require("contentful");
async function getMainContent() {
  console.log(process);
  const client = contentful?.createClient({
    space: "n4ad43kfbr1v",
    accessToken: "VaE1YE_OcpRAdoyYt4C0pousHJo9f9A_hGZI0et3z5s",
  });
  const res = await client.getEntries({ content_type: "recipe" });
  return res.items;
}

export default getMainContent;
