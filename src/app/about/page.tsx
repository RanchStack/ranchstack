import Card from "@/components/ui/card";
import PageTitle from "@/components/ui/page-title";
import ContactButton from "@/components/ui/buttons/contact-button";
import { FaLightbulb, FaUniversity } from "react-icons/fa";
import { MdWork } from "react-icons/md";

export default function AboutPage() {
  const headshotUrl = "/images/headshot-placeholder.jpg";
  return (
    <section className="flex flex-col p-10">
      <section className="flex gap-6 mb-10">
        <div className="relative flex-shrink-0 mt-7 ml-9">
          {/* Background circle / crescent */}
          <div
            className="absolute rounded-full shadow-[0_0_25px_rgba(0,0,0,0.6)]"
            style={{
              left: -35,
              top: -25,
              width: 430,
              height: 420,
              background: "var(--color-secondary)",
              zIndex: 0,
            }}
          />
          {/* Headshot */}
          <img
            src={headshotUrl}
            alt="Headshot"
            className="object-cover rounded-full shadow-[0_0_25px_rgba(0,0,0,0.6)] relative z-10"
            style={{ width: 420, height: 420 }}
          />
        </div>

        <section className="flex flex-col text-left gap-6">
          <PageTitle title={"About Me"} />

          <p className="text-2xl">
            Hi, I’m Danielle — a developer and designer based in rural Alberta
            with over a decade of experience in admin and accounting, and a
            deep-rooted passion for creating user-focused digital tools.
          </p>
          <p className="text-2xl">
            I’ve called Lac Ste. Anne County home for over 10 years, and while
            I’m open to working on a wide range of projects, I’m especially
            excited to bring thoughtful, modern tech solutions to rural
            communities and small businesses. I’m looking forward to new
            challenges where I can create meaningful, efficient, and beautiful
            digital experiences. Let’s build something great together!
                  </p>
                  
            <ContactButton /> 
        </section>
      </section>

      <section className="grid grid-cols-3 gap-6 text-lg">
        <Card
          icon={<FaUniversity />}
          children={
            <>
              <p>
                I recently completed NAIT’s Digital Media and IT (DMIT) diploma
                in Software Development, with a focus on frontend technologies.
              </p>
              <p>
                Before that, I took Python training and started with a
                foundation in bookkeeping and accounting systems. I'm always eager to keep learning and
                expanding both my technical and business skills.
              </p>
            </>
          }
        />
        <Card
          icon={<MdWork />}
          children={
            <>
              <p>
                Before transitioning to tech, I spent over 10 years in
                administrative and accounting roles where I focused heavily on
                data entry and workflow efficiency.
              </p>
              <p>
                That background shaped how I approach development today: I
                prioritize user experience by aiming for maximum output with
                minimum effort on the user's part. Simple, intuitive, and smart
                interfaces are at the heart of everything I build.
              </p>
            </>
          }
        />
        <Card
          icon={<FaLightbulb />}
          children={
            <>
              <p>
                I also care deeply about scalability and dynamic design — I
                build systems that are flexible from day one, minimizing the
                need for rework as needs evolve. Future-proofing is always part
                of my process.
              </p>
              <p>
                Visually, I’m a stickler for detail. If something doesn’t look
                quite right, I’ll fine-tune it until it does. Clean, purposeful
                design is more than a preference — it’s a principle I work by.
              </p>
            </>
          }
        />
      </section>
    </section>
  );
}
