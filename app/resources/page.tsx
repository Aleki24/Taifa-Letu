'use client';

import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Search,
  Download,
  Eye,
  Calendar,
  Tag,
  Filter,
  Loader2,
} from 'lucide-react';
import {
  getFilteredTextbooks,
  getFilteredExams,
  getFilteredNotes,
  incrementNoteViewCount,
} from './actions';

// ---------- TYPES ----------
type Grade = 'grade_1' | 'grade_2' | 'grade_3' | 'grade_4' | 'grade_5' | 'grade_6' |
  'grade_7' | 'grade_8' | 'grade_9' | 'grade_10' | 'grade_11' | 'grade_12';

type Subject = 'mathematics' | 'english' | 'kiswahili' | 'science' | 'biology' |
  'chemistry' | 'physics' | 'history' | 'geography' | 'business_studies' |
  'computer_studies' | 'agriculture' | 'home_science' | 'art_design' |
  'music' | 'physical_education' | 'cre' | 'ire' | 'hre';

type Curriculum = 'cbc' | 'cambridge';

interface TextbookData {
  id: number;
  title: string;
  description: string | null;
  grade: Grade;
  subject: Subject;
  curriculum: Curriculum;
  fileUrl: string;
  pageCount: number | null;
  uploadedByName: string | null;
  createdAt: Date;
}

interface ExamData {
  id: number;
  title: string;
  grade: Grade;
  subject: Subject;
  curriculum: Curriculum;
  examType: string | null;
  year: number | null;
  term: string | null;
  hasAnswers: 'yes' | 'no';
  fileUrl: string;
  uploadedByName: string | null;
  createdAt: Date;
}

interface NoteData {
  id: number;
  title: string;
  content: string;
  grade: Grade;
  subject: Subject;
  curriculum: Curriculum;
  topic: string | null;
  viewCount: number | null;
  authorName: string | null;
  createdAt: Date;
}

