
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FundingSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Funding & Investment
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Supporting breakthrough research in human health through strategic investment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-3xl font-bold text-blue-600 mb-2">$10,000</div>
              <div className="text-slate-600">Per Participant</div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-3xl font-bold text-teal-600 mb-2">$100M</div>
              <div className="text-slate-600">Initial Budget</div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-3xl font-bold text-purple-600 mb-2">Active</div>
              <div className="text-slate-600">Fundraising Status</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-blue-50 to-teal-50 border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Currently Fundraising
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              We're actively raising funds via FairStock.Trade to accelerate our mission of creating an open-source foundation model for human health.
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => window.open('mailto:invest@humanlabs.tech', '_blank')}
            >
              Contact for Investment
            </Button>
            <p className="text-sm text-slate-500 mt-4">
              Email: invest@humanlabs.tech
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FundingSection;
