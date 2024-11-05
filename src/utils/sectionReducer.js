export const initialData = [
  {
    id: 1,
    title: "Introduction",
    description: "",
    subsections: [],
  },
];

export default function sectionReducer(state, action) {
  switch (action.type) {
    case "ADD_SECTION":
      return addSection(state, action.parentId, action.newSection);
    case "UPDATE_SECTION":
      return updateSection(state, action.sectionId, action.updatedData);
    case "UPDATE_TITLE":
      return updateTitle(action.title);
    default:
      return state;
  }
}

const addSection = (sections, parentId, newSection) => {
  return sections.map((section) => {
    if (section.id === parentId) {
      return {
        ...section,
        subsections: [...section.subsections, newSection],
      };
    } else if (section.subsections.length > 0) {
      return {
        ...section,
        subsections: addSection(section.subsections, parentId, newSection),
      };
    } else {
      return section;
    }
  });
};

const updateSection = (sections, sectionId, updatedData) => {
  return sections.map((section) => {
    if (section.id === sectionId) {
      return { ...section, ...updatedData };
    } else if (section.subsections.length > 0) {
      return {
        ...section,
        subsections: updateSection(section.subsections, sectionId, updatedData),
      };
    } else {
      return section;
    }
  });
};
