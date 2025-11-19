import Loginbg from '@/assets/images/login-bg.webp';
import { Input } from '@/components';

export default function Login() {
  return (
    <div className="grid grid-cols-[17fr_15fr]">
      <div className='flex flex-col gap-1'>
        <Input />
      </div>
      <img src={Loginbg} className="w-full h-screen object-cover" alt="" />
    </div>
  );
}
