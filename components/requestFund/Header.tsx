
interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <p className="text-black/90 text-lg mb-3 font-semibold font-sans">{label}</p>
    </div>
  );
};
