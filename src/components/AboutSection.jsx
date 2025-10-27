import { Briefcase, Code, User } from "lucide-react";
import React from "react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About<span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 item-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Develper</h3>
            <p className="text-muted-foreground">
              I’m a passionate Front-End Developer with a strong interest in
              building visually appealing and user-friendly web applications. I
              love transforming creative ideas into responsive, interactive
              designs using modern technologies like HTML, CSS, Tailwind CSS,
              JavaScript, and React JS. My projects reflect my focus on clean
              design, smooth functionality, and real-world usability — from
              fashion websites and movie explorers to fun games and full-stack
              applications
            </p>
            <p className="text-muted-foreground">
              Currently, I’m expanding my skills in backend development with
              Node.js, Express, MongoDB, and MySQL, enabling me to create
              complete end-to-end solutions. I enjoy learning new tools, solving
              complex problems, and continuously improving my code. My goal is
              to grow as a versatile developer who can craft engaging digital
              experiences that combine creativity, performance, and
              functionality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/SHALINI MUDLIAR cv.pdf"
                download=""
                className=" px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Desiging intuitive user interfaces and seamless user
                    expriences
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
