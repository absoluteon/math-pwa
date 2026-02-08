import Dexie, { Table } from 'dexie';
import { UserProgressDB } from '../models/UserProgress';

export class MathAppDB extends Dexie {
  userProgress!: Table<UserProgressDB, string>;

  constructor() {
    super('MathAppDB');
    this.version(1).stores({
      userProgress: 'id',
    });
  }
}

export const db = new MathAppDB();
