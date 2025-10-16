import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Trophy, Zap, Crown } from "lucide-react";

export function PricingSection() {
  const pricingTiers = [
    {
      type: "Quick Quiz",
      entryFee: "₹20",
      prizePool: "₹2,000",
      example: "Math Sprint",
      icon: Zap,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      popular: false,
    },
    {
      type: "Weekly Challenge",
      entryFee: "₹50",
      prizePool: "₹10,000",
      example: "Science League",
      icon: Trophy,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      popular: true,
    },
    {
      type: "Premium Championship",
      entryFee: "₹200",
      prizePool: "₹1 Lakh",
      example: "All-India Coding Cup",
      icon: Crown,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Affordable Contests, Big Rewards.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`${tier.bgColor} border-2 hover:shadow-xl transition-all hover:-translate-y-1 relative`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${tier.color} mb-4 mx-auto`}>
                  <tier.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">{tier.type}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {tier.entryFee}
                  </div>
                  <p className="text-sm text-gray-600">Entry Fee</p>
                </div>

                <div className="space-y-3 pt-4 border-t border-gray-300">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Prize Pool</span>
                    <span className="font-bold text-green-600">{tier.prizePool}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Example</span>
                    <span className="font-semibold text-gray-900">{tier.example}</span>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Certificate of participation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Performance analytics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Real-time leaderboard</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-6 border-2 border-purple-200">
            <p className="text-gray-800 text-lg">
              <span className="font-semibold">Every contest includes</span> a{" "}
              <span className="font-semibold text-purple-600">certificate of participation</span>{" "}
              and{" "}
              <span className="font-semibold text-blue-600">performance analytics</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
