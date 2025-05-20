interface FooterLinkProps {
  label: string;
  href?: string;
}

export const FooterLink = ({ label, href = "#" }: FooterLinkProps) => (
  <a href={href} className="text-sm text-gray-600 hover:text-black block mb-1">
    {label}
  </a>
);
