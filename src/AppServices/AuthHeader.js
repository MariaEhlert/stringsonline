export const authHeader = () => {
  //henter localstorage hvis den eksisterer
  //conditional ternary operator
  const currentToken = sessionStorage.getItem("token") ? JSON.parse(sessionStorage.getItem("token")) : "";
  // returner token hvis den eksister
  if (currentToken) {
    return {
      //* er en asterisk
      //gør at alle api og domæner kan tilgå det (undgå korsfejl)
      //skal stå i gåseøjne fordi der er bindestreg ellers minuser den
      "Access-Control-Allow-Origin": "*",
      "Authorization": `Bearer ${currentToken.access_token}`,
    };
    // ellers returner den ikke noget
  } else {
    return {};
  }
}