import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Subject {
  name: string;
  time: string;
  instructor: string;
  room: string;
}

interface ScheduleDay {
  day: string;
  subjects: Subject[];
}

interface ScheduleTableProps {
  schedule: ScheduleDay[];
  section: "A" | "B" | "C";
  className?: string;
}

const ScheduleTable = ({ schedule, section, className }: ScheduleTableProps) => {
  const getSectionStyle = () => {
    switch (section) {
      case "A":
        return {
          gradient: "bg-gradient-section-a",
          bg: "bg-section-a-light",
          border: "border-section-a",
          text: "text-section-a"
        };
      case "B":
        return {
          gradient: "bg-gradient-section-b",
          bg: "bg-section-b-light",
          border: "border-section-b",
          text: "text-section-b"
        };
      case "C":
        return {
          gradient: "bg-gradient-section-c",
          bg: "bg-section-c-light",
          border: "border-section-c",
          text: "text-section-c"
        };
    }
  };

  const styles = getSectionStyle();

  return (
    <Card className={cn("shadow-card", className)}>
      <CardHeader className={cn("text-white", styles.gradient)}>
        <CardTitle className="text-2xl font-bold">
          Section {section} - Weekly Schedule
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={cn("border-b", styles.bg)}>
                <th className="px-6 py-4 text-left font-semibold text-foreground">
                  Day
                </th>
                <th className="px-6 py-4 text-left font-semibold text-foreground">
                  Subject
                </th>
                <th className="px-6 py-4 text-left font-semibold text-foreground">
                  Time
                </th>
                <th className="px-6 py-4 text-left font-semibold text-foreground">
                  Instructor
                </th>
                <th className="px-6 py-4 text-left font-semibold text-foreground">
                  Room
                </th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((daySchedule, dayIndex) => (
                daySchedule.subjects.map((subject, subjectIndex) => (
                  <tr
                    key={`${dayIndex}-${subjectIndex}`}
                    className="border-b border-border hover:bg-muted/50 transition-colors"
                  >
                    {subjectIndex === 0 && (
                      <td
                        className={cn(
                          "px-6 py-4 font-semibold border-r border-border",
                          styles.text
                        )}
                        rowSpan={daySchedule.subjects.length}
                      >
                        {daySchedule.day}
                      </td>
                    )}
                    <td className="px-6 py-4 font-medium text-foreground">
                      {subject.name}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {subject.time}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {subject.instructor}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {subject.room}
                    </td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScheduleTable;