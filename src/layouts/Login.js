import React from "react";
function Login()
{
    return (<div className="main-bg">
        <h1>Fintinity</h1>
        <div className="sub-main-w3">
        <div className="image-style">
         </div>
         <div className="vertical-tab">
         <div id="section1" className="section-w3ls">
         <input type="radio" name="sections" id="option1" checked/>
					<label for="option1" className="icon-left-w3pvt"><span className="fa fa-user-circle" aria-hidden="true"></span>Login</label>
					<article>
						<form action="#" method="post">
							<h3 className="legend">Login</h3>
							<div className="input">
								<span className="fa fa-envelope-o" aria-hidden="true"></span>
								<input type="number" placeholder="Mobile Number" name="email" required />
							</div>
							<div className="input">
								<span className="fa fa-key" aria-hidden="true"></span>
								<input type="password" placeholder="Password" name="password" required />
							</div>
							<button type="submit" className="btn submit">Login</button>
							<a href="#" className="bottom-text-w3ls">Forgot Password?</a>
						</form>
					</article>
        
        
        </div>
        <div id="section2" className="section-w3ls">
					<input type="radio" name="sections" id="option2"/>
					<label for="option2" className="icon-left-w3pvt"><span className="fa fa-pencil-square" aria-hidden="true"></span>Register</label>
					<article>
						<form action="#" method="post">
							<h3 className="legend">Register Here</h3>
							<div className="input">
								<span className="fa fa-user-o" aria-hidden="true"></span>
								<input type="number" placeholder="Mobile Number" name="name" required />
							</div>
							<div className="input">
								<span className="fa fa-key" aria-hidden="true"></span>
								<input type="password" placeholder="Password" name="password" required />
							</div>
							<div class="input">
								<span className="fa fa-key" aria-hidden="true"></span>
								<input type="password" placeholder="Confirm Password" name="password" required />
							</div>
							<button type="submit" className="btn submit">Register</button>
						</form>
					</article>
				</div>
                <div id="section3" className="section-w3ls">
					<input type="radio" name="sections" id="option3"/>
					<label for="option3" className="icon-left-w3pvt"><span className="fa fa-lock" aria-hidden="true"></span>Forgot Password?</label>
					<article>
						<form action="#" method="post">
							<h3 className="legend last">Reset Password</h3>
							<p className="para-style">Enter your email address below and we'll send you an email with instructions.</p>
							<p className="para-style-2"><strong>Need Help?</strong> Learn more about how to <a href="#">retrieve an existing
									account.</a></p>
							<div className="input">
								<span className="fa fa-envelope-o" aria-hidden="true"></span>
								<input type="number" placeholder="Mobile Number" name="email" required />
							</div>
							<button type="submit" className="btn submit last-btn">Reset</button>
						</form>
					</article>
				</div>
        </div>


        </div>
				
				
			
    </div>)
}
export default Login