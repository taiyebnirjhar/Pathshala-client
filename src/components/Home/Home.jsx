import React, { useContext } from "react";
import { AuthContext } from "../../contexts/FirebaseContext";
import AltHero from "../childComponents/AltHero";

function Home() {
  const { navToggler } = useContext(AuthContext);
  return <>{!navToggler && <AltHero />}</>;
}

export default Home;
