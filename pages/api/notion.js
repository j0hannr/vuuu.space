const { Client } = require("@notionhq/client");
// https://developers.notion.com/docs/getting-started

export default async function handler(req, res) {
  const { email } = req.body;

  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  (async () => {
    const response = await notion.pages.create({
      parent: {
        database_id: "842596af9fdf495bab104d364cc670a4"
      },
      properties: {
        title: {
          title: [
            {
              text: {
                content: email
              }
            }
          ]
        }
      }
    });
    console.log(response);
  })();

  res.status(200).json({ status: "ok" });
}
