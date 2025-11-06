'use client';

import React, { useState, ChangeEvent } from 'react';
import { Upload, BookOpen, FileText, GraduationCap, Plus, Check, X } from 'lucide-react';

// --- Constants ---
const grades = [
  'grade_1', 'grade_2', 'grade_3', 'grade_4', 'grade_5', 'grade_6',
  'grade_7', 'grade_8', 'grade_9', 'grade_10', 'grade_11', 'grade_12',
] as const;

const subjects = [
  'mathematics', 'english', 'kiswahili', 'science', 'biology',
  'chemistry', 'physics', 'history', 'geography', 'business_studies',
  'computer_studies', 'agriculture', 'home_science', 'art_design',
  'music', 'physical_education', 'cre', 'ire', 'hre',
] as const;

const examTypes = ['mid-term', 'end-term', 'mock', 'KCSE', 'KCPE'] as const;
const terms = ['term_1', 'term_2', 'term_3'] as const;

// --- Type Definitions ---
type Grade = typeof grades[number];
type Subject = typeof subjects[number];
type ExamType = typeof examTypes[number];
type Term = typeof terms[number];

interface Notification {
  message: string;
  type: 'success' | 'error';
}

interface TextbookFormData {
  title: string;
  description: string;
  grade: Grade | '';
  subject: Subject | '';
  fileUrl: string;
  fileName: string;
  fileSize: string;
  mimeType: string;
  pageCount: string;
}

interface ExamFormData {
  title: string;
  grade: Grade | '';
  subject: Subject | '';
  examType: ExamType | '';
  year: number;
  term: Term | '';
  fileUrl: string;
  fileName: string;
  hasAnswers: 'yes' | 'no';
}

interface NoteFormData {
  title: string;
  content: string;
  grade: Grade | '';
  subject: Subject | '';
  topic: string;
  isPublic: 'yes' | 'no';
}

