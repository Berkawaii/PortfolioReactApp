// Helper function to generate placeholder images for projects
export const generateProjectImage = (title, category) => {
  const colors = {
    web: ['#3498db', '#2980b9'],
    mobile: ['#9b59b6', '#8e44ad'],
    default: ['#1abc9c', '#16a085']
  };

  const getGradient = () => {
    const colorSet = category && colors[category[0]] ? colors[category[0]] : colors.default;
    return `linear-gradient(135deg, ${colorSet[0]}, ${colorSet[1]})`;
  };

  return {
    background: getGradient(),
    letter: title ? title[0].toUpperCase() : 'P'
  };
};
