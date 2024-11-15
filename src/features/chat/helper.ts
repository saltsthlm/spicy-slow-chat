export function numberOfdaysSinceMonday(currentDate: Date) {
  const day = currentDate.getDay();
  const diff = day - (day == 0 ? -6 : 1);
  return diff;
}
