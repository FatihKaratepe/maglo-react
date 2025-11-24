import { type FC } from 'react';

type WalletCardType = 'dark' | 'transparent';
interface IWalletCardProps {
  type: WalletCardType;
}

export const WalletCard: FC<IWalletCardProps> = ({ type }) => {
  // const CurrentCard = useMemo(() => {
  //     if(type === 'dark') {
  //         return ()
  //     }
  // })
  return (
    <div className="rounded-[15px]" style={{ background: 'linear-gradient(104.3deg, #4A4A49 2.66%, #20201F 90.57%)' }}>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magni debitis inventore maxime excepturi
        suscipit et odio iure qui, corrupti ad soluta est aperiam quaerat doloremque eaque aliquam nesciunt velit.
      </div>
    </div>
  );

  //   return CurrentCard
};
