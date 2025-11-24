import { Locale } from '@/utils';
import dayjs from 'dayjs';
import 'dayjs/locale/de';
import 'dayjs/locale/en';
import 'dayjs/locale/tr';

export const setupDayJs = () => {
  dayjs.locale(Locale().split('-')[0]);
};
