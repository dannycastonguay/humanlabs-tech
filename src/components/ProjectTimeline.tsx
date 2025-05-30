
import { Card, CardContent } from "@/components/ui/card";

const ProjectTimeline = () => {
  const timelineItems = [
    {
      phase: "Project Launch",
      description: "Team and partner formation",
      status: "current",
      icon: "🚀"
    },
    {
      phase: "Participant Recruitment",
      description: "Enrolling participants and hardware partnerships",
      status: "upcoming",
      icon: "👥"
    },
    {
      phase: "Data Collection",
      description: "Distribution of wearables, initiation of lab testing",
      status: "upcoming",
      icon: "📱"
    },
    {
      phase: "AI Model Development",
      description: "Foundation model training begins",
      status: "upcoming",
      icon: "🧠"
    },
    {
      phase: "Open Source Release",
      description: "Data, code, and findings publicly available",
      status: "upcoming",
      icon: "🌐"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Project Timeline
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our roadmap to revolutionizing human health through open-source AI.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 to-teal-200 hidden lg:block"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-8`}>
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                  <Card className={`${item.status === 'current' ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:shadow-lg'} transition-all duration-300 hover:scale-105`}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-2xl">{item.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">
                            {item.phase}
                          </h3>
                          {item.status === 'current' && (
                            <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                              Current Phase
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-slate-600">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 hidden lg:block">
                  <div className={`w-4 h-4 rounded-full border-4 ${item.status === 'current' ? 'bg-blue-500 border-blue-200' : 'bg-white border-slate-300'}`}></div>
                </div>

                <div className="lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;
