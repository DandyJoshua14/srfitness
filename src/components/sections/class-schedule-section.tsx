"use client";

import { useState, useMemo } from 'react';
import type { FitnessClass } from '@/lib/types';
import { fitnessClasses } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ClassSignupModal from '@/components/class-signup-modal';
import { CalendarDays, Filter, Users, Clock } from 'lucide-react';

const daysOfWeek: FitnessClass['day'][] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const classTypes: FitnessClass['type'][] = ["Yoga", "HIIT", "Strength", "Cardio", "Pilates"];

export default function ClassScheduleSection() {
  const [selectedDay, setSelectedDay] = useState<FitnessClass['day'] | 'all'>('all');
  const [selectedType, setSelectedType] = useState<FitnessClass['type'] | 'all'>('all');
  const [selectedClassForSignup, setSelectedClassForSignup] = useState<FitnessClass | null>(null);

  const filteredClasses = useMemo(() => {
    return fitnessClasses.filter(cls => 
      (selectedDay === 'all' || cls.day === selectedDay) &&
      (selectedType === 'all' || cls.type === selectedType)
    );
  }, [selectedDay, selectedType]);

  const openSignupModal = (classItem: FitnessClass) => {
    setSelectedClassForSignup(classItem);
  };

  const closeSignupModal = () => {
    setSelectedClassForSignup(null);
  };

  return (
    <section id="schedule" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Class Schedule</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect class for your fitness goals. Filter by day and type to tailor your schedule.
          </p>
        </div>

        <div className="mb-8 p-6 bg-card border border-border rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label htmlFor="day-filter" className="block text-sm font-medium text-foreground mb-1">Filter by Day</label>
              <Select value={selectedDay} onValueChange={(value) => setSelectedDay(value as FitnessClass['day'] | 'all')}>
                <SelectTrigger id="day-filter" className="w-full">
                  <CalendarDays className="inline-block mr-2 h-4 w-4 text-muted-foreground" />
                  <SelectValue placeholder="Select Day" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Days</SelectItem>
                  {daysOfWeek.map(day => (
                    <SelectItem key={day} value={day}>{day}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="type-filter" className="block text-sm font-medium text-foreground mb-1">Filter by Type</label>
              <Select value={selectedType} onValueChange={(value) => setSelectedType(value as FitnessClass['type'] | 'all')}>
                <SelectTrigger id="type-filter" className="w-full">
                  <Filter className="inline-block mr-2 h-4 w-4 text-muted-foreground" />
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {classTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button 
              onClick={() => { setSelectedDay('all'); setSelectedType('all'); }} 
              variant="outline"
              className="w-full md:w-auto text-foreground border-foreground hover:bg-muted"
            >
              Reset Filters
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto bg-card border border-border rounded-lg shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-muted/20">
                <TableHead className="font-headline text-foreground">Class Name</TableHead>
                <TableHead className="font-headline text-foreground">Trainer</TableHead>
                <TableHead className="font-headline text-foreground">Day</TableHead>
                <TableHead className="font-headline text-foreground">Time</TableHead>
                <TableHead className="font-headline text-foreground">Duration</TableHead>
                <TableHead className="font-headline text-foreground text-center">Spots</TableHead>
                <TableHead className="font-headline text-foreground text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClasses.length > 0 ? filteredClasses.map((cls) => (
                <TableRow key={cls.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium text-foreground">{cls.name} <span className="text-xs text-muted-foreground">({cls.type})</span></TableCell>
                  <TableCell className="text-muted-foreground">{cls.trainerName}</TableCell>
                  <TableCell className="text-muted-foreground">{cls.day}</TableCell>
                  <TableCell className="text-muted-foreground">{cls.time}</TableCell>
                  <TableCell className="text-muted-foreground">{cls.duration}</TableCell>
                  <TableCell className="text-muted-foreground text-center">{cls.spotsAvailable}</TableCell>
                  <TableCell className="text-right">
                    <Button 
                      size="sm" 
                      onClick={() => openSignupModal(cls)}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      disabled={cls.spotsAvailable === 0}
                    >
                      {cls.spotsAvailable > 0 ? 'Sign Up' : 'Full'}
                    </Button>
                  </TableCell>
                </TableRow>
              )) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                    No classes match your criteria. Try adjusting the filters!
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      <ClassSignupModal classInfo={selectedClassForSignup} isOpen={!!selectedClassForSignup} onClose={closeSignupModal} />
    </section>
  );
}
