import { useEffect, useState } from "react";
import AllTopics from "./AllTopics";

export default function NavBar() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  });

  if (isLoading) {
    return <p>DUCK DUCK WAIT! IT'S STILL LOADING!</p>;
  } else {
    return <AllTopics />;
  }
}
