import { Avatar } from '@/assets';
import { DropdownIcon, LogoutIcon, UserIcon } from '@/components/Icons';
import { useAppState } from '@/states';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogout } from '../api';

export const ProfileDropdown = () => {
  const navigate = useNavigate();
  const { user } = useAppState();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const { mutate: logoutMutate } = useLogout();

  const handleLogout = () => {
    logoutMutate(undefined);
    setOpen(false);
  };

  const handleProfile = () => {
    navigate('/profile');
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative text-sm">
      <div
        onClick={() => setOpen((p) => !p)}
        className="flex items-center gap-7 bg-gray-1 rounded-[100px] py-1.5 pr-[15px] pl-[7px] cursor-pointer"
      >
        <div className="grid grid-cols-[36px_1fr] gap-3 items-center">
          <div className="overflow-hidden rounded-full">
            <img
              src={Avatar}
              className="h-full w-full aspect-square object-cover object-center scale-125 translate-y-[3px]"
            />
          </div>
          <span className="text-text-1 font-semibold leading-[15px] text-sm select-none">{user?.fullName}</span>
        </div>
        <DropdownIcon className={`text-text-1 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </div>

      <div
        className={`
          absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-xl border border-gray-3 overflow-hidden
          transition-all origin-top-right z-5
          ${
            open
              ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
          }
        `}
      >
        <button className="dropdown-button" onClick={handleProfile}>
          <UserIcon /> Profile
        </button>
        <button className="dropdown-button" onClick={handleLogout}>
          <LogoutIcon /> Logout
        </button>
      </div>
    </div>
  );
};
