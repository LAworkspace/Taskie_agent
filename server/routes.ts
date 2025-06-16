import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistEmailSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist email routes
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistEmailSchema.parse(req.body);
      
      // Check if email already exists
      const exists = await storage.isEmailInWaitlist(validatedData.email);
      if (exists) {
        return res.status(409).json({ 
          error: "Email already registered for waitlist" 
        });
      }
      
      const waitlistEmail = await storage.addWaitlistEmail(validatedData);
      console.log(`New waitlist signup: ${waitlistEmail.email}`);
      
      res.status(201).json({ 
        message: "Successfully joined waitlist",
        email: waitlistEmail.email 
      });
    } catch (error: any) {
      console.log(`Waitlist signup error: ${error.message}`);
      res.status(400).json({ 
        error: error.message || "Invalid email format" 
      });
    }
  });

  app.get("/api/waitlist", async (req, res) => {
    try {
      const emails = await storage.getWaitlistEmails();
      res.json({ 
        emails,
        count: emails.length 
      });
    } catch (error: any) {
      console.log(`Get waitlist error: ${error.message}`);
      res.status(500).json({ 
        error: "Failed to retrieve waitlist" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
