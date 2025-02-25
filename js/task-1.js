function getDataOfCategories() {
  const categories = document.querySelectorAll('.item');
  console.log('Number of categories: ' + categories.length);

  categories.forEach(element => {
    console.log('Category: ' + element.querySelector('h2').textContent);

    const submenuItems = element.querySelectorAll('li');
    console.log('Elements: ' + submenuItems.length);
  });
}

getDataOfCategories(categories);
