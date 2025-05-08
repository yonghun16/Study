import { useOutletContext } from "react-router-dom";

interface MyOutletContextType {
  nameOfMyUser: string;
}

function Followers() {
  const { nameOfMyUser } = useOutletContext<MyOutletContextType>();
  return <h1>Here are {nameOfMyUser}의 Followers</h1>;
}

export default Followers;
