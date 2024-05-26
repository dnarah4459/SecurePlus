"use server";
///Going to be usnig appwrite for this
export const signIn = async () => {
  try {
    //Mutations / Database / Make fetch
  } catch (error) {}
};

export const signUp = async (userData: SignUpParams) => {
  try {
    //Mutations / Database / Make fetch
  } catch (error) {}
};



export async function getLoggedInUser() {
    try {
        return await account.get(); 

    
    } catch (error) {
        return null 
    }
}git push -u origin main
