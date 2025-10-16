"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

export function TestimonialsCarousel() {
  const testimonials = [
    {
      quote: "Finally, a platform that rewards curiosity and learning.",
      author: "Aayush",
      role: "Class 9 Student",
      avatar: "AY",
      color: "from-blue-500 to-blue-600",
    },
    {
      quote: "The transparency and ease of use make it a game-changer.",
      author: "Kavita",
      role: "Teacher, Pune",
      avatar: "KV",
      color: "from-purple-500 to-purple-600",
    },
    {
      quote: "It's not just competition — it's confidence.",
      author: "Parent",
      role: "Lucknow",
      avatar: "PR",
      color: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <Card className="bg-gradient-to-br from-gray-50 to-white border-2 hover:shadow-lg transition-shadow">
                      <CardContent className="p-8 relative">
                        <div className="absolute top-6 right-6 text-purple-100">
                          <Quote className="h-10 w-10" />
                        </div>

                        <blockquote className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>

                        <div className="flex items-center gap-4">
                          <Avatar className={`h-12 w-12 bg-gradient-to-br ${testimonial.color}`}>
                            <AvatarFallback className="text-white font-semibold">
                              {testimonial.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {testimonial.author}
                            </p>
                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
