import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const existingContacts = JSON.parse(data);

    existingContacts.push(createFakeContact());

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(existingContacts, null, 2),
      'utf-8',
    );
  } catch (error) {
    console.error('Error:', error);
  }
};

await addOneContact();
