import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Gift, Layers, Shield, ArrowRight } from "lucide-react";

export function ValuePropositionSection() {
  const features = [
    {
      icon: BarChart3,
      title: "Live Leaderboards",
      description: "Build motivation with real-time rankings.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Gift,
      title: "Fair Rewards",
      description: "Transparent pool distribution for winners.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Layers,
      title: "Diverse Contests",
      description: "Academic, creative, and skill-based challenges.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Shield,
      title: "Secure & Verified",
      description: "Anti-cheat systems for fair play.",
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Because Learning Should Be Rewarding.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border-2 hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-3xl">🎯</span>
              <h3 className="text-2xl font-bold text-gray-900">
                Be Among the First 1,000 Early Learners!
              </h3>
            </div>
            <p className="text-gray-700 mb-6">
              Join early and get exclusive benefits, special badges, and bonus rewards.
            </p>
            <Button
              size="lg"
              className="text-base px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Join the Next Contest
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
