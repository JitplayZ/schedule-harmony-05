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
        <CardTitle className="text-xl sm:text-2xl font-bold">
          Section {section} - Weekly Schedule
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {/* Mobile Card View */}
        <div className="block md:hidden">
          {schedule.map((daySchedule, dayIndex) => (
            <div key={dayIndex} className="border-b border-border last:border-b-0">
              <div className={cn("px-4 py-3 font-semibold text-sm", styles.bg, styles.text)}>
                {daySchedule.day}
              </div>
              <div className="space-y-3 p-4">
                {daySchedule.subjects.map((subject, subjectIndex) => (
                  <div key={subjectIndex} className="bg-muted/30 rounded-lg p-3">
                    <div className="font-medium text-foreground text-sm mb-1">
                      {subject.name}
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                      <div>⏰ {subject.time}</div>
                      <div>📍 {subject.room}</div>
                      <div className="col-span-2">👨‍🏫 {subject.instructor}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={cn("border-b", styles.bg)}>
                <th className="px-4 lg:px-6 py-4 text-left font-semibold text-foreground text-sm">
                  Day
                </th>
                <th className="px-4 lg:px-6 py-4 text-left font-semibold text-foreground text-sm">
                  Subject
                </th>
                <th className="px-4 lg:px-6 py-4 text-left font-semibold text-foreground text-sm">
                  Time
                </th>
                <th className="px-4 lg:px-6 py-4 text-left font-semibold text-foreground text-sm">
                  Instructor
                </th>
                <th className="px-4 lg:px-6 py-4 text-left font-semibold text-foreground text-sm">
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
                          "px-4 lg:px-6 py-4 font-semibold border-r border-border text-sm",
                          styles.text
                        )}
                        rowSpan={daySchedule.subjects.length}
                      >
                        {daySchedule.day}
                      </td>
                    )}
                    <td className="px-4 lg:px-6 py-4 font-medium text-foreground text-sm">
                      {subject.name}
                    </td>
                    <td className="px-4 lg:px-6 py-4 text-muted-foreground text-sm">
                      {subject.time}
                    </td>
                    <td className="px-4 lg:px-6 py-4 text-muted-foreground text-sm">
                      {subject.instructor}
                    </td>
                    <td className="px-4 lg:px-6 py-4 text-muted-foreground text-sm">
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