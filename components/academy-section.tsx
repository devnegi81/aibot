import React from 'react';

import { MessageSquare, DiamondPlus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AcademySection() {
  return (
    <div className="container px-[100px] mx-[100px] my-8 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-12">
          Our Academy
        </h2>
        
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Row 1, Column 1 */}
          <div className="p-6 rounded-lg shadow-md ">
            <h3 className="pt-5 text-3xl mb-3 font-bold bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent">For New Traders</h3>
            <div className="aspect-video overflow-hidden rounded-lg mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Beginner courses" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h2 className="text-2xl pb-5">
                Start Your Learning Journey
              </h2>
              
              <p className="leading-relaxed pb-5">
                Perfect for newcomers to the field. Our beginner courses cover fundamental concepts, 
                basic techniques, and essential tools to build a strong foundation. Learn at your own pace 
                with hands-on projects and personalized feedback from expert instructors.
              </p>
              
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-lg gap-3"
                >
            <DiamondPlus size={20} />
            Join Academy
            </Button>
          </div>

          {/* Row 1, Column 2 */}
          <div className="p-6 rounded-lg shadow-md ">
            <h3 className="pt-5 text-3xl mb-3 font-bold bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent">For Advanced Traders</h3>
            <div className="aspect-video overflow-hidden rounded-lg mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Beginner courses" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h2 className="text-2xl pb-5">
                Start Your Learning Journey
              </h2>
              
              <p className="leading-relaxed pb-5">
                Perfect for newcomers to the field. Our beginner courses cover fundamental concepts, 
                basic techniques, and essential tools to build a strong foundation. Learn at your own pace 
                with hands-on projects and personalized feedback from expert instructors.
              </p>
              
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-lg gap-3"
                >
            <DiamondPlus size={20} />
            Join Community
            </Button>
          </div>

        </div>
    </div>
  );
}