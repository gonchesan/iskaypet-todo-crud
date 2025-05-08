const getTasks = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_start=0&_limit=3',
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
    //   .then((response) => response.json())
    //   .then((value) => {
    //     console.log(value);
    //   });
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export { getTasks };
