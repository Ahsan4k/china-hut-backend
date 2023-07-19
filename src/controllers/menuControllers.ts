import { Request, Response } from "express";
import * as admin from "firebase-admin";
const credentials = require("../../key.json");

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const db = admin.firestore();

interface MenuItem {
    id:string;
    name: string;
    price: string;
    description?: string;
  }

const MenuCreate = async (req: Request, res: Response) => {
    try {
        const { id,name, price, description } = req.body;
      const menu :MenuItem= {
        id,
        name,
        price,
        description,
      };
      const docRef = await db.collection("menu").doc(); // Auto-generate ID
      await docRef.set(menu);
  
      res.send("Menu data added successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };
  

const MenuUpdate = async (req: Request, res: Response) => {
    try {
      const { id,name, price, description } = req.body;
      const menu :MenuItem= {
        id,
        name,
        price,
        description,
      };
  
      const docRef = db.collection("menu").doc(id);
      await docRef.update(menu as admin.firestore.DocumentData);
  
      res.send("Menu data updated successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };

  const MenuDelete = async (req: Request, res: Response) => {
    try {
      const id = req.params.id; 
  
      const docRef = db.collection("menu").doc(id);
      const doc = await docRef.get();
      if (!doc.exists) {
        return res.status(404).send("Menu item not found.");
      }
  
      await docRef.delete();
  
      res.send("Menu data deleted successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };

module.exports = {
    MenuCreate,
    MenuUpdate,
    MenuDelete
  };