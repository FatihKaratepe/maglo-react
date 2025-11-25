import { Locale } from '@/utils';
import dayjs from 'dayjs';
import 'dayjs/locale/de';
import 'dayjs/locale/en';
import 'dayjs/locale/tr';
import CustomParseFormat from 'dayjs/plugin/customParseFormat';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';

export const setupDayJs = () => {
  dayjs.extend(LocalizedFormat);
  dayjs.extend(CustomParseFormat);
  dayjs.locale(Locale().split('-')[0]);
};
