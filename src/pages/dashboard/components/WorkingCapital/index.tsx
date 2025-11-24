import { SkeletonLine } from '@/components';
import { CurrencyFormat } from '@/utils';
import { init, type EChartsOption } from 'echarts';
import { useEffect, useMemo, useRef, type FC } from 'react';
import { useWorkingCapital } from '../../api';

export const WorkingCapital: FC = () => {
  const chartRef = useRef(null);
  const { data, isLoading, isFetching } = useWorkingCapital();
  const workingCapitalLoading = useMemo(() => isLoading || isFetching, [isLoading, isFetching]);

  useEffect(() => {
    if (!data) return;
    if (!chartRef.current || data?.data?.length === 0) return;

    const myChart = init(chartRef.current, undefined, { renderer: 'svg' });

    const tooltipFormatter = (params: { value: number; seriesName: string; color: string }[]) => {
      return params
        .map((item) => {
          return `<div class="flex gap-2 items-center text-xs text-text-1">
          <div class="w-2 h-2 rounded-full" style="background:${item.color}"></div>
          <div>${item.seriesName}: ${CurrencyFormat(item.value, data.currency!)}</div>
          </div>`;
        })
        .join('');
    };

    const yAxisFormatter = (value: number) => {
      return CurrencyFormat(value, data.currency!);
    };

    const option: EChartsOption = {
      textStyle: {
        fontFamily: 'Kumbh Sans, sans-serif',
      },
      grid: {
        top: 5,
        bottom: 0,
        left: 0,
        right: 0,
      },
      tooltip: {
        trigger: 'axis',
        formatter: tooltipFormatter as never,
      },
      xAxis: {
        type: 'category',
        data: data?.data?.map((item) => item.month ?? ''),
        boundaryGap: false,
        splitLine: {
          show: true,
          lineStyle: { color: '#FFF4FE' },
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: yAxisFormatter,
        },
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          name: 'Income',
          type: 'line',
          smooth: true,
          data: data?.data?.map((item) => item.income),
          lineStyle: { color: getComputedStyle(document.documentElement).getPropertyValue('--color-secondary') },
          itemStyle: { color: getComputedStyle(document.documentElement).getPropertyValue('--color-secondary') },
        },
        {
          name: 'Expenses',
          type: 'line',
          smooth: true,
          data: data?.data?.map((item) => item.expense),
          lineStyle: { color: getComputedStyle(document.documentElement).getPropertyValue('--color-primary') },
          itemStyle: { color: getComputedStyle(document.documentElement).getPropertyValue('--color-primary') },
        },
      ],
    };

    myChart.setOption(option);

    return () => myChart.dispose();
  }, [data]);

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
      {workingCapitalLoading ? (
        <SkeletonLine className="w-full h-[200px]" />
      ) : (
        <div ref={chartRef} className="w-full h-[200px]" />
      )}
    </div>
  );
};
