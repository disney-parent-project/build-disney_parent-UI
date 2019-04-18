
class TabLink {
    constructor(tab, element) {
      this.element= element;
      this.tab = tab;
      this.data = this.tab.querySelector(`.reviews-link[data-tab='${this.element.dataset.tab}']`);
      
      this.itemElement = this.tab.querySelector(`.review-item[data-tab='${this.element.dataset.tab}']`);
      
      this.tabItem =new TabItem(this.tab, this.itemElement);
      
      this.element.addEventListener("click", () => this.select());
      
    };
  
    select() {
      const links = this.tab.querySelectorAll('.reviews-link');

      Array.from(links).forEach(function(link){
       link.classList.remove('reviews-link-selected');
       });
      
      this.element.classList.toggle('reviews-link-selected');
      
     
      this.tabItem.select();
      
    }
  }
  
  class TabItem {
    constructor(tab, element) {
     this.element = element;
     this.tab = tab;
    }
  
    select() {
      const items = this.tab.querySelectorAll('.review-item');
  
      Array.from(items).forEach(function(item){
        item.classList.remove('review-item-selected');
        });
     
      console.log(this.element);
      this.element.classList.toggle('review-item-selected');
    }
  }
  
  
  const tabs = document.querySelectorAll('.reviews');
  tabs.forEach(tab => {
  const links = tab.querySelectorAll('.reviews-link');
  
  links.forEach(function(link){
    new TabLink(tab, link);
  });
  })
  