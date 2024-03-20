export function convertDateFormat(dateString, language) {
  const monthsEn = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthsAr = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];

  const date = new Date(dateString);
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const month = language === "ar" ? monthsAr[monthIndex] : monthsEn[monthIndex];
  const day = date.getDate();

  if (language === "ar") {
    return `${day} ${month} ${year}`;
  } else {
    return `${month} ${day}, ${year}`;
  }
}

export function formatDateAndTime(dateString) {
  const date = new Date(dateString);

  // Format date
  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  // Format time
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight
  const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;

  return [formattedDate, formattedTime];
}
