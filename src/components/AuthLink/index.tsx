import Link, { LinkProps } from "next/link";

type AuthLinkProps = LinkProps & {
  children?: React.ReactNode;
};

export function AuthLink({ children, ...props }: AuthLinkProps) {
  return (
    <Link {...props} className="text-cyan-600 underline hover:text-cyan-800">
      {children}
    </Link>
  );
}
