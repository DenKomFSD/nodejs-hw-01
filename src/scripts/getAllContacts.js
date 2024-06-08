import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const allContacts = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(allContacts);
  } catch (error) {
    console.error('Error:', error);
  }
};

console.log(await getAllContacts());
