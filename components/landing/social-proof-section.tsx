import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Star, Users } from "lucide-react";

export function SocialProofSection() {
  const testimonials = [
    {
      quote:
        "My daughter learned faster through contests than any app we've used. And she loves winning badges!",
      author: "Ritu Sharma",
      role: "Parent, Delhi",
      avatar: "RS",
      rating: 5,
    },
    {
      quote:
        "We ran our annual quiz on EduArena — smooth, fair, and super fun.",
      author: "Principal",
      role: "Greenfield Public School",
      avatar: "GP",
      rating: 5,
    },
  ];

  const partners = [
    "CBSE Partner",
    "EdTech India",
    "School Connect",
    "Learn India",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-purple-200 mb-6">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="font-semibold text-purple-600">10,000+ Students Already Competing Nationwide</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-2 hover:shadow-lg transition-shadow relative">
              <CardContent className="p-8">
                <div className="absolute top-6 right-6 text-purple-200">
                  <Quote className="h-12 w-12" />
                </div>
                
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 bg-gradient-to-br from-purple-500 to-blue-500">
                    <AvatarFallback className="text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-600 mb-6 font-medium">Featured In:</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-purple-300 transition-colors"
              >
                <span className="text-gray-700 font-semibold">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
