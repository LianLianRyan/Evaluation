
const Api = (() =>{
    const getDataList = ()=>{
        return fetch("https://jsonplaceholder.typicode.com/todos").then((dataList)=>{return dataList.json();})
}
return {getDataList}
})()
const View = (()=>{

// everthing relaed html template

//dom selector: input/ add button/container
const domSelector = {
    input :     document.querySelector("#todoListInput"),
    addBtn :    document.querySelector("#addButton"),
    container : document.querySelector("#taskContainer")
}

// create template
const createTemplate =(dataList)=>{
    let template = '';
    dataList.forEach(item => {
        template+= `<li>${item.title}<button class = "deleteBtn" id = "${item.id}">x</button></li>`
    });
    return template;
}

//embed template to html / rerender template
const render = (elemnet,innerHTMLTemplate) =>{
    elemnet.innerHTML = innerHTMLTemplate;
}

  return {
    domSelector,
    createTemplate,
    render}
})()

const Model = ((view,api)=>{
     
    const { domSelector,createTemplate,render } = view
    const { getDataList } = api

// encapsulate state class - create update delete read
class State {
    constructor(){
    this._dataList = [];
    }
    //get 
    get dataList(){
     return this._dataList;   
    }
    //set dataList 
    set dataList(newList){
        this._dataList = newList;
        const template =createTemplate(this._dataList)
        render(domSelector.container,template)
    }
    
}
// use create template with data in Model - then re-render it
  return {State,getDataList}

})(View,Api)

const Controller = ((view,model)=>{
   

   const {domSelector} = view;
   const {State,getDataList} = model;
   const state = new State();

//where this is a event, it update the model
//addeventListenter => update model


    domSelector.addBtn.addEventListener('click',()=>{
        let inputVal = domSelector.input.value;
        state.dataList = [...state.dataList,{title:inputVal,id:Math.random()}];
        domSelector.input.value = "";
    })


    domSelector.container.addEventListener('click',(event)=>{
        let id = event.target.id;
        let newList = state.dataList.filter((item)=>item.id != id);
        state.dataList = newList;
    })

    const bootstrap = () =>{
        getDataList().then((res)=> {state.dataList= res.slice(0,5)})
    }
    return {bootstrap}

})(View,Model)

Controller.bootstrap()