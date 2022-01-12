import {format} from 'date-fns';
import {es} from 'date-fns/locale';

export const dateFormat = dateInput => {
  const newDate = new Date(dateInput);

  return format(newDate, "d 'de' MMMM 'de' yyyy", {locale: es});
};
