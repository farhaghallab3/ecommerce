
import FooterNewsletter from './FooterNewsletter';
import FooterMainContent from './FooterMainContent';
import FooterCopyright from './FooterCopyright';

export const Footer: React.FC = () => {
  return (
    <footer >
      <FooterNewsletter />
      <FooterMainContent />
      <FooterCopyright />
    </footer>
  );
};