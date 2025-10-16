import { Button } from "@/components/ui/button";
import { Rocket, Clock, ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Rocket className="h-5 w-5 text-white" />
            <span className="text-white font-semibold">Join the Movement</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Join India's Fastest-Growing Student Contest Platform.
          </h2>

          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Your first contest is on us. Compete, learn, and win — all from your screen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="text-base px-10 py-6 bg-white text-purple-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Start Competing Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Clock className="h-5 w-5 text-yellow-300" />
            <span className="text-white font-semibold">
              Next Contest Starts in 2 Days!
            </span>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-white/80 text-sm">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80 text-sm">Contests Held</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">₹5L+</div>
              <div className="text-white/80 text-sm">Prizes Distributed</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
    </section>
  );
}
