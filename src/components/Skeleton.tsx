export const Skeleton = () => {
  return (
    <div role="status" className="max-w-sm">
      <div className="shimmer h-2.5 bg-text-2 rounded-full w-48 mb-4"></div>
      <div className="shimmer h-2 bg-text-2 rounded-full max-w-[360px] mb-2.5"></div>
      <div className="shimmer h-2 bg-text-2 rounded-full mb-2.5"></div>
      <div className="shimmer h-2 bg-text-2 rounded-full max-w-[330px] mb-2.5"></div>
      <div className="shimmer h-2 bg-text-2 rounded-full max-w-[300px] mb-2.5"></div>
      <div className="shimmer h-2 bg-text-2 rounded-full max-w-[360px]"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
