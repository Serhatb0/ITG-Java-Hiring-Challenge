import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function useUserId() {
  const { data: session } = useSession();

  let userId = null;

  useEffect(() => {
    userId = session?.userId;
  }, [session]);

  return userId;
}
