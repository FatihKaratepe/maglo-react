import { Summary, WorkingCapital } from './components';

export default function Dashboard() {
  return (
    <section className="grid grid-cols-[0.67fr_0.33fr] gap-10">
      <div className="flex flex-col gap-[30px]">
        <Summary />
        <WorkingCapital />
      </div>
      <div></div>
    </section>
  );
}
