import { FooterLink } from "../../atoms/Footer/FooterLink";
import { FooterTitle } from "../../atoms/Footer/FooterTitle";


interface FooterColumnProps {
  title: string;
  links: string[];
}

export const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div>
    
    <FooterTitle title={title} />
    {links.map((link, i) => (
      <FooterLink key={i} label={link} />
    ))}
  </div>
);
