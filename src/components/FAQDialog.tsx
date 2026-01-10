import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { HelpCircle } from "lucide-react";

export function FAQDialog({
  className,
  noSymbol = false,
}: {
  className?: string;
  noSymbol?: boolean;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className={
            className ||
            "cursor-pointer border-2 border-white bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-600 px-8 py-6 text-lg gap-2"
          }
        >
          {noSymbol ? null : <HelpCircle className="w-5 h-5 mr-2" />}
          FAQs
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl bg-white text-gray-900 border-gray-100">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl lg:text-4xl max-w-4xl leading-tight">
            Frequently Asked Questions
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-6 py-6 overflow-y-auto max-h-[70vh] custom-scrollbar pr-4">
          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> What is the mode of the
              hackathon?
            </h4>
            <p className="text-gray-600 pl-6 leading-relaxed">
              The hackathon will be conducted in{" "}
              <span className="font-medium px-2 py-0.5 bg-blue-100 rounded text-blue-700">
                hybrid
              </span>{" "}
              mode, allowing participants to take part either online or
              on-ground.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> What are the
              requirements for on-ground participation?
            </h4>
            <p className="text-gray-600 pl-6 leading-relaxed">
              For on-ground participation, all participants are required to
              bring their own laptops for coding and other competition-related
              tasks.
            </p>
          </div>

          <div className="spzce-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> Is accommodation
              provided at IIT Kanpur?
            </h4>
            <div className="pl-6 space-y-2">
              <p className="text-gray-600 leading-relaxed">
                Yes, accommodation will be provided in studio apartments at IIT
                Kanpur on a twin-sharing basis.
              </p>
              <p className="text-sm text-amber-700 bg-amber-50 p-3 rounded-lg border border-amber-100 italic">
                <strong>Note:</strong> Limited on-campus accommodation is
                available only for students, and will be allotted on a
                first-come, first-served basis.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> What about the meal
              arrangements?
            </h4>
            <div className="pl-6 space-y-2">
              <p className="text-gray-600 leading-relaxed">
                Meals (breakfast, lunch, and dinner) will be provided at the
                Visitors' Hostel, IIT Kanpur.
              </p>
              <p className="text-sm font-medium text-blue-700">
                Meal arrangements will be available for the duration 18th–24th
                January.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> What happens after our
              registration is approved?
            </h4>
            <div className="pl-6 space-y-2">
              <p className="text-gray-600 leading-relaxed">
                Once your registration is approved, teams will be required to
                attend an{" "}
                <span className="font-semibold text-gray-900">
                  introductory session
                </span>{" "}
                (with a choice of three slots; dates to be announced). This
                session will include a platform walkthrough and distribution of
                login credentials.
              </p>
              <p className="text-gray-600 leading-relaxed">
                After this, teams may explore the platform and begin training
                models using their own datasets.
              </p>
              <p className="text-sm text-amber-700 bg-amber-50 p-3 rounded-lg border border-amber-100 italic">
                <strong>Note:</strong> Testing against the official held-out
                datasets will commence on January 19th.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> How are the evaluation
              phases structured?
            </h4>
            <p className="text-gray-600 pl-6 leading-relaxed">
              The competition consists of a single evaluation phase. Teams are
              encouraged to iterate and submit multiple models; however, only
              the best-performing submission will be considered for the final
              leaderboard.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> What are the expected
              outputs from participating teams?
            </h4>
            <div className="pl-6 space-y-2">
              <p className="text-gray-600 leading-relaxed">
                Participation is flexible. Teams may contribute by:
              </p>
              <ul className="text-gray-600 list-disc list-inside space-y-1">
                <li>Developing AI models</li>
                <li>
                  Providing high-quality datasets to support model development
                </li>
                <li>Or a combination of both</li>
              </ul>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> Is there scope for
              further audit or adoption of winning solutions?
            </h4>
            <p className="text-gray-600 pl-6 leading-relaxed">
              Yes. The potential for further auditing, benchmarking, and
              real-world adoption of winning solutions will be evaluated and
              discussed after the conclusion of the hackathon.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
