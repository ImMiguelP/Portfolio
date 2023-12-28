export const timeStampToDate = (timeStamp: string) => {
  const date = new Date(timeStamp);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formattedDate;
};
