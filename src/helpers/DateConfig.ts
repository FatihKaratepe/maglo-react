import { Locale } from '@/utils';
import dayjs from 'dayjs';
import 'dayjs/locale/de';
import 'dayjs/locale/en';
import 'dayjs/locale/tr';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';

export const setupDayJs = () => {
  dayjs.extend(LocalizedFormat);
  dayjs.locale(Locale().split('-')[0]);
};
