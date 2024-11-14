export function getMondayOfCurrentWeek(currentDate: Date) {
  const day = currentDate.getDay();
  const diff = currentDate.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  const currentMonday = new Date(currentDate.setDate(diff));
  currentMonday.setHours(0,0,0,0)
  return currentMonday;
}
