import { useFinancialWallets } from '../../api';

export const Wallets = () => {
  const { data } = useFinancialWallets();

  console.log(data?.cards);

  return (
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto in, inventore commodi odit recusandae sit!
      Odit quia, est minus accusamus nulla sint id, voluptates dicta aspernatur facere error doloremque ex?
    </div>
  );
};
