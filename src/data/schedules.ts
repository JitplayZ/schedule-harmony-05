export interface Subject {
  name: string;
  time: string;
  instructor: string;
  room: string;
}

export interface ScheduleDay {
  day: string;
  subjects: Subject[];
}

export const sectionASchedule: ScheduleDay[] = [
  {
    day: "Monday",
    subjects: [
      { name: "Mathematics", time: "9:00 - 10:30", instructor: "Dr. Smith", room: "Room 101" },
      { name: "Physics", time: "11:00 - 12:30", instructor: "Prof. Johnson", room: "Lab 201" },
      { name: "English Literature", time: "2:00 - 3:30", instructor: "Ms. Williams", room: "Room 105" },
    ]
  },
  {
    day: "Tuesday",
    subjects: [
      { name: "Chemistry", time: "9:00 - 10:30", instructor: "Dr. Brown", room: "Lab 301" },
      { name: "History", time: "11:00 - 12:30", instructor: "Prof. Davis", room: "Room 102" },
      { name: "Computer Science", time: "2:00 - 3:30", instructor: "Mr. Wilson", room: "Computer Lab" },
    ]
  },
  {
    day: "Wednesday",
    subjects: [
      { name: "Biology", time: "9:00 - 10:30", instructor: "Dr. Miller", room: "Lab 202" },
      { name: "Mathematics", time: "11:00 - 12:30", instructor: "Dr. Smith", room: "Room 101" },
      { name: "Physical Education", time: "2:00 - 3:30", instructor: "Coach Taylor", room: "Gymnasium" },
    ]
  },
  {
    day: "Thursday",
    subjects: [
      { name: "Physics", time: "9:00 - 10:30", instructor: "Prof. Johnson", room: "Lab 201" },
      { name: "English Literature", time: "11:00 - 12:30", instructor: "Ms. Williams", room: "Room 105" },
      { name: "Art", time: "2:00 - 3:30", instructor: "Ms. Garcia", room: "Art Studio" },
    ]
  },
  {
    day: "Friday",
    subjects: [
      { name: "Chemistry", time: "9:00 - 10:30", instructor: "Dr. Brown", room: "Lab 301" },
      { name: "Computer Science", time: "11:00 - 12:30", instructor: "Mr. Wilson", room: "Computer Lab" },
      { name: "Study Hall", time: "2:00 - 3:30", instructor: "Various", room: "Library" },
    ]
  }
];

export const sectionBSchedule: ScheduleDay[] = [
  {
    day: "Monday",
    subjects: [
      { name: "Physics", time: "9:00 - 10:30", instructor: "Prof. Johnson", room: "Lab 201" },
      { name: "Mathematics", time: "11:00 - 12:30", instructor: "Dr. Smith", room: "Room 103" },
      { name: "Chemistry", time: "2:00 - 3:30", instructor: "Dr. Brown", room: "Lab 301" },
    ]
  },
  {
    day: "Tuesday",
    subjects: [
      { name: "English Literature", time: "9:00 - 10:30", instructor: "Ms. Williams", room: "Room 105" },
      { name: "Biology", time: "11:00 - 12:30", instructor: "Dr. Miller", room: "Lab 202" },
      { name: "History", time: "2:00 - 3:30", instructor: "Prof. Davis", room: "Room 102" },
    ]
  },
  {
    day: "Wednesday",
    subjects: [
      { name: "Computer Science", time: "9:00 - 10:30", instructor: "Mr. Wilson", room: "Computer Lab" },
      { name: "Physics", time: "11:00 - 12:30", instructor: "Prof. Johnson", room: "Lab 201" },
      { name: "Mathematics", time: "2:00 - 3:30", instructor: "Dr. Smith", room: "Room 103" },
    ]
  },
  {
    day: "Thursday",
    subjects: [
      { name: "Chemistry", time: "9:00 - 10:30", instructor: "Dr. Brown", room: "Lab 301" },
      { name: "Physical Education", time: "11:00 - 12:30", instructor: "Coach Taylor", room: "Gymnasium" },
      { name: "Music", time: "2:00 - 3:30", instructor: "Mr. Anderson", room: "Music Room" },
    ]
  },
  {
    day: "Friday",
    subjects: [
      { name: "English Literature", time: "9:00 - 10:30", instructor: "Ms. Williams", room: "Room 105" },
      { name: "Biology", time: "11:00 - 12:30", instructor: "Dr. Miller", room: "Lab 202" },
      { name: "Study Hall", time: "2:00 - 3:30", instructor: "Various", room: "Library" },
    ]
  }
];

