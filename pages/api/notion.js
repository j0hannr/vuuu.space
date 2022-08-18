const { Client } = require("@notionhq/client");
// https://developers.notion.com/docs/getting-started

export default async function handler(req, res) {
  const { email } = req.body;

  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const response = await notion.pages.create({
    parent: {
      database_id: process.env.NOTION_DATABASE_ID,
    },
    properties: {
      title: {
        title: [
          {
            text: {
              content: email,
            },
          },
        ],
      },
    },
  });

  // error handler
  if (response.statusCode >= 400) {
    return res.status(response.statusCode).json({
      error: {
        message: response.body,
      },
    });
  }
  // success response
  res.status(200).json({ status: "ok", response: response });
}
