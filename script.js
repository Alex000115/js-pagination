const data = Array.from({length:20}, (_,i)=>`Item ${i+1}`);
const perPage = 5;
let page = 1;

function render(){
  const list = document.getElementById('list');
  list.innerHTML = '';
  const start = (page-1)*perPage;
  data.slice(start, start+perPage).forEach(i=>{
    const li = document.createElement('li');
    li.innerText = i;
    list.appendChild(li);
  });
  document.getElementById('page').innerText = page;
}

function next(){
  if(page * perPage < data.length){
    page++;
    render();
  }
}
function prev(){
  if(page > 1){
    page--;
    render();
  }
}

render();
