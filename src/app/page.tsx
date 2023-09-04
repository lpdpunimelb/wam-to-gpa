"use client";

import SubjectTable from "@/components/SubjectTable";
import { Subject, Term } from "@/types";
import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [terms, setTerms] = useState<Term[]>([]);
  const updateSubjects = (index: number, subjects: Subject[]) => {
    const newTerms = [...terms];
    newTerms[index].subjects = subjects;
    setTerms(newTerms);
  };

  const addTerm = () => {
    const term: Term = {
      subjects: [{ name: "", mark: "", credit: "" }],
    };

    setTerms([...terms, term]);
  };

  const removeTerm = (index: number) => {
    setTerms(terms.filter((t, i) => i !== index));
  };

  return (
    <div className="h-screen flex flex-col divide-y">
      <div className="flex-1 overflow-auto">
        <div className="container m-auto max-w-4xl">
          <div className="py-5 px-3">
            <h1 className="text-xl font-bold font-heading">UoM WAM to GPA</h1>
          </div>
        </div>
        {terms.map((term, i) => (
          <SubjectTable
            key={i}
            title={`Term ${i + 1}`}
            subjects={term.subjects}
            onSubjectsChange={(s) => updateSubjects(i, s)}
          />
        ))}
        <div
          onClick={addTerm}
          className="bg-gray-100 border-gray-200 border-[1px] text-gray-500 cursor-pointer p-4 items-center text-center max-w-4xl m-auto my-3 rounded-lg flex flex-row items-center justify-center gap-3"
        >
          <PlusCircleIcon width={24} />
          Add term
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container max-w-5xl m-auto flex flex-row items-center p-3 gap-4">
          <div className="flex-1 text-sm text-sky-700">
            See how GPA is calculated
          </div>
          <div>
            Your GPA is <b>3.73</b>
          </div>
          <button className="rounded px-3 py-2 text-white bg-sky-900">
            Save as PDF
          </button>
        </div>
      </div>
    </div>
  );
}
