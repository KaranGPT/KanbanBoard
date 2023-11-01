
function Order(items, parameter) {
  
    if (!Array.isArray(items) || typeof parameter !== 'string') {
      throw new Error('Invalid arguments');
    }
 
    let sortedItems = [...items];
  
    if (parameter === 'title') {
      sortedItems.sort((a, b) => {
        let titleA = a.title.toLowerCase();
        let titleB = b.title.toLowerCase();
  
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });
    } else if (parameter === 'priority') {
      sortedItems.sort((a, b) => b.priority - a.priority);
    }
  
    return sortedItems;
  }
  
  export default Order;
  