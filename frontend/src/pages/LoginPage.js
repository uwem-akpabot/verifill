import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Helmet } from "react-helmet";

const LoginPage = (props) => {
  let {loginUser} = useContext(AuthContext)
  const pageTitle = 'Login';

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.caption} | {pageTitle}</title>
        <link rel="canonical" href="http://9jacodekids.com/login" />
        <meta name="description" content="9jaCodeKids website, learn coding" />
      </Helmet>

      <main className="d-flex w-100">
		<div className="container d-flex flex-column">
			<div className="row vh-100">
				<div className="col-sm-10 col-md-6 col-lg-5 mx-auto d-table h-100">
					<div className="d-table-cell align-middle">

						<div className="text-center mt-4">
							<h1 className="h2">Verifill</h1>
							<p className="lead">
								Your robust verification app
							</p>
						</div>

						<div className="card">
							<div className="card-body">
								<div className="m-sm-4">
                  <h1 className="h2">Sign-in</h1>
                  <p>Login to access your dashboard and data.</p>
									<form onSubmit={loginUser}>
										<div class="mb-3">
											<label className="form-label"><b>Username</b></label>
											<input className="form-control form-control-lg" type="text" name="username" placeholder="Enter your username" />
										</div>
										<div className="mb-3">
											<label className="form-label"><b>Password</b></label>
											<input className="form-control form-control-lg" type="password" name="password" placeholder="Enter your password" />
											<br /><small>
                        New on our platform? <a href="index.html">Create an account</a>
                      </small>
										</div>
										<div>
										</div>
										<div className="text-center mt-3">
                      <input type="submit" className="btn btn-lg btn-primary w-100 " value="Sign in" />
										</div>
									</form>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</main>


    </div>
  )
}

export default LoginPage
