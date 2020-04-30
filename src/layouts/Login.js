import React from "react";

import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";


import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();


class Login extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
		  mobileno:'',
		  password:'',
		  savepass:'null',
        };
	  }
	  

	mobilenumchnage=(event)=>
	{
		this.setState({mobileno:event.target.value})
		console.log("mobliechange");
	}
	passwordnumchnage=(event)=>
	{
		this.setState({password:event.target.value})
		console.log("password");
	}
    loginClickHandler=()=>
    {
		fetch("https://finitinity.firebaseio.com/User/"+this.state.mobileno+".json")
		.then(res => res.json())
		.then(
		  (result) => {

			this.setState({
			  isLoaded: true,
			  savepass: result.pass
			  
			});
			if(result.pass==this.state.password)
			{
				this.setState({
					isLoaded: true,
					error:"",
					
					
				  });
				  console.log(result.pass+"error"+this.state.error+this.state.savepass)
			}else{
				this.setState({
					isLoaded: true,
					error:"You have entered Wrong Password",
					
					
				  });
				  console.log("error"+this.state.error)
			}
			
			
		  },
	 
		  (error) => {
			console.log(error)
			this.setState({
			  isLoaded: true,
			  error:error
			});
		  }
		)
		.catch(error=>{
			console.log("catch")
			this.setState({
				isLoaded: true,
				error:"User Not Found"
			  });
		})
        // console.log("clickes"+this.state.mobileno+""+this.state.password);
    }
     
    render (){
		if(this.state.password==this.state.savepass)
		{
		  return(
			<Router history={hist}>
			<Switch>
			  <Route path="/admin" component={Admin} />
			 
			  <Redirect from="/" to="/admin/dashboard" />
		
			
			</Switch>
		  </Router>
			 
		  )
		}else{
			return (<div className="main-bg">
			<h1>Fintinity</h1>
			<div className="sub-main-w3">
			<div className="image-style">
			 </div>
			 <div className="vertical-tab">
			 <div id="section1" className="section-w3ls">
			 <input type="radio" name="sections" id="option1" defaultChecked/>
						<label htmlFor="option1" className="icon-left-w3pvt"><span className="fa fa-user-circle" aria-hidden="true"></span>Login</label>
						<article>
							<section>
								<h3 className="legend">Login</h3>
								<div className="input">
									<span className="fa fa-envelope-o" aria-hidden="true"></span>
									<input type="number" placeholder="Mobile Number" name="email" value={this.state.mobileno} onChange={this.mobilenumchnage} required />
								</div>
								<div className="input">
									<span className="fa fa-key" aria-hidden="true"></span>
									<input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.passwordnumchnage} required />
								</div>
								<button  className="btn submit" onClick={this.loginClickHandler}>Login</button>
	<div>{this.state.error}</div>
								<a href="#" className="bottom-text-w3ls">Forgot Password?</a>
							</section>
						</article>
			
			
			</div>
			<div id="section2" className="section-w3ls">
						<input type="radio" name="sections" id="option2"/>
						<label htmlFor="option2" className="icon-left-w3pvt"><span className="fa fa-pencil-square" aria-hidden="true"></span>Register</label>
						<article>
							<section >
								<h3 className="legend">Register Here</h3>
								<div className="input">
									<span className="fa fa-user-o" aria-hidden="true"></span>
									<input type="number" placeholder="Mobile Number" name="name" required />
								</div>
								<div className="input">
									<span className="fa fa-key" aria-hidden="true"></span>
									<input type="password" placeholder="Password" name="password" required />
								</div>
								<div className="input">
									<span className="fa fa-key" aria-hidden="true"></span>
									<input type="password" placeholder="Confirm Password" name="password" required />
								</div>
								<button type="submit" className="btn submit">Register</button>
							</section>
						</article>
					</div>
					<div id="section3" className="section-w3ls">
						<input type="radio" name="sections" id="option3"/>
						<label htmlFor="option3" className="icon-left-w3pvt"><span className="fa fa-lock" aria-hidden="true"></span>Forgot Password?</label>
						<article>
							<section >
								<h3 className="legend last">Reset Password</h3>
								<p className="para-style">Enter your email address below and we'll send you an email with instructions.</p>
								<p className="para-style-2"><strong>Need Help?</strong> Learn more about how to <a href="#">retrieve an existing
										account.</a></p>
								<div className="input">
									<span className="fa fa-envelope-o" aria-hidden="true"></span>
									<input type="number" placeholder="Mobile Number" name="email" required />
								</div>
								<button type="submit" className="btn submit last-btn">Reset</button>
							</section>
						</article>
					</div>
			</div>
	
	
			</div>
					
					
				
		</div>)
		}
		}
		
}
export default Login