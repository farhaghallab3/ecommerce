import { SearchBar } from "../../molecules/SearchBar/SearchBar";


export const HeaderCenter = () => (
  <div className="flex-1 flex justify-center">
    <div className="w-full max-w-2xl">
      <SearchBar />
    </div>
  </div>
);
