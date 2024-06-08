import { PATH_DB } from "../constants/contacts.js";
import fs from "fs/promises";
import { createFakeContact } from "../utils/createFakeContact.js";

const generateContacts = async (number) => {
  let contacts = [];
  try {
    //read existing contacts
    const data = await fs.readFile(PATH_DB, "utf-8");
    const contacts = JSON.parse(data);

    //generate new contacts
  } catch (error) {}
};

await generateContacts(5);
