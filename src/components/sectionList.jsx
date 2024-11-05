import { Input } from "./ui/input";

function Section({ section, onAddSubsection }) {
  return (
    <div className="ml-5 p-4 border-2 border-gray-300">
      <h4>{section.title}</h4>
      <Input className="mb-2" type="text" />
      <button
        onClick={() => onAddSubsection(section.id)}
        className="bg-blue-500 px-3 py-2 rounded mb-2"
      >
        Add Subsection
      </button>
      {section.subsections.map((subsection) => (
        <Section
          key={subsection.id}
          section={subsection}
          onAddSubsection={onAddSubsection}
        />
      ))}
    </div>
  );
}

export default function SectionList({ sections, onAddSubsection }) {
  return (
    <div>
      {sections.map((section) => (
        <Section
          key={section.id}
          section={section}
          onAddSubsection={onAddSubsection}
        />
      ))}
    </div>
  );
}
