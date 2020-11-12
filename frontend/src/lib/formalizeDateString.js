const formalizeDateString = (dueDate) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return dueDate ? new Date(dueDate).toLocaleString('en-US', options) : 'No due date';
};

export default formalizeDateString;
