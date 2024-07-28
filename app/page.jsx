import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";


// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I<span className="text-accent">&apos;</span>m <br />{" "}
              <span>
                Salman
                <span className="text-accent text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  {" "}
                  Farcy
                </span>
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crefting elegant diglital experiences and I am
              proficient in various programming languages and technologies
            </p>

            {/* btn */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 hover:text-primary"
              >
                <span>Download Cv</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0 ">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 flex justify-center items-center "
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>

        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
