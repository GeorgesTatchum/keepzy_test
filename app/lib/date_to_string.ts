export const date_to_string = (date: Date | string | number) => {
    const validDate = new Date(date);
    if (isNaN(validDate.getTime())) {
      throw new Error("Invalid date provided");
    }
    return `${validDate.getDate().toString().padStart(2, '0')}/${(validDate.getMonth() + 1).toString().padStart(2, '0')}/${validDate.getFullYear()}`;
  }