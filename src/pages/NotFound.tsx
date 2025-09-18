import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto animate-fade-in">
          <div className="text-8xl md:text-9xl font-heading font-bold text-gradient mb-6">
            404
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Page Not Found
          </h1>
          <p className="text-xl font-body text-muted-foreground mb-12 leading-relaxed">
            Oops! The page you're looking for doesn't exist. Let's get you back to exploring 
            Meghana's work in healthcare innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <button className="btn-hero">
                Back to Home
              </button>
            </Link>
            <Link to="/projects">
              <button className="btn-hero-outline">
                View Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
