import Navigation from "@/components/Navigation";
import ScheduleTable from "@/components/ScheduleTable";
import { sectionCSchedule } from "@/data/schedules";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

const SectionC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Section C Schedule
            </h1>
            <p className="text-muted-foreground text-lg">
              Complete weekly schedule for Section C students
            </p>
          </div>
          <Button
            onClick={handlePrint}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <Printer className="h-4 w-4" />
            <span>Print Schedule</span>
          </Button>
        </div>
        
        <ScheduleTable schedule={sectionCSchedule} section="C" />
        
        <div className="mt-8 bg-section-c-light border-l-4 border-section-c p-4 rounded-r-lg">
          <h3 className="font-semibold text-section-c mb-2">Section C Information</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Class Representative: Emily Rodriguez</li>
            <li>• Total Students: 38</li>
            <li>• Classroom: Arts Building, 3rd Floor</li>
            <li>• Academic Advisor: Dr. Miller</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default SectionC;