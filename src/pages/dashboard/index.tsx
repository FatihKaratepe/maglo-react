import { RecentTransaction, ScheduledTransfers, Summary, Wallets, WorkingCapital } from './components';

export default function Dashboard() {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-[39px]">
      <div className="flex flex-col gap-[30px]">
        <Summary />
        <WorkingCapital />
        <RecentTransaction />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-[30px]">
        <Wallets />
        <ScheduledTransfers />
      </div>
    </section>
  );
}