// ---------- MAIN COMPONENT ----------
export default function ClientInterfacePage() {
  const [activeSection, setActiveSection] = useState<'notes' | 'textbooks' | 'exams'>('notes');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGrade, setSelectedGrade] = useState<Grade | ''>('');
  const [selectedSubject, setSelectedSubject] = useState<Subject | ''>('');
  const [selectedCurriculum, setSelectedCurriculum] = useState<Curriculum | ''>('');
  const [selectedNote, setSelectedNote] = useState<NoteData | null>(null);

  const [textbooks, setTextbooks] = useState<TextbookData[]>([]);
  const [exams, setExams] = useState<ExamData[]>([]);
  const [notes, setNotes] = useState<NoteData[]>([]);
  const [loading, setLoading] = useState(false);

  const grades: Grade[] = [
    'grade_1', 'grade_2', 'grade_3', 'grade_4', 'grade_5', 'grade_6',
    'grade_7', 'grade_8', 'grade_9', 'grade_10', 'grade_11', 'grade_12'
  ];

  const subjects: Subject[] = [
    'mathematics', 'english', 'kiswahili', 'science', 'biology',
    'chemistry', 'physics', 'history', 'geography', 'business_studies',
    'computer_studies', 'agriculture', 'home_science', 'art_design',
    'music', 'physical_education', 'cre', 'ire', 'hre'
  ];

  const curriculums: Curriculum[] = ['cbc', 'cambridge'];

  // Fetch data based on active section and filters
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const grade = selectedGrade || undefined;
        const subject = selectedSubject || undefined;
        const curriculum = selectedCurriculum || undefined;
        const query = searchQuery || undefined;

        if (activeSection === 'textbooks') {
          const data = await getFilteredTextbooks(grade, subject, curriculum, query);
          setTextbooks(data);
        } else if (activeSection === 'exams') {
          const data = await getFilteredExams(grade, subject, curriculum, query);
          setExams(data);
        } else if (activeSection === 'notes') {
          const data = await getFilteredNotes(grade, subject, curriculum, query);
          setNotes(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeSection, selectedGrade, selectedSubject, selectedCurriculum, searchQuery]);

  const formatDate = (date: Date): string =>
    new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

  const formatGrade = (grade: string) => 
    grade.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  const formatSubject = (subject: string) => 
    subject.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  const formatCurriculum = (curriculum: string) =>
    curriculum.toUpperCase();

  const handleNoteClick = async (note: NoteData) => {
    setSelectedNote(note);
    try {
      await incrementNoteViewCount(note.id);
    } catch (error) {
      console.error('Error incrementing view count:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ---------- HEADER ---------- */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-blue-500 p-3 rounded-full">
                <BookOpen className="text-white" size={32} />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">
                Learning Resources
              </h1>
            </div>
            <p className="text-lg text-gray-600">
              Access quality educational materials for CBC and Cambridge curriculums
            </p>
          </div>

          {/* ---------- SEARCH ---------- */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-blue-400 focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>
      </header>

      {/* ---------- NAVIGATION TABS ---------- */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {(['notes', 'textbooks', 'exams'] as const).map((section) => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section);
                  setSelectedNote(null);
                }}
                className={`px-8 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
                  activeSection === section
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- FILTERS ---------- */}
      <div className="bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-md p-6 flex gap-4 items-center flex-wrap">
            <div className="flex items-center gap-2 text-gray-700 font-semibold">
              <Filter size={20} className="text-blue-500" />
              <span>Filters:</span>
            </div>
            
            <select
              value={selectedCurriculum}
              onChange={(e) => setSelectedCurriculum(e.target.value as Curriculum | '')}
              className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none"
            >
              <option value="">All Curriculums</option>
              {curriculums.map((curriculum) => (
                <option key={curriculum} value={curriculum}>
                  {formatCurriculum(curriculum)}
                </option>
              ))}
            </select>

            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value as Grade | '')}
              className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none"
            >
              <option value="">All Grades</option>
              {grades.map((grade) => (
                <option key={grade} value={grade}>
                  {formatGrade(grade)}
                </option>
              ))}
            </select>

            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value as Subject | '')}
              className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none"
            >
              <option value="">All Subjects</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {formatSubject(subject)}
                </option>
              ))}
            </select>

            {(selectedGrade || selectedSubject || selectedCurriculum) && (
              <button
                onClick={() => {
                  setSelectedGrade('');
                  setSelectedSubject('');
                  setSelectedCurriculum('');
                }}
                className="text-sm text-blue-500 hover:text-blue-600 font-semibold underline"
              >
                Clear All Filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ---------- CONTENT ---------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="animate-spin text-blue-500" size={48} />
          </div>
        )}

        {/* NOTES */}
        {!loading && activeSection === 'notes' && !selectedNote && (
          <div className="space-y-6">
            {notes.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl shadow-md">
                <p className="text-xl text-gray-500">No notes found. Try adjusting your filters.</p>
              </div>
            )}
            {notes.map((note) => (
              <article
                key={note.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 cursor-pointer border border-gray-100"
                onClick={() => handleNoteClick(note)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className="px-4 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase">
                        {formatCurriculum(note.curriculum)}
                      </span>
                      <span className="px-4 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">
                        {formatGrade(note.grade)}
                      </span>
                      <span className="px-4 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full">
                        {formatSubject(note.subject)}
                      </span>
                      {note.topic && (
                        <span className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                          <Tag size={12} />
                          {note.topic}
                        </span>
                      )}
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-3 hover:text-blue-500 transition-colors">
                      {note.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">{note.content}</p>

                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <Calendar size={16} />
                        {formatDate(note.createdAt)}
                      </span>
                      <span className="flex items-center gap-2">
                        <Eye size={16} />
                        {note.viewCount || 0} views
                      </span>
                      {note.authorName && (
                        <span className="font-medium">By {note.authorName}</span>
                      )}
                    </div>
                  </div>

                  <button className="ml-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition-colors shadow-md">
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* SINGLE NOTE VIEW */}
        {!loading && activeSection === 'notes' && selectedNote && (
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <button
              onClick={() => setSelectedNote(null)}
              className="mb-6 text-blue-500 hover:text-blue-600 font-semibold text-lg"
            >
              ← Back to Notes
            </button>
            <div className="mb-6 flex gap-2 flex-wrap">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold rounded-full uppercase">
                {formatCurriculum(selectedNote.curriculum)}
              </span>
              <span className="px-4 py-2 bg-yellow-100 text-yellow-700 text-sm font-bold rounded-full">
                {formatGrade(selectedNote.grade)}
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-bold rounded-full">
                {formatSubject(selectedNote.subject)}
              </span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">{selectedNote.title}</h1>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
              {selectedNote.content}
            </div>
          </div>
        )}

        {/* TEXTBOOKS */}
        {!loading && activeSection === 'textbooks' && (
          <div>
            {textbooks.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl shadow-md">
                <p className="text-xl text-gray-500">No textbooks found. Try adjusting your filters.</p>
              </div>
            )}
            {grades.map((grade) => {
              const gradeTextbooks = textbooks.filter((t) => t.grade === grade);
              if (gradeTextbooks.length === 0) return null;
              return (
                <div key={grade} className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{formatGrade(grade)}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {gradeTextbooks.map((textbook) => (
                      <div
                        key={textbook.id}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 border-t-4 border-blue-500"
                      >
                        <div className="mb-3 flex gap-2 flex-wrap">
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded uppercase">
                            {formatCurriculum(textbook.curriculum)}
                          </span>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded">
                            {formatSubject(textbook.subject)}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {textbook.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                          {textbook.description || 'No description available'}
                        </p>
                        {textbook.pageCount && (
                          <p className="text-xs text-gray-500 mb-4 font-medium">
                            {textbook.pageCount} pages
                          </p>
                        )}
                        <a
                          href={textbook.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full flex items-center justify-center gap-2 font-semibold transition-colors shadow-md"
                        >
                          <Download size={18} /> Download PDF
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* EXAMS */}
        {!loading && activeSection === 'exams' && (
          <div>
            {exams.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl shadow-md">
                <p className="text-xl text-gray-500">No exams found. Try adjusting your filters.</p>
              </div>
            )}
            {grades.map((grade) => {
              const gradeExams = exams.filter((e) => e.grade === grade);
              if (gradeExams.length === 0) return null;
              return (
                <div key={grade} className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{formatGrade(grade)}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {gradeExams.map((exam) => (
                      <div
                        key={exam.id}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 border-t-4 border-yellow-500"
                      >
                        <div className="mb-3 flex gap-2 flex-wrap">
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded uppercase">
                            {formatCurriculum(exam.curriculum)}
                          </span>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded">
                            {formatSubject(exam.subject)}
                          </span>
                          {exam.hasAnswers === 'yes' && (
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">
                              With Answers
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{exam.title}</h3>
                        <div className="text-sm text-gray-600 mb-2 font-medium">
                          {exam.year && `${exam.year} — `}
                          {exam.term && exam.term.replace('_', ' ').toUpperCase()}
                        </div>
                        {exam.examType && (
                          <p className="text-xs text-gray-500 mb-4 capitalize font-medium">
                            {exam.examType.replace('_', ' ')}
                          </p>
                        )}
                        <a
                          href={exam.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-950 py-3 rounded-full flex items-center justify-center gap-2 font-bold transition-colors shadow-md"
                        >
                          <Download size={18} /> Download Exam
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}