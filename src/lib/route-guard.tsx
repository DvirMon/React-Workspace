import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface RouteGuardProps {
  children: React.ReactNode;
  shouldRedirect: boolean;
  destination: string;
  shouldRender?: boolean;
}

export default function RouteGuard({
  children,
  shouldRedirect,
  destination,
  shouldRender = true,
}: RouteGuardProps) {
  useGuard(shouldRedirect, destination);

  if (shouldRender) {
    return <>{children}</>;
  }
}

const useGuard = (shouldRedirect: boolean, destination: string) => {
  const router = useRouter();

  useEffect(() => {
    if (shouldRedirect) {
      router.push(destination);
    }
  }, [shouldRedirect, destination, router]);
};
