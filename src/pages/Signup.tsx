import { LoginProps } from "@/shared-interfaces/interface/login";
import withSEO from "@/hoc/WithSEO";
import { GalleryVerticalEnd } from "lucide-react"
import DashboardImage from '../assets/Dashboard-Image.jpeg';
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { SignupForm } from "@/components/Signup/signup-form";

const Signup: React.FC<LoginProps> = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Pace
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm/>
          </div>
        </div>
      </div>
      <div className="relative hidden p-10 bg-muted lg:block background">
      <AnimatedGridPattern
        numSquares={50}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={0.5}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-screen skew-y-12",
        )}
      />
        <img
          src={DashboardImage}
          alt="Image"
          className="absolute inset-0 h-screen w-full object-contain"
        />
      </div>
    </div>
  );
};

// Wrap Login with withSEO before exporting
const EnhancedSignup = withSEO(Signup);
export default EnhancedSignup;
