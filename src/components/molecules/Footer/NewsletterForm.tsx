
import { ArrowRight } from "lucide-react";
import { Input } from "../../atoms/Input/Input";

export const NewsletterForm = () => (
  <form className="flex items-center border border-gray-600 rounded-[10px] overflow-hidden border-[2px]">
    <Input
      type="email"
      placeholder="Your E-Mail"
      className="border-none bg-transparent rounded-none px-4 py-2 w-full"
    />
    <button
      type="submit"
      className=" bg-[#20C997] rounded-[10px]   p-2 text-white flex items-center justify-center mr-1"
    >
      <ArrowRight className="w-4 h-4" />
    </button>
  </form>
);