export const sectionCSchedule: ScheduleDay[] = [
  {
    day: "Monday",
    subjects: [
      { name: "Biology", time: "9:00 - 10:30", instructor: "Dr. Miller", room: "Lab 202" },
      { name: "Chemistry", time: "11:00 - 12:30", instructor: "Dr. Brown", room: "Lab 301" },
      { name: "Mathematics", time: "2:00 - 3:30", instructor: "Dr. Smith", room: "Room 104" },
    ]
  },
  {
    day: "Tuesday",
    subjects: [
      { name: "Physics", time: "9:00 - 10:30", instructor: "Prof. Johnson", room: "Lab 201" },
      { name: "English Literature", time: "11:00 - 12:30", instructor: "Ms. Williams", room: "Room 105" },
      { name: "Computer Science", time: "2:00 - 3:30", instructor: "Mr. Wilson", room: "Computer Lab" },
    ]
  },
  {
    day: "Wednesday",
    subjects: [
      { name: "History", time: "9:00 - 10:30", instructor: "Prof. Davis", room: "Room 102" },
      { name: "Biology", time: "11:00 - 12:30", instructor: "Dr. Miller", room: "Lab 202" },
      { name: "Art", time: "2:00 - 3:30", instructor: "Ms. Garcia", room: "Art Studio" },
    ]
  },
  {
    day: "Thursday",
    subjects: [
      { name: "Mathematics", time: "9:00 - 10:30", instructor: "Dr. Smith", room: "Room 104" },
      { name: "Chemistry", time: "11:00 - 12:30", instructor: "Dr. Brown", room: "Lab 301" },
      { name: "Physical Education", time: "2:00 - 3:30", instructor: "Coach Taylor", room: "Gymnasium" },
    ]
  },
  {
    day: "Friday",
    subjects: [
      { name: "Physics", time: "9:00 - 10:30", instructor: "Prof. Johnson", room: "Lab 201" },
      { name: "English Literature", time: "11:00 - 12:30", instructor: "Ms. Williams", room: "Room 105" },
      { name: "Study Hall", time: "2:00 - 3:30", instructor: "Various", room: "Library" },
    ]
  }
];

export interface Holiday {
  date: string;
  name: string;
  description: string;
  type: "academic" | "national" | "religious";
}

export const holidays: Holiday[] = [
  {
    date: "2024-01-01",
    name: "New Year's Day",
    description: "National holiday - Classes suspended",
    type: "national"
  },
  {
    date: "2024-01-15",
    name: "Martin Luther King Jr. Day",
    description: "Federal holiday - College closed",
    type: "national"
  },
  {
    date: "2024-02-19",
    name: "Presidents' Day",
    description: "Federal holiday - College closed",
    type: "national"
  },
  {
    date: "2024-03-11",
    name: "Spring Break Start",
    description: "Spring break begins - No classes for one week",
    type: "academic"
  },
  {
    date: "2024-03-15",
    name: "Spring Break End",
    description: "Classes resume after spring break",
    type: "academic"
  },
  {
    date: "2024-03-29",
    name: "Good Friday",
    description: "Religious holiday - Optional holiday",
    type: "religious"
  },
  {
    date: "2024-04-22",
    name: "Earth Day",
    description: "Special campus events - Regular classes",
    type: "academic"
  },
  {
    date: "2024-05-27",
    name: "Memorial Day",
    description: "Federal holiday - College closed",
    type: "national"
  },
  {
    date: "2024-07-04",
    name: "Independence Day",
    description: "National holiday - College closed",
    type: "national"
  },
  {
    date: "2024-09-02",
    name: "Labor Day",
    description: "Federal holiday - College closed",
    type: "national"
  },
  {
    date: "2024-10-14",
    name: "Columbus Day",
    description: "Federal holiday - College closed",
    type: "national"
  },
  {
    date: "2024-11-11",
    name: "Veterans Day",
    description: "Federal holiday - College closed",
    type: "national"
  },
  {
    date: "2024-11-28",
    name: "Thanksgiving",
    description: "National holiday - Thanksgiving break begins",
    type: "national"
  },
  {
    date: "2024-11-29",
    name: "Thanksgiving Break",
    description: "Extended weekend - Classes resume Monday",
    type: "academic"
  },
  {
    date: "2024-12-23",
    name: "Winter Break Start",
    description: "Winter break begins - Classes resume in January",
    type: "academic"
  },
  {
    date: "2024-12-25",
    name: "Christmas Day",
    description: "National holiday - College closed",
    type: "national"
  }
];