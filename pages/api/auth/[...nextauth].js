import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials"

const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name:"Credentials",
      async authorize(credentials,req){

        const result = await prisma.User.findUnique({
          where:{
           email:credentials.email
          }
        })
        if(!result){
          throw new Error("No user with this email found")
        }

        return result;
      }
    })
    
  ],
});

