import { useEffect } from "react";
import { useRouter } from "next/navigation";

const useGuard = (shouldRedirect: boolean, destination: string) => {
  const router = useRouter();

  useEffect(() => {
    if (shouldRedirect) {
      router.push(destination);
    }
  }, [shouldRedirect, destination, router]);
};

export default useGuard;
