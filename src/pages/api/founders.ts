/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { google } from "googleapis";
import type { NextApiRequest, NextApiResponse } from "next";

const SubmitRegistration = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (req.method === "GET") {
    try {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.CLIENT_EMAIL,
          client_id: process.env.CLIENT_ID,
          private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
        },
        scopes: [
          "https://www.googleapis.com/auth/drive",
          "https://www.googleapis.com/auth/drive.file",
          "https://www.googleapis.com/auth/spreadsheets",
        ],
      });
      const sheets = google.sheets({
        auth,
        version: "v4",
      });

      const data = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID,

        range: "Founders!A:C",
      });

      res.status(200).json(data.data.values);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err });
    }
  }
};

export default SubmitRegistration;
