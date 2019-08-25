/* 1. Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog" */

let sectionElement = document.querySelector( '.article__header' );
console.log( sectionElement );
sectionElement.textContent = "Welcome to the Alex blog";


/* 2. Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important. */
let elementList = document.querySelectorAll( 'article__header' );
for( let i = 0; i < elementList.length; i++ ) {
    elementList[i].classList = "article__header important";
}

/* 3. Obtain a reference the element with a class of dashed and remove it. */
const elementToRemove = document.querySelector( '.dashed' );
console.log( elementToRemove );
elementToRemove.parentNode.removeChild( elementToRemove );

/* 4. Obtain a reference the element with a class of article_footer and add the class of goldenrod it. */
const element = document.querySelector( '.article__footer' );
element.className = element.className + ' goldenrod';
