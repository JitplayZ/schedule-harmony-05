import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { holidays, Holiday } from "@/data/schedules";
import { Calendar, Printer } from "lucide-react";
import { format, parseISO } from "date-fns";

const Holidays = () => {
  const handlePrint = () => {
    window.print();
  };

  const getHolidayBadgeVariant = (type: Holiday["type"]) => {
    switch (type) {
      case "academic":
        return "bg-primary text-primary-foreground";
      case "national":
        return "bg-holiday text-holiday-foreground";
      case "religious":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const sortedHolidays = [...holidays].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Holiday Calendar
            </h1>
            <p className="text-muted-foreground text-lg">
              Academic year holidays and important dates
            </p>
          </div>
          <Button
            onClick={handlePrint}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <Printer className="h-4 w-4" />
            <span>Print Calendar</span>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedHolidays.map((holiday, index) => (
            <Card key={index} className="shadow-card hover:shadow-academic transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-holiday" />
                    <CardTitle className="text-lg">{holiday.name}</CardTitle>
                  </div>
                  <Badge className={getHolidayBadgeVariant(holiday.type)}>
                    {holiday.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-holiday">
                    {format(parseISO(holiday.date), "MMM dd, yyyy")}
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {holiday.description}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                <span>Academic Holidays</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm opacity-90">
                College-specific breaks and academic calendar events
              </p>
            </CardContent>
          </Card>

          <Card className="bg-holiday text-holiday-foreground">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-holiday-foreground rounded-full"></div>
                <span>National Holidays</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm opacity-90">
                Federal holidays with college closures
              </p>
            </CardContent>
          </Card>

          <Card className="bg-muted text-muted-foreground">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                <span>Religious Holidays</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Optional observances and cultural celebrations
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Holidays;