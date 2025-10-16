import { AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ProblemSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Smart Students Need More Than Just Exams.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 border-red-200 bg-red-50">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-red-100 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">The Problem</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every year, millions of bright students struggle to stand out — 
                    standardized exams can't measure creativity, speed, or real-world skills.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 bg-green-50">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">The Solution</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-purple-600">EduArena</span> brings 
                    learning to life through{" "}
                    <span className="font-semibold">competitive challenges</span> that reward 
                    knowledge, curiosity, and performance — not rote memory.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
