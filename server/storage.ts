import { users, type User, type InsertUser, type WaitlistEmail, type InsertWaitlistEmail } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  addWaitlistEmail(email: InsertWaitlistEmail): Promise<WaitlistEmail>;
  getWaitlistEmails(): Promise<WaitlistEmail[]>;
  isEmailInWaitlist(email: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private waitlistEmails: Map<number, WaitlistEmail>;
  private emailSet: Set<string>;
  currentId: number;
  waitlistCurrentId: number;

  constructor() {
    this.users = new Map();
    this.waitlistEmails = new Map();
    this.emailSet = new Set();
    this.currentId = 1;
    this.waitlistCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async addWaitlistEmail(insertEmail: InsertWaitlistEmail): Promise<WaitlistEmail> {
    if (this.emailSet.has(insertEmail.email)) {
      throw new Error("Email already exists in waitlist");
    }
    
    const id = this.waitlistCurrentId++;
    const waitlistEmail: WaitlistEmail = { 
      ...insertEmail, 
      id, 
      createdAt: new Date() 
    };
    
    this.waitlistEmails.set(id, waitlistEmail);
    this.emailSet.add(insertEmail.email);
    return waitlistEmail;
  }

  async getWaitlistEmails(): Promise<WaitlistEmail[]> {
    return Array.from(this.waitlistEmails.values());
  }

  async isEmailInWaitlist(email: string): Promise<boolean> {
    return this.emailSet.has(email);
  }
}

export const storage = new MemStorage();
