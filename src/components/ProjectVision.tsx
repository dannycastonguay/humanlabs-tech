
import { Card, CardContent } from "@/components/ui/card";

const ProjectVision = () => {
  const visionItems = [
    {
      title: "Comprehensive Data",
      description: "Continuous wearable, clinical, genomic, multi-omics, and lifestyle data.",
      icon: "📊",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Global Reach",
      description: "10,000 multi-ethnic participants from multiple countries.",
      icon: "🌍",
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Advanced AI",
      description: "Cutting-edge deep reinforcement learning powered by NVIDIA GPUs.",
      icon: "🤖",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Open Source Commitment",
      description: "All data, models, and findings openly shared, respecting participant privacy.",
      icon: "🔓",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Vision
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Revolutionizing healthcare through comprehensive data collection, advanced AI, and global collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visionItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectVision;
