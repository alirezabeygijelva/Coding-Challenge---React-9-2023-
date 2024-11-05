import { useReducer } from "react";
import SectionList from "./sectionList";
import sectionReducer, { initialData } from "../utils/sectionReducer";

export default function Book() {
  const [sections, dispatch] = useReducer(sectionReducer, initialData);

  const handleAddSubsection = (parentId) => {
    const newSection = {
      id: Date.now(),
      title: "New Subsection",
      description: "",
      subsections: [],
    };
    dispatch({ type: "ADD_SECTION", parentId, newSection });
  };

  return (
    <div className="p-6">
      <h2 className="font-bold text-lg">Book Sections</h2>
      <SectionList sections={sections} onAddSubsection={handleAddSubsection} />
    </div>
  );
}
