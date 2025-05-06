import c2 from '~/assets/images/carousel/c2.jpeg';
import ra from '~/assets/images/research/areas.jpg';
import hl from '~/assets/images/research/5097.jpg';
import crp from '~/assets/images/research/crp.jpg';
export default function ResearchSection() {
    const researchItems = [
      {
        title: "Faculty Profiles",
        subtitle: "Explore Research faculties across different departents",
        image: c2,
        link: "/research/faculty"
      },
      {
        title: "Research Highlights By IIUC",
        subtitle: "Explore different journal papers, conference papers, and other research works by IIUC faculties",
        image: hl,
        link: "/research/highlights"
      },
      {
        title: "Center For Research & Publications(CRP)",
        subtitle: "Creating new knowledge in different branches of disciplines",
        image: crp,
        link: "/research/crp"

        
      },
      {
        title: "Research Areas",
        subtitle: "Research areas are focused to lead the 4th industrial revolution and address the challenges of the 21st century",
        image: ra,
        link: "/research/areas"
      },
    ];
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 sm:text-4xl">
              Research
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Pioneering discoveries that shape the future
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="group relative block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <img
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {item.subtitle}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }