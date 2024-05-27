"use server";

import { Client, Account, Databases, Users } from "node-appwrite";
import { cookies } from "next/headers";
///So, basically, 2 different clients are created to talk with and interact with the Appwrite backend. 
///One client is a user client and the other client is the administrative client. 
//How it works is that user client is given information about the currently logged in user to go an talk with
//and interact with Appwrite. 
export async function createSessionClient() {
    //So bascially, how this works is that we have a user come into our app. And then, the user logs in, and then we create a client for the user to go and interact with appwrite. we have to pass in the user credentails for them to go and interact iht appwrite 
    //Bacsically, tells where the client it should look for 
    const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);
  const session = cookies().get("appwrite-session");

  if (!session || !session.value) {
    throw new Error("No session");
  }
 
  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}

///Admin client is bascially given adminstrative privelges to go and interact with Appwrite. 
export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    .setKey(process.env.NEXT_APPWRITE_KEY!);

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
    get user() {
      return new Users(client);
    }
  };
}
