import { DateTime } from 'luxon';

export const formatTime = (date, format = 'dd/MM/yyyy HH:mm:ss') => date && DateTime.fromISO(date).toFormat(format);
