import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface RouteGuardProps {
  children: React.ReactNode;
  useGuardState: () => boolean;
  navigate: (isRoute: boolean, router: AppRouterInstance) => void;
}

export default function RouteGuard({
  children,
  useGuardState,
  navigate,
}: RouteGuardProps) {
  const router = useRouter();
  const isRoute = useGuardState();

  useEffect(() => {
    navigate(isRoute, router);
  }, [router, isRoute]);

  if (isRoute) {
    return <>{children}</>;
  }
}
