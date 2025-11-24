import { CurrencyFormat } from '@/utils';
import { type EChartsOption, init } from 'echarts';
import { useEffect, useMemo, useRef } from 'react';
import { useWorkingCapital } from '../../api';

export const WorkingCapital = () => {
  const chartRef = useRef(null);
  const { data, isLoading, isFetching } = useWorkingCapital();
  const workingCapitalLoading = useMemo(() => isLoading || isFetching, [isLoading, isFetching]);

  useEffect(() => {
    const currentData = data?.data.data;
    if (!currentData) return;
    if (!chartRef.current || currentData?.data?.length === 0) return;

    const myChart = init(chartRef.current, undefined, { renderer: 'svg' });

    const tooltipFormatter = (params: { value: number; seriesName: string }[]) =>
      params
        .map((item) => {
          return `${item.seriesName}: ${CurrencyFormat(item.value, currentData.currency!)}`;
        })
        .join('<br/>');

    const yAxisFormatter = (value: number) => {
      return CurrencyFormat(value, currentData.currency!);
    };

    const option: EChartsOption = {
      grid: {
        top: 5,
        bottom: 0,
        left: 0,
        right: 0,
        containLabel: true,
      },
      tooltip: {
        trigger: 'axis',
        formatter: tooltipFormatter as never,
      },
      xAxis: {
        type: 'category',
        data: currentData?.data?.map((item) => item.month ?? ''),
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: yAxisFormatter,
        },
      },
      series: [
        {
          name: 'Gelir',
          type: 'line',
          data: currentData?.data?.map((item) => item.income),
        },
        {
          name: 'Gider',
          type: 'line',
          data: currentData?.data?.map((item) => item.expense),
        },
      ],
    };

    myChart.setOption(option);

    return () => myChart.dispose();
  }, [data?.data.data]);

  return (
    <div className="border border-gray-3 rounded-[10px] pt-[15px] pr-5 pb-[21px] pl-[25px] flex flex-col gap-[25px]">
      <div className="grid grid-cols-[1fr_338px] justify-between items-center">
        <div className="title-3 flex-1">Working Capital</div>
        <div className="flex justify-between items-center">
          <div className="flex gap-[30px]">
            <div className="inline-flex items-center gap-[9px] text-xs leading-[13px]">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary" /> Income
            </div>
            <div className="inline-flex items-center gap-[9px] text-xs leading-[13px]">
              <span className="inline-block w-2 h-2 rounded-full bg-primary" /> Expenses
            </div>
          </div>
          <select id="workingCapitalPeriod" defaultValue="7">
            <option value="7">Last 7 Days</option>
          </select>
        </div>
      </div>
      <div ref={chartRef} className="w-full" style={{ height: '400px' }} />
    </div>
  );
};
