let heading=document.querySelector('#gl')
// for query selector we have to use css property for class .class name
// and for id # id name;
//console.log(heading)

/*heading.style.backgroundColor='red'
console.log(heading)
*/

/*heading.classList.add('success')
console.log(heading)
// for adding class we have to use inbuild property of javascript
// classList 
*/

// now we have to add kabaddi in li , likewise  <li class="list-item">kabaddi</li>

let ul=document.querySelector('#games');
console.log(ul);

let li=document.createElement('li')// it is inbuild function of javascript to create new element
//now we have created <li> </li> but we have not added in ul so to add in ul we have to append it ul.append('li)
li.innerText='kabaddi'// now we have to add content in li 
li.setAttribute('class','list-item')// now we have to add class name to li(kabaddi) for that  set attribute is used
// we can also remove by using removeattributes property
// class is attribute css selector
ul.append(li)

// travessing
// parent - used to find parent element 
// child  - used to find child element
//console.log(document.childNodes)
//console.log(document.parentNode)
//let ul=document.querySelector('#games');
//console.log(ul.parentElement);
//console.log(ul.parentnode.parentnode);
//console.log(ul.childElement);