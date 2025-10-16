import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Puzzle, Trophy, ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: UserPlus,
      title: "Join for Free",
      description: "Sign up using your school or email.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Puzzle,
      title: "Pick Your Contest",
      description: "Choose from Math, Science, Coding, Art, and more.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Trophy,
      title: "Win Rewards",
      description: "Earn cash prizes, badges, and certificates for every win.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn, Compete, and Win — All in 3 Simple Steps.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className={`${step.bgColor} border-2 hover:shadow-lg transition-shadow`}>
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.color} mb-4`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="mb-2 text-2xl font-bold text-gray-400">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <blockquote className="bg-gradient-to-r from-purple-100 to-blue-100 border-l-4 border-purple-600 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-800 italic mb-2">
              "EduArena is like the IPL of learning — but everyone walks away smarter."
            </p>
          </blockquote>

          <div className="text-center">
            <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Start Competing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-gray-500 mt-3">
              First contest is free for new users!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
