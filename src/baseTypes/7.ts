
enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function isWeekend(day: DayOfWeek): boolean { 
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

const isThatDay: DayOfWeek = DayOfWeek.Saturday | DayOfWeek.Sunday;

console.log(`Is it a weekend? ${isWeekend(isThatDay)}`);