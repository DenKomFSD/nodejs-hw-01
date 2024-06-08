import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    const deletedContacts = [];
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(deletedContacts, null, 2),
      'utf-8',
    );
  } catch (error) {
    console.error('Error:', error);
  }
};

await removeAllContacts();
