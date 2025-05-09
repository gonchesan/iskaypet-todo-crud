const getTasks = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_page=1&_limit=3',
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export { getTasks };
