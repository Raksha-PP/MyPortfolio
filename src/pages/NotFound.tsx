
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-200 text-white p-4">
      <div className="glass-card p-10 max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">The page you're looking for doesn't exist</p>
        
        <Button asChild className="bg-orange-500 hover:bg-orange-400 transition-colors">
          <Link to="/" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
