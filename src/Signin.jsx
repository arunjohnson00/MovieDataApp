import React from 'react'

function Signin() {
    return (
        <div className="modal fade" id="ab" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content p-4"><div className='jsc'> <button type="button" className="btn btn-outline-danger x-btn" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
           </div>
            <div className="modal-body">
                <h3 className="mb-4 title jsc">My Account</h3>
                <div className="form-group"><label className="form-control-placeholder p-0" htmlFor="name">Email</label> <input type="text " id="email" className="form-control p-2 " placeholder='Enter Email'/>  </div>
                <div className="form-group"><label className="form-control-placeholder p-0" htmlFor="password">Password</label> <input type="text" id="password" className="form-control p-2" placeholder='Enter Password'/>  </div> <label className="tc">By signing up I accept the <strong>Terms & Conditions</strong> of Daily</label>
            </div>
            <div className="jsc"> <button type="button" className="btn btn-danger " style={{width:"100%"}} data-dismiss="modal">SIGNIN</button> </div>
        </div>
    </div>
</div>
    )
}

export default Signin
