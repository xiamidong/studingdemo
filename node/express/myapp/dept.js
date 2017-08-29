

let depts = [];
function getItemDept (data) {
  data.forEach(item => {
    if(item.children && Array.isArray(item.children)) {
        depts.push(item));
        delete depts[depts.length-1].children;
        getItemDept(item.children);
    } else {
    	depts.push(item);
    }
  });
}

let data=[{
	name:'1',
	children: [{
		name:'2',
		children: [{
			name:'3'
		}]
 },{
 	name: '4'
 }]
},{
	name:'5',
	children: [{
		name:'6',
		children: [{
			name:'7'
		}]
 },{
 	name: '8'
 }]
}]

getItemDept(data);
console.log('depts', depts);


