import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-purple-200">
                <Trophy className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium text-gray-900">
                  India's First Online Contest Platform
                </span>
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              India's First Online Contest Platform{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Where Learning Wins You Rewards
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Your child's talent deserves more than grades. At{" "}
              <span className="font-semibold text-purple-600">EduArena</span>,
              students from <span className="font-semibold">Class 6–12</span>{" "}
              compete in{" "}
              <span className="font-semibold">fun, skill-based contests</span> —
              from Math to Art — and{" "}
              <span className="font-semibold">
                win prizes, scholarships, and recognition
              </span>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-base px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Try Your First Contest Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-gray-500 self-center">
                Learn, Compete & Win in 15 Minutes
              </p>
            </div>

            <div className="flex items-center gap-8 justify-center lg:justify-start text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white" />
                </div>
                <span className="font-medium">10,000+ Students</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★★★★★</span>
                <span className="font-medium ml-1">4.9/5</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b">
                  <h3 className="font-semibold text-lg">Live Leaderboard</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Live
                  </span>
                </div>

                <div className="space-y-4">
                  {[
                    { name: "Aarav K.", score: 980, rank: 1, avatar: "from-yellow-400 to-yellow-600" },
                    { name: "Priya S.", score: 945, rank: 2, avatar: "from-gray-300 to-gray-500" },
                    { name: "Arjun M.", score: 920, rank: 3, avatar: "from-orange-400 to-orange-600" },
                    { name: "Diya P.", score: 895, rank: 4, avatar: "from-blue-400 to-blue-600" },
                  ].map((student) => (
                    <div
                      key={student.rank}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white font-bold text-sm">
                          {student.rank}
                        </div>
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${student.avatar}`} />
                        <div>
                          <p className="font-semibold text-gray-900">{student.name}</p>
                          <p className="text-sm text-gray-500">Class {8 + student.rank}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg text-purple-600">{student.score}</p>
                        <p className="text-xs text-gray-500">points</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Prize Pool</span>
                    <span className="font-bold text-green-600 text-lg">₹10,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Trophy className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
