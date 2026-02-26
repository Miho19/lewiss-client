import type { LucideIcon } from 'lucide-react';

type Props = {
  onClickHandler: () => void;
  icon?: LucideIcon;
  buttonText: string;
};

function CustomerButton(props: Props) {
  const { onClickHandler, icon: Icon, buttonText } = props;

  return (
    <button
      onClick={onClickHandler}
      className="flex flex-1 w-full border space-x-3 md:max-w-32 md:min-w-32 border-black/5 bg-gray-50 rounded-lg p-2 cursor-pointer group-hover:bg-gray-200 hover:-translate-y-1 group transition-all delay-75 duration-75 ease-in-out md:justify-around"
    >
      {Icon && <Icon className="w-6 h-6" />}
      <p className="">{buttonText}</p>
    </button>
  );
}

export default CustomerButton;
