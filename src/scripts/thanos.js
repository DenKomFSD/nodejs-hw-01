import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  let contactsArr;
  try {
    const curContacts = await fs.readFile(PATH_DB, 'utf-8');
    contactsArr = JSON.parse(curContacts);
    contactsArr = contactsArr.filter(() => Math.random() > 0.5);
    await fs.writeFile(PATH_DB, JSON.stringify(contactsArr, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error:', error);
  }
};

await thanos();
