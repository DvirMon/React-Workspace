import useGuard from "@/hooks/useGuard";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface RouteGuardProps {
  children: React.ReactNode;
  useGuardState: () => boolean;
  navigate: (isRoute: boolean, router: AppRouterInstance) => void;
}


export default function RouteGuard({
  children,
  shouldRedirect,
  destination,
  shouldRender = true,
}: {
  children: React.ReactNode;
  shouldRedirect: boolean;
  destination: string;
  shouldRender?: boolean;
}) {
  useGuard(shouldRedirect, destination);

  if (shouldRender) {
    return <>{children}</>;
  }
}
