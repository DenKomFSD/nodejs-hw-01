import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const existContacts = await fs.readFile(PATH_DB, 'utf-8');
    const allContacts = JSON.parse(existContacts);

    for (let i = 0; i < number; i++) {
      allContacts.push(createFakeContact());
    }

    //write to array
    await fs.writeFile(PATH_DB, JSON.stringify(allContacts), 'utf-8');
  } catch (error) {
    console.error('Error:', error);
  }
};

await generateContacts(5);
