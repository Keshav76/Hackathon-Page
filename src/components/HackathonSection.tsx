import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Users, Trophy, FileCheck, Award } from "lucide-react";
import { Card } from "./ui/card";
import { useNavigate } from "react-router-dom";

export function HackathonSection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-100 rounded-full mb-4">
            <p className="text-cyan-700">Join the Challenge</p>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">
            The NHA-IITK-ICMR Hackathon
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An operational proof-of-concept to test the framework and identify
            opportunities for improvement
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl mb-6">Challenge Overview</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The hackathon will test the AI DPG framework in challenge mode by
              collecting test set data from public health departments and asking
              model developers to compete on finding the best models for fixed
              problem statements with data they bring to the table.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="mb-1">Eligibility</h4>
                  <p className="text-gray-600">
                    Academic, research, and startup teams across India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="mb-1">Duration</h4>
                  <p className="text-gray-600">
                    3-week cycle: 1 week warm-up + 1 week competition +
                    evaluation
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="mb-1">Evaluation</h4>
                  <p className="text-gray-600">
                    Automatic benchmarking with public leaderboard under
                    differential privacy
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="mb-1">Prize Pool</h4>
                  <p className="text-gray-600">
                    Up to ₹12 Lakhs in awards for winning solutions
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1649451844813-3130d6f42f8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrYXRob24lMjBjb2RpbmclMjBjb21wZXRpdGlvbnxlbnwxfHx8fDE3NjM2OTE4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Hackathon"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl mb-8 text-center">Challenge Problems</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate("/bone-age")}
            >
              <div className="text-4xl mb-4">🦴</div>
              <h4 className="text-xl mb-3">Bone Age Prediction</h4>
              <p className="text-gray-600">
                Predict bone age using wrist X-rays to assist in pediatric
                growth assessment and endocrine evaluations
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👁️</div>
              <h4 className="text-xl mb-3">Cataract Detection</h4>
              <p className="text-gray-600">
                Detect cataracts from mobile phone photos of eyes, enabling
                accessible screening in remote areas
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔬</div>
              <h4 className="text-xl mb-3">Diabetic Retinopathy</h4>
              <p className="text-gray-600">
                Identify diabetic retinopathy from fundus images to prevent
                vision loss through early detection
              </p>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center">
                <FileCheck className="w-10 h-10 text-cyan-400" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl mb-3">Proof of Concept</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                Successful conduct of this hackathon will serve as operational
                proof-of-concept for the platform, which can then be offered to
                a larger audience. Top-performing models will undergo further
                audit through the federated QPD framework to verify robustness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
