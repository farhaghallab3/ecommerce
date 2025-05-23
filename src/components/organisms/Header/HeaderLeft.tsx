import { Logo } from "../../atoms/Logo/Logo";
import { LocationDelivery } from "../../molecules/LocationDelivery/LocationDelivery";


export const HeaderLeft = () => (
  <div className="flex items-center gap-6 flex-shrink-0">
    <Logo />
    <div className="hidden md:block">
      <LocationDelivery />
    </div>
  </div>
);
