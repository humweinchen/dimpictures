import { useRouter } from "next/router";
import { useEffect } from "react";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    void router.replace("/home");
  }, [router]);
  return <></>;
};

export default Index;
