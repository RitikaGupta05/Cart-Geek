import React from "react";

const Header = (props) => {
  return (
   <div>
        <header>
                <div className="container">
                    <div className="row p-3">
                        <div className="col-lg-8 col-md-8 col-sm-9 text-start">
                            <div className="logo"><img src="../../images/logo.png" /> </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-3 text-end">
                            <button className="chef">Become a chef</button>
                            <button className="login">Login</button>
                        </div>
                    </div>
                </div>
            </header>
            
   </div>
  );
}

export default Header;
