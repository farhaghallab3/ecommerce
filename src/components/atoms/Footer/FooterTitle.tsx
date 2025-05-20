interface FooterTitleProps {
  title: string;
}

export const FooterTitle = ({ title }: FooterTitleProps) => (
  <h4 className="flex text-base font-semibold mb-2 text-gray-800">{title}</h4>
);
