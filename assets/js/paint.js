function configureListeners() {
    let images = document.body.getElementsByTagName('img');

     for (var i = 0; i < images.length; i++) {        
        images[i].addEventListener('mouseover', addOpacity, false)
        images[i].addEventListener('mouseout', removeOpacity, false)
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
        this.classList.add('dim');
        getProductInfo(event.target.id);     
     }
    


function removeOpacity(event) {
     //remove appropriate CSS class
     if (this.classList.contains('dim')){
        this.classList.remove('dim');
     }

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            // set variables for price and color name and invoke a function to update the price  
            updatePrice('$14.99', 'Lime Green')  
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price    
            updatePrice('$11.14', 'Medium Brown')  
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price  
            updatePrice('$22.99', 'Royal Blue') 
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price  
            updatePrice('$13.42', 'Solid Red')  
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price       
            updatePrice('$21.98', 'Solid White')  
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price        
            updatePrice('$4.99', 'Solid Black')  
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price 
            updatePrice('$8.22', 'Solid Cyan')  
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price   
            updatePrice('$11.99', 'Solid Purple')  
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            updatePrice('$14.99','Solid Yellow') 
            break;   
          default:              
    }

    function updatePrice(price, colorName)
    {       
        let colorPrice = document.getElementById('color-price')
        colorPrice.textContent = price;
        
        
        let color = document.getElementById('color-name')
        color.textContent = colorName;
        
    }
    
}
