import { RecentTransaction, Summary, Wallets, WorkingCapital, ScheduledTransfers } from './components';

export default function Dashboard() {
  return (
    <section className="grid grid-cols-[2fr_1fr] gap-[39px]">
      <div className="flex flex-col gap-[30px]">
        <Summary />
        <WorkingCapital />
        <RecentTransaction />
      </div>
      <div className="flex flex-col gap-[30px]">
        <Wallets />
        <ScheduledTransfers />
      </div>
    </section>
  );
}
