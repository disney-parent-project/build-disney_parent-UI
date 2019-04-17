
class TabLink {
    constructor(tab, element) {
      // Assign this.element to the passed in DOM element
      this.element= element;
      this.tab = tab;
      // Get the custom data attribute on the Link
      this.data = this.tab.querySelector(`.reviews-link[data-tab='${this.element.dataset.tab}']`);
      
      // Using the custom data attribute get the associated Item element
      this.itemElement = this.tab.querySelector(`.review-item[data-tab='${this.element.dataset.tab}']`);
      
      // Using the Item element, create a new instance of the TabItem class
      this.tabItem =new TabItem(this.tab, this.itemElement);
      
      // Add a click event listener on this instance, calling the select method on click
      this.element.addEventListener("click", () => this.select());
      
    };
  
    select() {
      // // Get all of the elements with the tabs-link class
      const links = this.tab.querySelectorAll('.reviews-link');
  
      // // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
      Array.from(links).forEach(function(link){
       link.classList.remove('reviews-link-selected');
       });
      
      // // Add a class named "tabs-link-selected" to this link
      this.element.classList.toggle('reviews-link-selected');
      
      // // Call the select method on the item associated with this link
      this.tabItem.select();
      
    }
  }
  
  class TabItem {
    constructor(tab, element) {
      // Assign this.element to the passed in element
     this.element = element;
     this.tab = tab;
    }
  
    select() {
      // Select all ".tabs-item" elements from the DOM
      const items = this.tab.querySelectorAll('.review-item');
  
      // Remove the class "tabs-item-selected" from each element
      Array.from(items).forEach(function(item){
        item.classList.remove('review-item-selected');
        });
     
      // Add a class named "tabs-item-selected" to this element
      console.log(this.element);
      this.element.classList.toggle('review-item-selected');
    }
  }
  
  /* START HERE: 
  
  - Select all classes named ".tabs-link" and assign that value to the links variable
  
  - With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList
  
  - In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter
  
  */
  const tabs = document.querySelectorAll('.reviews');
  tabs.forEach(tab => {
  const links = tab.querySelectorAll('.reviews-link');
  
  links.forEach(function(link){
    new TabLink(tab, link);
  });
  })
  