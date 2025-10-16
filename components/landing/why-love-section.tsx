import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, School, Trophy, Target, Globe } from "lucide-react";

export function WhyLoveSection() {
  const features = [
    {
      title: "For Students",
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      items: [
        { icon: Trophy, text: "Learn while competing" },
        { icon: Target, text: "Win exciting prizes" },
        { icon: Globe, text: "Showcase your skills globally" },
      ],
    },
    {
      title: "For Parents",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      items: [
        { icon: Target, text: "Productive screen time" },
        { icon: Trophy, text: "Verified learning outcomes" },
        { icon: GraduationCap, text: "Build confidence & motivation" },
      ],
    },
    {
      title: "For Schools",
      icon: School,
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      items: [
        { icon: Trophy, text: "Inter-school recognition" },
        { icon: Users, text: "Boost student engagement" },
        { icon: Target, text: "Easy integration for group contests" },
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for Students. Trusted by Parents. Loved by Schools.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className={`${feature.bgColor} border-2 hover:shadow-xl transition-all hover:-translate-y-1`}>
              <CardHeader>
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4 w-fit`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-white rounded-md">
                        <item.icon className="h-4 w-4 text-gray-700" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
