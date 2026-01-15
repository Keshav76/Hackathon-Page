import { FileDown, PlayCircle, FileText } from "lucide-react";
import { Button } from "./ui/button";

export function WebinarSection() {
  return (
    <section className="py-16 bg-blue-50/50" id="webinars">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
            <p className="text-green-700 font-medium text-sm">Completed</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Orientation Webinars
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We hosted two orientation webinars before the hackathon, which you
            can revisit using the recording and presentation below.
          </p>
        </div>

        {/* Schedule history */}
        {/* <div className="grid md:grid-cols-2 gap-8 mb-10">
          <Card className="border-t-4 border-t-cyan-500 shadow-md hover:shadow-xl transition-all">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <Calendar className="w-6 h-6 text-cyan-600" />
                Monday, 12 Jan 2026
              </CardTitle>
              <CardDescription className="flex items-center gap-2 text-base mt-2">
                <Clock className="w-4 h-4" />
                7:00 PM – 10:00 PM
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Orientation Webinar – Session 1
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-blue-600 shadow-md hover:shadow-xl transition-all">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <Calendar className="w-6 h-6 text-blue-600" />
                Wednesday, 14 Jan 2026
              </CardTitle>
              <CardDescription className="flex items-center gap-2 text-base mt-2">
                <Clock className="w-4 h-4" />
                7:00 PM – 10:00 PM
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Orientation Webinar – Session 2 (repeat)
              </p>
            </CardContent>
          </Card>
        </div> */}

        {/* Shared resources for both webinars */}
        <div className="max-w-2xl mx-auto ">
          {/* <h3 className="text-xl font-semibold text-gray-900 text-center">
            Webinar Resources
          </h3> */}
          <p className="text-sm text-gray-600 text-center">
            {/* Use the recording and presentation below, whether you attended on 12
            January or 14 January. */}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Button
              className="gap-2 cursor-pointer bg-cyan-600 hover:bg-cyan-700 text-white"
              size="lg"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1BDzXbtMCJgZM_K_gcjO6t1CLL6Na7A-o/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PlayCircle className="w-4 h-4" />
                Watch Recording
              </a>
            </Button>
            <Button
              variant="outline"
              className="gap-2 cursor-pointer border-cyan-200 text-cyan-700 hover:bg-cyan-50"
              size="lg"
              asChild
            >
              <a
                href="/dhs/hackathon/presentation.pdf"
                download="presentation.pdf"
              >
                <FileDown className="w-4 h-4" />
                View Presentation
              </a>
            </Button>
            <Button
              className="gap-2 cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white"
              size="lg"
              asChild
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeCGANXJzUttIamYWCBDuwPXchzhCS3MAXsn0tgW-QvvgYlVg/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="w-4 h-4" />
                SageMaker Request Form
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
