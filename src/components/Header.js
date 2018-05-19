import React,{Component} from 'react';
export class Header extends Component{
render(){

	return(
<div className="shopping-list" style={{height:'60px',width:'100%',backgroundColor:'skyblue',display: 'flex'}}>
<div style={{lineHeight: '60px',height: '100%',width: '100px',textAlign: 'center',fontWeight:'bold',color: 'white'}}>
<a className="link" href='#'>Home</a>
</div>
<div style={{lineHeight: '60px',height: '100%',width: '100px',textAlign: 'center',fontWeight:'bold',color: 'white'}}>
<a className="link" href='#'>Contacts</a>
</div>
<div  style={{lineHeight: '60px',height: '100%',width: '100px',textAlign: 'center',fontWeight:'bold',color: 'white'}}>
<a className="link" href='#'>About</a>
</div>
</div>


		);
}

 }
  