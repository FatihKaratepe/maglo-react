import { Avatar } from '@/assets';
import { DropdownIcon } from '@/components/Icons';
import { useAppState } from '@/states';

export const ProfileDropdown = () => {
  const { user } = useAppState();

  return (
    <div className="flex items-center gap-7 bg-gray-1 rounded-[100px] py-1.5 pr-[15px] pl-[7px] cursor-pointer">
      <div className="grid grid-cols-[36px_1fr] gap-3 items-center">
        <div className="overflow-hidden rounded-full">
          <img
            src={Avatar}
            className="h-full w-full aspect-square object-cover object-center scale-125 translate-y-[3px]"
          />
        </div>
        <span className="text-text-1 font-semibold leading-[15px] text-sm select-none">{user?.fullName}</span>
      </div>
      <DropdownIcon className="text-text-1" />
    </div>
  );
};
