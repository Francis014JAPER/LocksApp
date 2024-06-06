// src/models/Locks.js
class Locks {
    constructor() {
      this.locks = [];
    }
  
    async registerLock(lock) {
      this.locks.push(lock);
    }
  
    async editLock(id, updatedLock) {
      const index = this.locks.findIndex((lock) => lock.id === id);
      if (index !== -1) {
        this.locks[index] = updatedLock;
      }
    }
  
    async deleteLock(id) {
      this.locks = this.locks.filter((lock) => lock.id !== id);
    }
  
    async getLocks() {
      return this.locks;
    }
  
    async getLock(id) {
      return this.locks.find((lock) => lock.id === id);
    }
  }
  
  export default Locks;