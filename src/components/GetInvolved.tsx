
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GetInvolved = () => {
  const roles = [
    {
      title: "Data Scientists & AI Engineers",
      description: "Help build cutting-edge foundation models for human health",
      icon: "🧬"
    },
    {
      title: "Product Managers & Designers",
      description: "Shape the user experience and product strategy",
      icon: "🎨"
    },
    {
      title: "Doctors, Clinicians, and Researchers",
      description: "Provide medical expertise and research guidance",
      icon: "👩‍⚕️"
    },
    {
      title: "Hardware & Device Manufacturers",
      description: "Partner with us on wearable and sensing technologies",
      icon: "⚙️"
    },
    {
      title: "Patients & Health Advocates",
      description: "Join as participants and help us improve healthcare for all",
      icon: "❤️"
    }
  ];

  return (
    <section id="get-involved" className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get Involved
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Join our mission to revolutionize healthcare through open-source AI and global collaboration.
          </p>
          <p className="text-lg font-semibold text-slate-700">
            We're actively seeking:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {roles.map((role, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {role.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {role.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {role.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-blue-600 to-teal-600 border-0 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Interested in Joining?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Get in touch with our team to explore collaboration opportunities.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => window.open('mailto:team@humanlabs.tech', '_blank')}
            >
              Contact Our Team
            </Button>
            <p className="text-sm mt-4 opacity-80">
              Email: team@humanlabs.tech
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GetInvolved;
