// src/viewModels/LocksViewModel.js
import { Locks } from '../models/Locks';
import { Lock } from '../models/Lock';

class LocksViewModel {
  constructor() {
    this.locks = new Locks();
  }

  async registerLock(lock) {
    await this.locks.registerLock(lock);
  }

  async editLock(id, updatedLock) {
    await this.locks.editLock(id, updatedLock);
  }

  async deleteLock(id) {
    await this.locks.deleteLock(id);
  }

  async getLocks() {
    return this.locks.getLocks();
  }

  async getLock(id) {
    return this.locks.getLock(id);
  }
}

export default LocksViewModel;