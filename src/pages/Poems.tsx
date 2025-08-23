import PoemCard from "@/components/PoemCard";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const poems = [
  "எனக்கும் அவளுக்குமான உறவு,\nஎனை மறந்து ஒன்றில் ஆழ்ந்துபோகையிலே...\nஏதோ ஓர் உருவத்தில் \nஎனை வந்தடைந்து விடுகிறாள்.....\nதமிழ்!!!",
  "செயற்கையாய் செயல்படாதே....\nஇயற்கையாய் இயங்க கற்றுக்கொள்!",
  "வேரின் வியர்வை தான் மலரின் ஒளி!\nஇருப்பினும்,\nவேரோடு மலர் இணைவதில்லை...\nமலரோடு வேர் இணைவதில்லை..",
  "நட்சத்திரங்களின் நிசப்தம் அவள்!\nகூச்சலின்றி மின்னுகிறாள்....",
];

const Poems = () => {
  return (
    <div className="min-h-screen w-full p-4 sm:p-8 font-serif text-gray-200">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="inline-flex items-center text-lg hover:text-violet-400 mb-8 group">
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Anu's Poems</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
          {poems.map((poem, index) => (
            <PoemCard key={index} poem={poem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Poems;