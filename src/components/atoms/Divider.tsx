type DividerProps = {
  text?: string;
};

const Divider = ({ text = 'Or' }: DividerProps) => (
  <div className="flex items-center gap-2 text-black text-sm my-4">
    <hr className="flex-grow border-black" />
    <span>{text}</span>
    <hr className="flex-grow border-black" />
  </div>
);

export default Divider;
