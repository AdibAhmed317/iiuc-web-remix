import LibraryImg from '../../../assets/images/library.jpg'
import { welcome_description } from '~/assets/data/messages';  

export default function WelcomeIiuc(){
 

    const truncateMessage = (text: string, limit: number) =>
        text.length > limit ? `${text.slice(0, limit)}...` : text;

  return (
    <div className="bg-gray-100">  
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl text-gray-600 mb-4">Welcome To IIUC</h2>

            <hr className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6" />
            
            <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-6">
                    
                    <img 
                        src={LibraryImg}
                        alt="Welcome To IIUC"
                        className="w-full md:w-2/5 rounded-lg object-cover h-fit"
                        />
                    <div className="flex-1 space-y-4">
                        <p className="text-justify">
                            {truncateMessage(welcome_description, 1500)}
                        </p>
                      
                    </div>
                    
                </div>
            </div>
          </div>
        </div>
          
      </section>
    </div>
  );
};

