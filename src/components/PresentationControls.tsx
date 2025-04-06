
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

interface PresentationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onExport: () => void;
}

const PresentationControls: React.FC<PresentationControlsProps> = ({ 
  currentSlide, 
  totalSlides, 
  onPrevious, 
  onNext, 
  onExport 
}) => {
  return (
    <div className="presentation-controls fixed bottom-0 left-0 right-0 p-4 flex justify-between items-center z-10">
      <div className="flex items-center gap-2">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={onPrevious} 
          disabled={currentSlide === 0}
          className="h-9 w-9 border-cyan-700 hover:bg-cyan-900 text-cyan-400"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <span className="text-sm text-cyan-400">
          {currentSlide + 1} / {totalSlides}
        </span>
        
        <Button 
          variant="outline" 
          size="icon" 
          onClick={onNext} 
          disabled={currentSlide === totalSlides - 1}
          className="h-9 w-9 border-cyan-700 hover:bg-cyan-900 text-cyan-400"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
      
      <Button 
        variant="outline" 
        onClick={onExport} 
        className="border-cyan-700 hover:bg-cyan-900 text-cyan-400"
      >
        <Download className="h-4 w-4 mr-2" />
        Export
      </Button>
    </div>
  );
};

export default PresentationControls;
