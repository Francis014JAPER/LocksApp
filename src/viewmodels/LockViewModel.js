import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import Lock from '../models/Lock';

class LockViewModel {
  locks = [];
  baseUrl = 'http://localhost:3000/api/locks';

  constructor() {
    makeAutoObservable(this);
  }

  async fetchLocks() {
    try {
      const response = await axios.get(this.baseUrl);
      this.locks = response.data.map(lock => new Lock(lock._id, lock.name, lock.photo, lock.isActive));
    } catch (error) {
      console.error('Error fetching locks:', error);
    }
  }

  async addLock(lock) {
    try {
      const response = await axios.post(this.baseUrl, lock);
      this.locks.push(new Lock(response.data._id, response.data.name, response.data.photo, response.data.isActive));
    } catch (error) {
      console.error('Error adding lock:', error);
    }
  }

  async updateLock(lock) {
    try {
      await axios.put(`${this.baseUrl}/${lock.id}`, lock);
      this.fetchLocks();
    } catch (error) {
      console.error('Error updating lock:', error);
    }
  }

  async deleteLock(id) {
    try {
      await axios.delete(`${this.baseUrl}/${id}`);
      this.fetchLocks();
    } catch (error) {
      console.error('Error deleting lock:', error);
    }
  }
}

const lockViewModel = new LockViewModel();
export default lockViewModel;
