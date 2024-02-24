const contentful = require("contentful");
async function getMainContent() {
  console.log(process);
  const client = contentful?.createClient({
    space: "",
    accessToken: "",
  });
  const res = await client.getEntries({ content_type: "recipe" });
  return res.items;
}

export default getMainContent;
