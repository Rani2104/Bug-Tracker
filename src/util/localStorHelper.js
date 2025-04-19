export const getBugs = () => {
    return JSON.parse(localStorage.getItem('bugs')) || [];
  };
  
  export const saveBugs = (bugs) => {
    localStorage.setItem('bugs', JSON.stringify(bugs));
  };
  
  export const getBugById = (id) => {
    const bugs = getBugs();
    return bugs.find((bug) => bug.id === id);
  };
  export const deleteBugById = (id) => {
    const bugs = getBugs().filter((bug) => bug.id !== id);
    saveBugs(bugs);
  };
  