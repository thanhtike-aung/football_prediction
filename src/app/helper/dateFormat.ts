const dateFormater = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "2-digit",
});

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return dateFormater.format(date);
};
