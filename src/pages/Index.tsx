
import React, { useState } from 'react';
import TitleSlide from '@/components/TitleSlide';
import Slide from '@/components/Slide';
import PresentationControls from '@/components/PresentationControls';
import { toast } from '@/components/ui/use-toast';
import { 
  ConcurrentIcon,
  TaskIcon,
  TaskSwitchingIcon,
  ContextIcon,
  CpuRegistersIcon,
  ContfizIcon,
  SaveContextIcon,
  RestoreContextIcon,
  InterruptIcon,
  TaskQueueIcon,
  RealWorldIcon
} from '@/components/SvgIcons';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: 'title',
      title: 'Task Switching in Concurrent Programming',
      subtitle: 'Understanding the Foundations of Multitasking',
    },
    {
      type: 'content',
      title: 'What is Concurrent Programming?',
      visual: <ConcurrentIcon />,
      bulletPoints: [
        'Multiple tasks executed during overlapping time periods.',
        'Creates illusion of parallelism on single-core processors.',
        'Maximizes CPU utilization when tasks wait for resources.'
      ]
    },
    {
      type: 'content',
      title: 'What is a Task?',
      visual: <TaskIcon />,
      bulletPoints: [
        'Independent sequence of instructions with own execution context.',
        'Contains registers, stack, program counter, and memory space.',
        'Smallest unit that can be independently scheduled.'
      ]
    },
    {
      type: 'content',
      title: 'Role of Task Switching in Multitasking',
      visual: <TaskSwitchingIcon />,
      bulletPoints: [
        'Enables processor to handle multiple tasks through time-sharing.',
        'Preserves task state during switching to ensure continuity.',
        'Creates illusion that multiple programs run simultaneously.'
      ]
    },
    {
      type: 'content',
      title: 'Physical vs Logical Context of a Task',
      visual: <ContextIcon />,
      bulletPoints: [
        'Physical: CPU registers, stack pointer, program counter.',
        'Logical: Memory allocations, open files, execution flags.',
        'Both contexts must be preserved during task switching.'
      ]
    },
    {
      type: 'content',
      title: 'CPU Registers Involved in Context Switching',
      visual: <CpuRegistersIcon />,
      bulletPoints: [
        'General-purpose registers (R0-R12) store computation values.',
        'Special registers: Stack Pointer, Link Register, Program Counter.',
        'Status Register (XPSR) contains processor state flags.'
      ]
    },
    {
      type: 'content',
      title: 'CONTFIZ Structure – Physical Context in Code',
      visual: <ContfizIcon />,
      bulletPoints: [
        'Data structure holding complete CPU register state for a task.',
        'Includes general registers, SP, LR, PC, and XPSR.',
        'C representation of the physical execution context.'
      ]
    },
    {
      type: 'content',
      title: 'Saving Task Context – Before Switching',
      visual: <SaveContextIcon />,
      bulletPoints: [
        'Push all registers to task stack or dedicated memory area.',
        'Update task control block with current execution state.',
        'Ensure interrupts are disabled during context saving.'
      ]
    },
    {
      type: 'content',
      title: 'Restoring Task Context – Resuming Execution',
      visual: <RestoreContextIcon />,
      bulletPoints: [
        'Retrieve saved register values from memory/stack.',
        'Reload CPU registers including program counter.',
        'Resume execution from the saved instruction address.'
      ]
    },
    {
      type: 'content',
      title: 'Role of Interrupts in Switching',
      visual: <InterruptIcon />,
      bulletPoints: [
        'Hardware interrupt triggers context switch at precise timing points.',
        'Systick timer generates consistent switching opportunities.',
        'Synchronizes task switching with hardware events.'
      ]
    },
    {
      type: 'content',
      title: 'Managing Task Queues (_lap, _ltb)',
      visual: <TaskQueueIcon />,
      bulletPoints: [
        '_lap (List of Active Processes) tracks ready-to-run tasks.',
        '_ltb (List of Task Blocks) stores all available task information.',
        'Scheduler selects next task from queues based on priority.'
      ]
    },
    {
      type: 'content',
      title: 'Real-World Uses: RTOS, Embedded, OS Kernels',
      visual: <RealWorldIcon />,
      bulletPoints: [
        'Real-Time Operating Systems require deterministic task switching.',
        'Embedded systems optimize context switch for minimal overhead.',
        'Modern OS kernels balance efficiency with complex task states.'
      ]
    }
  ];

  const handlePrevious = () => {
    setCurrentSlide(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1));
  };

  const handleExport = () => {
    toast({
      title: "Export Initiated",
      description: "Your presentation is being prepared for download as PPTX.",
      duration: 3000,
    });
    // In a real app, this would trigger a PPTX generation process
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      handlePrevious();
    }
  };

  return (
    <div 
      className="grid-background min-h-screen flex flex-col items-center justify-center p-8"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="w-full max-w-6xl aspect-[16/9] mx-auto">
        {slides.map((slide, index) => 
          slide.type === 'title' ? (
            <TitleSlide 
              key={index}
              title={slide.title}
              subtitle={slide.subtitle}
              isActive={currentSlide === index}
            />
          ) : (
            <Slide 
              key={index}
              title={slide.title}
              visual={slide.visual}
              bulletPoints={slide.bulletPoints}
              isActive={currentSlide === index}
            />
          )
        )}
      </div>

      <PresentationControls 
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onExport={handleExport}
      />
    </div>
  );
};

export default Index;
