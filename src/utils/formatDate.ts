import dayjs from "dayjs";

const DEFAULT_FORMAT = "YYYY-MMM-DD - HH:ss a";

export const dayJsFormat = (date: string, format: string = DEFAULT_FORMAT) => {
  const formatted = dayjs(date).format(format);

  return formatted;
};
