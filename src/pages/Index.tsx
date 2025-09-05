import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, Users, GraduationCap } from "lucide-react";

const Index = () => {
  const sections = [
    {
      id: "A",
      title: "Section A",
      description: "Mathematics and Science focus",
      students: 35,
      link: "/section-a",
      gradient: "bg-gradient-section-a",
    },
    {
      id: "B", 
      title: "Section B",
      description: "Physics and Engineering focus",
      students: 32,
      link: "/section-b",
      gradient: "bg-gradient-section-b",
    },
    {
      id: "C",
      title: "Section C", 
      description: "Arts and Literature focus",
      students: 38,
      link: "/section-c",
      gradient: "bg-gradient-section-c",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-academic text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center">
            <GraduationCap className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 sm:mb-6" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              College Schedule Manager
            </h1>
            <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto px-4">
              Efficiently manage class schedules and holiday calendars for all sections. 
              Access weekly timetables, instructor information, and important dates.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
          <Card className="text-center shadow-card">
            <CardContent className="pt-4 sm:pt-6 px-3 sm:px-6">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 mx-auto text-primary mb-2" />
              <div className="text-lg sm:text-2xl font-bold text-foreground">105</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Total Students</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-card">
            <CardContent className="pt-4 sm:pt-6 px-3 sm:px-6">
              <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 mx-auto text-section-a mb-2" />
              <div className="text-lg sm:text-2xl font-bold text-foreground">3</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Active Sections</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-card">
            <CardContent className="pt-4 sm:pt-6 px-3 sm:px-6">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8 mx-auto text-holiday mb-2" />
              <div className="text-lg sm:text-2xl font-bold text-foreground">16</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Holiday Events</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-card">
            <CardContent className="pt-4 sm:pt-6 px-3 sm:px-6">
              <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 mx-auto text-section-c mb-2" />
              <div className="text-lg sm:text-2xl font-bold text-foreground">12</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Instructors</div>
            </CardContent>
          </Card>
        </div>

        {/* Sections */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center">
            Class Sections
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {sections.map((section) => (
              <Card key={section.id} className="overflow-hidden shadow-card hover:shadow-academic transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className={`text-white ${section.gradient}`}>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold flex items-center justify-between">
                    <span>Section {section.id}</span>
                    <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">{section.description}</p>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs sm:text-sm text-muted-foreground">
                        {section.students} students
                      </span>
                    </div>
                  </div>
                  <Link to={section.link}>
                    <Button className="w-full text-sm sm:text-base">
                      View Schedule
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Holiday Calendar Section */}
        <section>
          <Card className="bg-gradient-holiday text-white overflow-hidden shadow-academic">
            <CardHeader>
              <CardTitle className="text-3xl font-bold flex items-center space-x-3">
                <Calendar className="h-8 w-8" />
                <span>Holiday Calendar</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg opacity-90 mb-6">
                Stay updated with academic holidays, national holidays, and important college events. 
                Plan your studies around scheduled breaks and celebrations.
              </p>
              <Link to="/holidays">
                <Button variant="secondary" size="lg" className="bg-white text-holiday hover:bg-white/90">
                  View Holiday Calendar
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Index;