// --- Main Component ---
export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'textbooks' | 'exams' | 'notes'>('textbooks');
  const [notification, setNotification] = useState<Notification | null>(null);

  const [textbookForm, setTextbookForm] = useState<TextbookFormData>({
    title: '',
    description: '',
    grade: '',
    subject: '',
    fileUrl: '',
    fileName: '',
    fileSize: '',
    mimeType: 'application/pdf',
    pageCount: '',
  });

  const [examForm, setExamForm] = useState<ExamFormData>({
    title: '',
    grade: '',
    subject: '',
    examType: '',
    year: new Date().getFullYear(),
    term: '',
    fileUrl: '',
    fileName: '',
    hasAnswers: 'no',
  });

  const [noteForm, setNoteForm] = useState<NoteFormData>({
    title: '',
    content: '',
    grade: '',
    subject: '',
    topic: '',
    isPublic: 'yes',
  });

  // --- Notification helper ---
  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // --- Submit Handlers ---
  const handleTextbookSubmit = async () => {
    if (!textbookForm.title || !textbookForm.grade || !textbookForm.subject || !textbookForm.fileUrl) {
      showNotification('Please fill in all required fields', 'error');
      return;
    }
    try {
      console.log('Textbook submitted:', textbookForm);
      showNotification('Textbook added successfully!');
      setTextbookForm({
        title: '',
        description: '',
        grade: '',
        subject: '',
        fileUrl: '',
        fileName: '',
        fileSize: '',
        mimeType: 'application/pdf',
        pageCount: '',
      });
    } catch {
      showNotification('Error adding textbook', 'error');
    }
  };

  const handleExamSubmit = async () => {
    if (!examForm.title || !examForm.grade || !examForm.subject || !examForm.fileUrl) {
      showNotification('Please fill in all required fields', 'error');
      return;
    }
    try {
      console.log('Exam submitted:', examForm);
      showNotification('Exam added successfully!');
      setExamForm({
        title: '',
        grade: '',
        subject: '',
        examType: '',
        year: new Date().getFullYear(),
        term: '',
        fileUrl: '',
        fileName: '',
        hasAnswers: 'no',
      });
    } catch {
      showNotification('Error adding exam', 'error');
    }
  };

  const handleNoteSubmit = async () => {
    if (!noteForm.title || !noteForm.content || !noteForm.grade || !noteForm.subject) {
      showNotification('Please fill in all required fields', 'error');
      return;
    }
    try {
      console.log('Note submitted:', noteForm);
      showNotification('Note added successfully!');
      setNoteForm({ title: '', content: '', grade: '', subject: '', topic: '', isPublic: 'yes' });
    } catch {
      showNotification('Error adding note', 'error');
    }
  };

  // --- JSX ---
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {notification && (
        <div
          className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 ${
            notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white`}
        >
          {notification.type === 'success' ? <Check size={20} /> : <X size={20} />}
          {notification.message}
        </div>
      )}

      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="text-indigo-600" size={32} />
            <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          </div>
          <p className="text-gray-600 mt-1">Manage educational resources</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-lg shadow-md p-2 flex gap-2">
          {[
            { key: 'textbooks', label: 'Textbooks', icon: BookOpen },
            { key: 'exams', label: 'Exams', icon: FileText },
            { key: 'notes', label: 'Notes', icon: Upload },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as 'textbooks' | 'exams' | 'notes')}
              className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all ${
                activeTab === key
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon size={20} />
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'textbooks' && (
          <TextbookForm form={textbookForm} setForm={setTextbookForm} onSubmit={handleTextbookSubmit} />
        )}
        {activeTab === 'exams' && (
          <ExamForm form={examForm} setForm={setExamForm} onSubmit={handleExamSubmit} />
        )}
        {activeTab === 'notes' && (
          <NoteForm form={noteForm} setForm={setNoteForm} onSubmit={handleNoteSubmit} />
        )}
      </div>
    </div>
  );
}

// --- Form Components ---
interface FormProps<T> {
  form: T;
  setForm: React.Dispatch<React.SetStateAction<T>>;
  onSubmit: () => void;
}

function TextbookForm({ form, setForm, onSubmit }: FormProps<TextbookFormData>) {
  return (
    <FormCard title="Add New Textbook" onSubmit={onSubmit}>
      <Input label="Title *" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <Select label="Grade *" options={grades} value={form.grade} onChange={(e) => setForm({ ...form, grade: e.target.value as Grade })} />
      <Select label="Subject *" options={subjects} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value as Subject })} />
      <Input label="File URL *" type="url" value={form.fileUrl} onChange={(e) => setForm({ ...form, fileUrl: e.target.value })} />
      <Input label="File Name" value={form.fileName} onChange={(e) => setForm({ ...form, fileName: e.target.value })} />
      <Input label="Page Count" type="number" value={form.pageCount} onChange={(e) => setForm({ ...form, pageCount: e.target.value })} />
      <Textarea label="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
    </FormCard>
  );
}

function ExamForm({ form, setForm, onSubmit }: FormProps<ExamFormData>) {
  return (
    <FormCard title="Add New Exam" onSubmit={onSubmit}>
      <Input label="Title *" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <Select label="Grade *" options={grades} value={form.grade} onChange={(e) => setForm({ ...form, grade: e.target.value as Grade })} />
      <Select label="Subject *" options={subjects} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value as Subject })} />
      <Select label="Exam Type" options={examTypes} value={form.examType} onChange={(e) => setForm({ ...form, examType: e.target.value as ExamType })} />
      <Input label="Year" type="number" value={form.year} onChange={(e) => setForm({ ...form, year: Number(e.target.value) })} />
      <Select label="Term" options={terms} value={form.term} onChange={(e) => setForm({ ...form, term: e.target.value as Term })} />
      <Input label="File URL *" type="url" value={form.fileUrl} onChange={(e) => setForm({ ...form, fileUrl: e.target.value })} />
      <Select
        label="Has Answers?"
        options={['yes', 'no']}
        value={form.hasAnswers}
        onChange={(e) => setForm({ ...form, hasAnswers: e.target.value as 'yes' | 'no' })}
      />
    </FormCard>
  );
}

function NoteForm({ form, setForm, onSubmit }: FormProps<NoteFormData>) {
  return (
    <FormCard title="Add New Note" onSubmit={onSubmit}>
      <Input label="Title *" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <Input label="Topic" value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })} />
      <Select label="Grade *" options={grades} value={form.grade} onChange={(e) => setForm({ ...form, grade: e.target.value as Grade })} />
      <Select label="Subject *" options={subjects} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value as Subject })} />
      <Select
        label="Visibility"
        options={['yes', 'no']}
        value={form.isPublic}
        onChange={(e) => setForm({ ...form, isPublic: e.target.value as 'yes' | 'no' })}
      />
      <Textarea label="Content *" value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} rows={10} />
    </FormCard>
  );
}

// --- Shared UI Components ---
interface FormCardProps {
  title: string;
  onSubmit: () => void;
  children: React.ReactNode;
}

function FormCard({ title, onSubmit, children }: FormCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Plus size={24} />
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
      <button
        onClick={onSubmit}
        className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium flex items-center justify-center gap-2"
      >
        <Plus size={20} /> Submit
      </button>
    </div>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Input({ label, type = 'text', ...props }: InputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        {...props}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: readonly string[];
}

function Select({ label, options, ...props }: SelectProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select
        {...props}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt.replace('_', ' ').toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

function Textarea({ label, rows = 3, ...props }: TextareaProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <textarea
        {...props}
        rows={rows}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>
  );
}
