import { useEffect } from "react";
import { useRouter } from "next/router";

const useGuard = (
  condition: () => boolean,
  destination: string
) => {
  const router = useRouter();
  const shouldRedirect = condition();

  useEffect(() => {
    if (shouldRedirect) {
      router.push(destination);
    }
  }, [shouldRedirect, destination, router]);
};

export default useGuard;
