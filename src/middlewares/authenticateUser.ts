import { Request, Response, NextFunction } from "express";
//import { admin } from "../firebase"; // firebase admin
import { prisma } from "../prisma/client";

export const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Token requerido" });
    }

    const token = authHeader.split(" ")[1];

    //verificar token con Firebase
    //const decodedToken = await admin.auth().verifyIdToken(token);

    //const firebaseUid = decodedToken.uid;

    // Buscar usuario en Postgres
    // const user = await prisma.users.findUnique({
    //   //where: { firebase_uid: firebaseUid }
    // });

    // if (!user) {
    //   return res.status(404).json({ error: "Usuario no encontrado" });
    // }

    // // Inyectar usuario en request
    // req.user = user;

    // next();

  } catch (error) {
    return res.status(401).json({ error: "Token inválido" });
  }
};