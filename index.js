function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
  
}

function increaseRankBy(n) {
  const ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  
  for (let i = 0; i < ranks.length; i++) {
    var liNum = parseInt(ranks[i].innerHTML);
    ranks[i].innerHTML = (liNum + n).toString();
  }
}

function deepestChild() {
  const grandNode = document.querySelector('#grand-node');
  const firstDiv = grandNode.children;
  const secondDiv = firstDiv.children;
  const thirdDiv = secondDiv.children;
  const fourthDiv = fourthDiv.children.innerHTML;
  return fourthDiv;
}

