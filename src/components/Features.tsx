import EcoSystem from "../assets/icons/ecosystem.svg";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white ">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="leading-[48px] tracking-tighter font-bold text-[48px] sm:text-[56px]">
            Everything you need
          </h2>
          <p className="text-white/70 pt-[20px]">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
      </div>

      <div className="pt-[64px] px-[16px] flex flex-col sm:flex-row sm:flex-1 gap-[16px] lg:max-w-[1200px] lg:mx-auto pb-4">
        {features.map(({ title, description }) => (
          <div
            key={title}
            className="text-center border border-white/30 rounded-md px-[20px] py-[40px]"
          >
            <div className="inline-flex">
              <EcoSystem />
            </div>
            <h3 className="font-bold pt-[24px]">{title}</h3>
            <p className="leading-6 pt-2">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
